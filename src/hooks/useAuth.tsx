import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { User, LoginCredentials, AuthState } from '../types/auth';
import { AuthService } from '../services/authService';
import { tokenStorage } from '../services/tokenStorageService';
import toast from 'react-hot-toast';

const defaultAuthState: AuthState = {
    user: null,
    isAuthenticated: false,
    error: null
  };

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check for existing token on component mount
  useEffect(() => {
    const initializeAuth = async () => {
      const token = tokenStorage.getAccessToken();
      if (token) {
        try {
          const user = await AuthService.getProfile();
          setAuthState({
            user,
            isAuthenticated: true,
            error: null
          });
        } catch (error) {
          // Token is invalid, clear it
          tokenStorage.clearTokens();
          setAuthState(defaultAuthState);
        }
      }
      setIsInitialized(true);
    };

    initializeAuth();
  }, []);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    
    try {
      await AuthService.login(credentials);
      const currentUser: User = await AuthService.getProfile();

      setAuthState({
        user: currentUser,
        isAuthenticated: true,
        error: null
      });
      
      navigate('/');
      toast.success('Successfully logged in!');

    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed');
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
    toast.success('Successfully logged out!');
  };

  return {
    isLoading,
    authState,
    isInitialized,
    handleLogin,
    handleLogout
  };
};