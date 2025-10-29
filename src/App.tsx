import './styles/App.css';
import { Layout } from './components/Layout/Layout';
import { AppRoutes } from './pages/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AuthProvider>
  );
}

export default App;