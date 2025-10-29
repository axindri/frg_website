import './App.css';
import { Layout } from './components/Layout';
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
    { path: '/account', label: 'Аккаунт' },
    { path: '/configs', label: 'Конфиги' },
    { path: '/orders', label: 'Заказы' },
    { path: '/promo', label: 'Промо' },
  ];

return (
<Layout navItems={navItems}>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/configs" element={<ConfigsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="*" element={<NotFoundPage />} />
  </Routes>
  </Layout>
  );
}

export default App;