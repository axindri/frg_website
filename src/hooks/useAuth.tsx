import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginCredentials, AuthState } from '../types/auth';
import { AuthService } from '../services/authService';
import { tokenStorage } from '../services/tokenStorageService';
import toast from 'react-hot-toast';

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
          toast.error('Authentication failed');
          console.error('Authentication error at initialization:', error);
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
      await AuthService.getProfile();

      setAuthState({
        isAuthenticated: true,
        error: null
      });
      
      navigate('/');
      toast.success('Successfully logged in!');

    } catch (error) {
      toast.error('Login failed');
      console.error('Login error:', error);
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