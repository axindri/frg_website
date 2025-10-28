import { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import type { User, AuthState, LoginResponse, LoginCredentials } from './types/auth';
import { AuthService } from './services/authService'; 
import './App.css';

const defaultAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null
};

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(null);

  const handleLogin = async (login: string, password: string) => {
    setIsLoading(true);
    
    try {
      const credentials: LoginCredentials = { 
        login: login, 
        password 
      };
      console.log('Trying to login:', login);
    
      const loginResponseData: LoginResponse = await AuthService.login(credentials);
      const currentUser: User = await AuthService.getProfile();

      console.log('Login response:', loginResponseData);      
      console.log('Successfully logged in!', currentUser);

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

  if (authState.isAuthenticated) {
    return (
      <div>
        <h1>Добро пожаловать!</h1>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
  }

  return (
    <div>
      <LoginForm onLogin={handleLogin} isLoading={isLoading} />
    </div>
  );
}

export default App;