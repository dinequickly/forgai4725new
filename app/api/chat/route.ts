import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, NextRequest } from 'next/server';
import { createEnvDebugInfo, getEnvVarPreview } from '@/utils/env-helper';

// --- Configuration & Setup ---
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL; // Optional for Make.com integration

// Create and log debug information about environment variables
const envDebugInfo = createEnvDebugInfo();
console.log('Environment debug info:', envDebugInfo);

if (!GOOGLE_API_KEY) {
    console.error("FATAL ERROR: GOOGLE_API_KEY environment variable is not set.");
} else {
    // Log first few characters of API key for debugging
    console.log(`GOOGLE_API_KEY is set and starts with: ${getEnvVarPreview('GOOGLE_API_KEY')}`);
    console.log(`GOOGLE_API_KEY length: ${GOOGLE_API_KEY.length}`);
    console.log(`Running in environment: ${process.env.VERCEL_ENV || 'local'}`);
}

if (!MAKE_WEBHOOK_URL) {
    console.warn("WARNING: MAKE_WEBHOOK_URL environment variable is not set. Make.com integration will be disabled.");
}

// Optimized system prompt for ForgeAI
const OPTIMIZED_SYSTEM_PROMPT = `You are ForgeAI, an AI assistant specialized in helping startups create and optimize their digital presence.
You provide clear, concise, and helpful responses to questions about website development, marketing, and business strategy.
When asked to generate a website or landing page, you'll collect the necessary information and help the user visualize what their site could look like.`;

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

      // Provide more detailed error information
      const envVarInfo = GOOGLE_API_KEY ?
        `API key exists (${GOOGLE_API_KEY.length} chars) but client initialization failed` :
        'API key is missing or empty';

      // Get detailed environment debug info
      const debugInfo = createEnvDebugInfo();

      return NextResponse.json({
        message: `I'm currently operating in fallback mode because the Google API key is not properly configured. Please check your Vercel environment variables. Debug info: ${envVarInfo}`,
        fallback: true,
        debug: {
          ...debugInfo,
          vercelEnv: process.env.VERCEL_ENV || 'unknown',
          nodeEnv: process.env.NODE_ENV || 'unknown'
        }
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
      model: "gemini-pro", // Using a more stable model version
      systemInstruction: OPTIMIZED_SYSTEM_PROMPT,
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
    const aiTextMessage = response.text();
    console.log("AI Text Response:", aiTextMessage);

    const updatedHistory = [...history]; // Start building updated history
    updatedHistory.push({ role: "user", parts: [{ text: userMessage }] }); // Add user turn
    updatedHistory.push({ role: "model", parts: [{ text: aiTextMessage }] }); // Add AI turn

    // Send text response back WITH updated history
    return NextResponse.json({
      message: aiTextMessage,
      history: updatedHistory,
      type: 'text'
    }, { status: 200 });
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
