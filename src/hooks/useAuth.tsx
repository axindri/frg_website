import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginCredentials, AuthState } from '../types/auth';
import { AuthService } from '../services/authService';
import { tokenStorage } from '../services/tokenStorageService';

const defaultAuthState: AuthState = {
    isAuthenticated: false,
    error: null
  };

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const isInitializedRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    const initializeAuth = async () => {
      console.log('Initializing authentication');
      
      const token = tokenStorage.getAccessToken();
      if (token) {
        try {
          await AuthService.getProfile();

          setAuthState({
            isAuthenticated: true,
            error: null
          });

        } catch (error) {
          console.error('Authentication error at initialization:', error);
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
      await AuthService.getProfile();

      setAuthState({
        isAuthenticated: true,
        error: null
      });
      
      navigate('/');

    } catch (error) {
      setAuthState({
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
  };

  return {
    isLoading,
    authState,
    isInitialized,
    handleLogin,
    handleLogout
  };
};