import { API_CONFIG } from '../config/api';
import { tokenStorage } from './tokenStorageService';
import type { ApiProfileResponse } from '../types/api';

const API_URL = API_CONFIG.API_URL; // http://localhost:8887/api/v1

export class ApiService {
  static async get_profile(): Promise<ApiProfileResponse> {
    const access = tokenStorage.getAccessToken();
    if (!access) {
      throw new Error('No access token found in local storage');
    }
    const response = await fetch(`${API_URL}/me/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    const responseData = await response.json();
    console.log('API Service. profile response:', responseData);
    return responseData;
  }
}
