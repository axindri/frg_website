import { createContext, useContext, type ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { LoginCredentials } from '../types/auth';

type AuthContextType = {
  authState: {
    isAuthenticated: boolean;
    error: string | null;
  };
  isLoading: boolean;
  isInitialized: boolean;
  handleLogin: (credentials: LoginCredentials) => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};
