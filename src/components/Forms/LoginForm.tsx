import { useState } from 'react';
import type { LoginCredentials } from '../../types/auth';
import styles from './LoginForm.module.css';
import { DefaultButton } from '../Buttons/DefaultButton';
import { DefaultInput } from '../Inputs/DefaultInput';
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.title}>Вход</div>
          <DefaultInput
            label="Логин"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            disabled={isLoading}
          />


          <DefaultInput
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <div className={styles.buttonContainer}>
            <DefaultButton type="submit" disabled={isLoading}>
              {isLoading ? 'Вход...' : 'Войти'}
            </DefaultButton>
          </div>
        </div>
      </form>
    </div>
  );
};