  export interface AuthState {
    isAuthenticated: boolean;
    error: string | null;
  }
  
  export interface LoginCredentials {
    login: string;
    password: string;
  }

  export interface LoginResponse {
    access: string;
    refresh: string;
  }

  // API response shapes (server models)
  export interface ApiUser {
    id: string;
    login: string;
    verified: boolean;
  }

  export interface ApiProfile {
    first_name: string;
    last_name: string;
    lang_code: 'ru' | 'en' | string;
    email: string;
  }

  export interface ApiRole {
    name: string;
  }

  export interface ApiSocial {
    login: string;
    name: string; // e.g. 'telegram'
    email: string;
  }

  export interface ApiSession {
    user_agent: string;
    ip_address: string;
    device_info: string;
    session_name: string;
    id: string;
    is_active: boolean;
    expires_at: string; // ISO datetime string
    last_activity: string; // ISO datetime string
  }

  export interface AuthProfileResponse {
    user: ApiUser;
    profile: ApiProfile;
    role: ApiRole;
    social: ApiSocial[];
    sessions: ApiSession[];
  }