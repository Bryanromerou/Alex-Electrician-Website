/**
 * Environment detection utilities
 * Helps identify which environment (production, staging, dev) the app is running in
 */

export type Environment = "production" | "preview" | "development";

/**
 * Get the current environment
 * @returns The current environment name
 */
export function getEnvironment(): Environment {
  // Server-side: Use Vercel's environment variable
  if (typeof window === "undefined") {
    return (process.env.VERCEL_ENV as Environment) || "development";
  }

  // Client-side: Use public environment variable or fallback
  return (process.env.NEXT_PUBLIC_VERCEL_ENV as Environment) || "production";
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return getEnvironment() === "production";
}

/**
 * Check if running in preview/staging/dev
 */
export function isPreview(): boolean {
  return getEnvironment() === "preview";
}

/**
 * Check if running in development (local)
 */
export function isDevelopment(): boolean {
  return getEnvironment() === "development";
}

/**
 * Get the current branch name (if available)
 */
export function getBranch(): string | undefined {
  return process.env.VERCEL_GIT_COMMIT_REF;
}

/**
 * Get environment-specific configuration
 * Useful for API endpoints, feature flags, etc.
 */
export function getEnvConfig() {
  const env = getEnvironment();

  return {
    environment: env,
    branch: getBranch(),
    isProduction: isProduction(),
    isPreview: isPreview(),
    isDevelopment: isDevelopment(),
    // Add environment-specific configs here
    // apiUrl: env === 'production' ? 'https://api.prod.com' : 'https://api.staging.com',
  };
}
