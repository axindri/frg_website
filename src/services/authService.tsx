import type { LoginCredentials, LoginResponse } from '../types/auth';
import type { User } from '../types/auth';
import { tokenStorage } from './tokenStorageService';

const API_BASE_URL = 'http://localhost:8888/api/v1';

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    console.log('Trying to login:', credentials.login);
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
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

  static async getProfile(): Promise<User> {
    const access = tokenStorage.getAccessToken();
    if (!access) {
      throw new Error('No access token found in local storage');
    }
    const response = await fetch(`${API_BASE_URL}/me/profile`, {
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

    const user: User = {
      id: responseData.user.id,
      login: responseData.user.login,
      email: responseData.profile.email,
      role: responseData.role.name
    };
    console.log('User:', user);
    return user;
  }

  static async logout(): Promise<boolean> {
    const access = tokenStorage.getAccessToken();
    if (access) {
      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
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