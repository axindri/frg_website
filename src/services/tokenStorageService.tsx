import type { LoginResponse } from '../types/auth';

export const tokenStorage = {
    setTokens(loginResponseData: LoginResponse) {
      console.log('Setting tokens to local storage:', loginResponseData);
      localStorage.setItem('access',loginResponseData.access);
      localStorage.setItem('refresh', loginResponseData.refresh);
    },
  
    getAccessToken(): string | null {
      return localStorage.getItem('access');
    },
  
    getRefreshToken(): string | null {
      return localStorage.getItem('refresh');
    },
  
    clearTokens() {
      console.log('Clearing all tokens from local storage');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }
  };