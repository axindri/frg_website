export const tokenStorage = {
    setTokens(access: string, refresh: string) {
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
    },
  
    getAccessToken(): string | null {
      return localStorage.getItem('access');
    },
  
    getRefreshToken(): string | null {
      return localStorage.getItem('refresh');
    },
  
    clearTokens() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }
  };