export const SITE_CONFIG = {
  // Astro sets import.meta.env.BASE_URL (with trailing slash) at build time.
  // Store it without the trailing slash so callers can join paths themselves.
  basePath: (import.meta.env.BASE_URL || '/').replace(/\/$/, ''),
};
