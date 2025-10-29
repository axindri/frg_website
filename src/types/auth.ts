export interface User {
    id: string;
    login: string;
    email: string | null;
    role: string;
  }
  
  export interface AuthState {
    user: User | null;
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