import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, NextRequest } from 'next/server';

// --- Configuration & Setup ---
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL; // Optional for Make.com integration

if (!GOOGLE_API_KEY) {
    console.error("FATAL ERROR: GOOGLE_API_KEY environment variable is not set.");
}
if (!MAKE_WEBHOOK_URL) {
    console.warn("WARNING: MAKE_WEBHOOK_URL environment variable is not set. Make.com integration will be disabled.");
}

// Optimized system prompt for ForgeAI
const OPTIMIZED_SYSTEM_PROMPT = `You are ForgeAI, an AI assistant specialized in helping startups create and optimize their digital presence.
You provide clear, concise, and helpful responses to questions about website development, marketing, and business strategy.
When asked to generate a website or landing page, you'll collect the necessary information and help the user visualize what their site could look like.`;

// Tool definition for site variable generation
const generateSiteVariablesTool = {
  functionDeclarations: [
    {
      name: "generate_site_variables",
      description: "Generate variables for a new website or landing page based on user input",
      parameters: {
        type: "object",
        properties: {
          business_name: {
            type: "string",
            description: "The name of the business or startup"
          },
          business_description: {
            type: "string",
            description: "A brief description of what the business does"
          },
          primary_color: {
            type: "string",
            description: "Primary brand color in hex format (e.g., #FF5500)"
          },
          secondary_color: {
            type: "string",
            description: "Secondary brand color in hex format (e.g., #0055FF)"
          },
          headline: {
            type: "string",
            description: "Main headline for the landing page"
          },
          subheadline: {
            type: "string",
            description: "Supporting subheadline that explains the value proposition"
          }
        },
        required: ["business_name", "business_description", "headline"]
      }
    }
  ]
};

// Initialize Google AI client if API key is available
let genAI: GoogleGenerativeAI | undefined;
if (GOOGLE_API_KEY) {
    genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
}

// --- API Route Handler (App Router Style) ---
export async function POST(request: NextRequest) {
  try {
    // Check if essential components are initialized
    if (!genAI) {
      console.error("API cannot function: Google AI Client not initialized (check API key).");
      return NextResponse.json({
        message: "I'm currently operating in fallback mode because the Google API key is not configured. Please add your Google API key to the Vercel environment variables.",
        fallback: true
      });
    }

    // Extract message and history from JSON request body
    const body = await request.json();
    const { message: userMessage, history = [] } = body;

    if (!userMessage) {
      return NextResponse.json({ message: 'User message is required' }, { status: 400 });
    }

    // --- Select Model and Configure ---
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
      systemInstruction: OPTIMIZED_SYSTEM_PROMPT,
      tools: generateSiteVariablesTool,
    });

    // --- Start Chat / Send Message ---
    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.3 // Apply optimized temperature
      }
    });

    console.log(`Sending message to AI: "${userMessage}"`);
    const result = await chat.sendMessage(userMessage);
    const response = result.response;

    // --- Process Response ---
    let extractedArgs = null;
    let aiTextMessage = null;
    let updatedHistory = [...history]; // Start building updated history

    updatedHistory.push({ role: "user", parts: [{ text: userMessage }] }); // Add user turn

    const functionCalls = response.functionCalls();

    if (functionCalls && functionCalls.length > 0 && functionCalls[0].name === 'generate_site_variables') {
      // --- Handle Function Call ---
      console.log("Function call requested by model:");
      extractedArgs = functionCalls[0].args;
      console.log("Arguments:", JSON.stringify(extractedArgs, null, 2));

      // Trigger Make.com webhook if URL is configured
      if (MAKE_WEBHOOK_URL) {
        const payloadForMake = {
          ...extractedArgs,
          user_id: "app-router-user-mvp", // Example user ID
        };

        console.log("Sending payload to Make.com webhook...");
        const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payloadForMake),
        });

        if (!makeResponse.ok) {
          const errorBody = await makeResponse.text();
          console.error(`Error triggering Make.com: ${makeResponse.status} ${makeResponse.statusText}`, errorBody);
          return NextResponse.json({ message: 'ForgeAI started but failed to trigger the build process.' }, { status: 502 });
        }
        console.log("Make.com webhook triggered successfully.");
      } else {
        console.log("Make.com webhook URL not configured. Skipping webhook trigger.");
      }

      // Send processing confirmation - NO history update sent back on function call
      return NextResponse.json({
        message: "Okay, I have the details! ForgeAI is starting the build process now...",
        type: 'processing' // Special type for frontend
      }, { status: 200 });

    } else {
      // --- Handle Regular Text Response ---
      aiTextMessage = response.text();
      console.log("AI Text Response:", aiTextMessage);

      updatedHistory.push({ role: "model", parts: [{ text: aiTextMessage }] }); // Add AI turn

      // Send text response back WITH updated history
      return NextResponse.json({
        message: aiTextMessage,
        history: updatedHistory,
        type: 'text'
      }, { status: 200 });
    }
  } catch (error: unknown) {
    console.error('Error in chat API:', error);

    // Return a more detailed error message to help with debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error && process.env.NODE_ENV === 'development' ? error.stack : undefined;

    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        details: errorMessage,
        // For development only - remove in production
        stack: errorStack
      },
      { status: 500 }
    );
  }
}
