import type { AuthProfileResponse, LoginCredentials, LoginResponse } from '../types/auth';
import { tokenStorage } from './tokenStorageService';
import { API_CONFIG } from '../config/api';

const AUTH_URL = API_CONFIG.AUTH_URL;

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    console.log('Trying to login:', credentials.login);
    const response = await fetch(`${AUTH_URL}/auth/login`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(credentials)
    });
    
    if (!response.ok) {
      tokenStorage.clearTokens();
      throw new Error(`Login failed: ${response.status}`);
    }
    
    const loginResponseData = await response.json();
    console.log('Login response:', loginResponseData);

    tokenStorage.setTokens(loginResponseData);
    return loginResponseData;
  }

  static async getProfile(): Promise<AuthProfileResponse> {
    const access = tokenStorage.getAccessToken();
    if (!access) {
      throw new Error('No access token found in local storage');
    }
    const response = await fetch(`${AUTH_URL}/me/profile`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    });

    if (!response.ok) {
      throw new Error(`Get profile failed: ${response.status}`);
    }
    const responseData = await response.json();
    console.log('Profile response:', responseData);
    return responseData;
  }

  static async logout(): Promise<boolean> {
    const access = tokenStorage.getAccessToken();
    if (access) {
      const response = await fetch(`${AUTH_URL}/auth/logout`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`Logout failed: ${response.status}`);
      }
    }

    tokenStorage.clearTokens();
    return true;
  }
}