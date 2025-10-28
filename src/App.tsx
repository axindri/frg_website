
import { LoginForm } from './components/auth/LoginForm';
import { AppContainer } from './components/AppContainer';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  const { isLoading, authState, handleLogin, handleLogout } = useAuth();

  if (authState.isAuthenticated) {
    return <AppContainer />;
  }

  return (
    <div className="auth-container">
      <LoginForm onLogin={handleLogin} isLoading={isLoading} />
    </div>
  );
}

export default App;