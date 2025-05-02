import { NextResponse, NextRequest } from 'next/server';

// Webhook URL for idea submissions
const WEBHOOK_URL = 'https://spanishclass.app.n8n.cloud/webhook/d2050970-c77a-4dad-8292-282de4e55cfa';

export async function POST(request: NextRequest) {
  try {
    // Extract idea data from request body
    const body = await request.json();
    const { idea, name, email } = body;

    if (!idea) {
      return NextResponse.json({ message: 'Idea is required' }, { status: 400 });
    }

    console.log(`Received idea submission: "${idea}"`);
    
    // Forward the idea to the webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idea,
        name: name || 'Anonymous',
        email: email || 'not provided',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook responded with status: ${webhookResponse.status}`);
    }

    // Return success response
    return NextResponse.json({
      message: 'Idea submitted successfully',
      success: true
    }, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Error in idea submission API:', error);
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    return NextResponse.json({
      message: `Sorry, we encountered an error while submitting your idea: ${errorMessage}. Please try again later.`,
      error: errorMessage,
      success: false
    }, { status: 500 });
  }
}