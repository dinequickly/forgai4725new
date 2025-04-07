import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Debug: Log the API key (first few characters only for security)
    const apiKey = process.env.GOOGLE_API_KEY || '';
    console.log('API Key available:', apiKey ? `${apiKey.substring(0, 4)}...` : 'No API key found');

    // If no API key is found, use a fallback response instead of throwing an error
    if (!apiKey) {
      console.warn('No Google API key found - using fallback response');
      return NextResponse.json({
        message: "I'm currently operating in fallback mode because the Google API key is not configured. Please add your Google API key to the Vercel environment variables.",
        fallback: true
      });
    }

    // Call Google's Gemini API
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
    console.log('Calling Google API at:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: message }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1000,
        }
      })
    });

    if (!response.ok) {
      let errorMessage = `Google API error: ${response.status}`;
      try {
        const errorData = await response.json();
        console.error('Google API error details:', JSON.stringify(errorData));
        if (errorData.error) {
          errorMessage += ` - ${errorData.error.message || errorData.error.status}`;
        }
      } catch (e) {
        console.error('Could not parse error response:', e);
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Extract the response text from the Gemini API response
    let aiResponse = "Sorry, I couldn't generate a response.";
    if (data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts[0]) {
      aiResponse = data.candidates[0].content.parts[0].text;
    }

    return NextResponse.json({ message: aiResponse });
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
