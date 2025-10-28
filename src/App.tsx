
import { LoginForm } from './components/auth/LoginForm';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  const { isLoading, user, authState, loginResponse, handleLogin, handleLogout } = useAuth();
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