import './styles/App.css';
import { Layout } from './components/Layout/Layout';
import { AppRoutes } from './pages/AppRoutes';

function App() {
  return (
  <Layout>
    <AppRoutes />
  </Layout>
  );
}

export default App;