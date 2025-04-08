/**
 * Utility functions for environment variable handling and debugging
 */

/**
 * Checks if a required environment variable is set
 * @param name The name of the environment variable
 * @returns True if the variable is set, false otherwise
 */
export function isEnvVarSet(name: string): boolean {
  return process.env[name] !== undefined && process.env[name] !== '';
}

/**
 * Gets a safe preview of an environment variable (first few chars)
 * @param name The name of the environment variable
 * @param previewLength Number of characters to show (default: 4)
 * @returns A safe preview string or indication that the variable is not set
 */
export function getEnvVarPreview(name: string, previewLength = 4): string {
  const value = process.env[name];
  if (!value) return '[not set]';
  if (value.length <= previewLength) return '[too short]';
  return `${value.substring(0, previewLength)}...`;
}

/**
 * Gets a list of all available environment variable names
 * @param excludePatterns Patterns to exclude from the list (e.g., ['SECRET', 'KEY'])
 * @returns Array of environment variable names
 */
export function getAvailableEnvVars(excludePatterns: string[] = []): string[] {
  if (typeof process.env !== 'object') return [];
  
  return Object.keys(process.env).filter(key => {
    return !excludePatterns.some(pattern => key.includes(pattern));
  });
}

/**
 * Creates a debug object with environment variable information
 * @returns Object with debug information
 */
export function createEnvDebugInfo(): Record<string, any> {
  return {
    nodeEnv: process.env.NODE_ENV || 'not set',
    availableVars: getAvailableEnvVars(['SECRET', 'KEY', 'TOKEN', 'PASSWORD']),
    googleApiKeySet: isEnvVarSet('GOOGLE_API_KEY'),
    googleApiKeyPreview: getEnvVarPreview('GOOGLE_API_KEY'),
    googleApiKeyLength: process.env.GOOGLE_API_KEY?.length || 0,
    vercelEnv: process.env.VERCEL_ENV || 'not set',
  };
}
