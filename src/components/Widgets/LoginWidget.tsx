import { LoginForm } from '../Forms/LoginForm';
import { useAuth } from '../../hooks/useAuth';

export const LoginWidget = () => {
  const { handleLogin } = useAuth();
  return <div> 
    <LoginForm onLogin={handleLogin} />
  </div>;
};