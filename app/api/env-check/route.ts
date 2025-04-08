import { NextResponse } from 'next/server';
import { createEnvDebugInfo } from '@/utils/env-helper';

/**
 * Simple API endpoint to check environment variables
 * This is useful for debugging environment variable issues in production
 */
export async function GET() {
  const debugInfo = createEnvDebugInfo();
  
  return NextResponse.json({
    message: 'Environment variable check',
    environment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown',
    googleApiKeySet: !!process.env.GOOGLE_API_KEY,
    googleApiKeyLength: process.env.GOOGLE_API_KEY?.length || 0,
    availableVars: debugInfo.availableVars,
    timestamp: new Date().toISOString()
  });
}
