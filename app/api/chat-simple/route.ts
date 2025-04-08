import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, NextRequest } from 'next/server';

// --- Configuration & Setup ---
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// Log environment information
console.log('Environment variables available:', Object.keys(process.env).join(', '));
console.log('GOOGLE_API_KEY is set:', !!GOOGLE_API_KEY);
if (GOOGLE_API_KEY) {
  console.log('GOOGLE_API_KEY length:', GOOGLE_API_KEY.length);
}

// System prompt for ForgeAI
const SYSTEM_PROMPT = `You are ForgeAI, an AI assistant specialized in helping startups create and optimize their digital presence. 
You provide clear, concise, and helpful responses to questions about website development, marketing, and business strategy.`;

// Initialize Google AI client if API key is available
let genAI: GoogleGenerativeAI | undefined;
if (GOOGLE_API_KEY) {
  genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
}

// --- API Route Handler ---
export async function POST(request: NextRequest) {
  try {
    // Check if Google AI client is initialized
    if (!genAI) {
      console.error("API cannot function: Google AI Client not initialized (check API key).");
      return NextResponse.json({
        message: "I'm currently operating in fallback mode because the Google API key is not configured. Please add your Google API key to the Vercel environment variables.",
        fallback: true,
        debug: {
          apiKeyExists: !!GOOGLE_API_KEY,
          apiKeyLength: GOOGLE_API_KEY ? GOOGLE_API_KEY.length : 0,
          environment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown'
        }
      });
    }

    // Extract message from request body
    const body = await request.json();
    const { message: userMessage } = body;

    if (!userMessage) {
      return NextResponse.json({ message: 'User message is required' }, { status: 400 });
    }

    // Configure model and generate response
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      systemInstruction: SYSTEM_PROMPT,
    });

    console.log(`Sending message to AI: "${userMessage}"`);
    const result = await model.generateContent(userMessage);
    const response = result.response;
    const aiTextMessage = response.text();
    
    console.log("AI Text Response:", aiTextMessage);

    // Return the response
    return NextResponse.json({
      message: aiTextMessage,
      type: 'text'
    }, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Error in chat API:', error);
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    return NextResponse.json({
      message: `Sorry, I encountered an error: ${errorMessage}. Please try again later.`,
      error: errorMessage
    }, { status: 500 });
  }
}
