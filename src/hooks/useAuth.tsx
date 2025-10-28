import { useState } from "react";
import type { User, LoginCredentials, AuthState, LoginResponse } from '../types/auth';
import { AuthService } from '../services/authService';

const defaultAuthState: AuthState = {
    user: null,
    isAuthenticated: false,
    error: null
  };

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    
    try {
    
      await AuthService.login(credentials);
      const currentUser: User = await AuthService.getProfile();

      setUser(currentUser);
      setAuthState({
        user: currentUser,
        isAuthenticated: true,
        error: null
      });
    } catch (error) {
      console.error('Login error:', error);
      setAuthState({
        user: null,
        isAuthenticated: false,
        error: 'Invalid credentials'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await AuthService.logout();
    setAuthState(defaultAuthState);
    setUser(null);
    setLoginResponse(null);
  };

  return {
    isLoading,
    authState,
    handleLogin,
    handleLogout
  };
};