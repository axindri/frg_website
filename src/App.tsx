
import { LoginForm } from './components/auth/LoginForm';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  const { isLoading, authState, handleLogin, handleLogout } = useAuth();

  if (authState.isAuthenticated) {
    return (
      <div className="app-container">
        <h1 className="app-title">Добро пожаловать!</h1>
        <button className="app-button" onClick={handleLogout}>Выйти</button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <LoginForm onLogin={handleLogin} isLoading={isLoading} />
    </div>
  );
}

export default App;