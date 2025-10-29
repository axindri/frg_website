import { LoginForm } from '../Forms/LoginForm';
import { useAuthContext } from '../../contexts/AuthContext';

export const LoginWidget = () => {
  const { handleLogin } = useAuthContext();
  return <div> 
    <LoginForm onLogin={handleLogin} />
  </div>;
};