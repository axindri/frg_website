import { useState } from 'react';
import type { LoginCredentials } from '../../types/auth';

interface LoginFormProps {
  onLogin: (credentials: LoginCredentials) => void;
  isLoading?: boolean;
}

export const LoginForm = ({ onLogin, isLoading = false }: LoginFormProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials: LoginCredentials = {
      login: login,
      password: password
    };
    onLogin(credentials);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Вход</h2>
        
        <div>
          <label>Логин:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
};