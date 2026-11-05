/** Resolves a file from /public, respecting Vite's `base`. */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;
