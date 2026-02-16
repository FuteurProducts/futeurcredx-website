/**
 * Asset utility functions for handling asset URLs across different domains
 */

/**
 * Gets the correct asset URL regardless of which domain/subdomain the site is being accessed from.
 * All assets are served from the same origin (relative paths).
 *
 * @param path The relative path to the asset (e.g., '/logos/banks/chase.png')
 * @returns The correct URL to load the asset
 */
export function getAssetUrl(path: string): string {
  // If path is already absolute with http/https, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Always use relative paths — assets are co-located with the app
  return normalizedPath;
}
