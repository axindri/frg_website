export const API_CONFIG = {
  AUTH_URL: import.meta.env.VITE_AUTH_URL || 'http://localhost:8888/api/v1',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:8887/api/v1',
} as const;
