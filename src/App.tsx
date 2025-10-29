import './styles/App.css';
import { Layout } from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage';
import { AccountPage } from './pages/AccountPage';
import { ConfigsPage } from './pages/ConfigsPage';
import { OrdersPage } from './pages/OrdersPage';
import { PromoPage } from './pages/PromoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/login', label: 'Вход' },
    { path: '/configs', label: 'Конфиги' },
    { path: '/promo', label: 'Промо' },
    { path: '/orders', label: 'Заказы' },
    { path: '/account', label: 'Аккаунт' },
  ];

return (
<Layout navItems={navItems}>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/configs" element={<ConfigsPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
  </Routes>
  </Layout>
  );
}

export default App;