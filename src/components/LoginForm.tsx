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
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Вход</h2>
        
        <div className="form-group">
          <label>Логин:</label>
          <input
            type="text"
            className="form-input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            disabled={isLoading}
            placeholder="Введите логин"
          />
        </div>

        <div className="form-group">
          <label>Пароль:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            placeholder="Введите пароль"
          />
        </div>

        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
};