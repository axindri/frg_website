import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AccountPage } from './AccountPage';
import { ConfigsPage } from '../pages/ConfigsPage';
import { OrdersPage } from './OrdersPage';
import { PromoPage } from './PromoPage';
import { NotFoundPage } from './NotFoundPage';
import { LoginPage } from './LoginPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/configs" element={<ConfigsPage />} />
    <Route path="/promo" element={<PromoPage />} />
    <Route path="/orders" element={<OrdersPage />} />
    <Route path="/account" element={<AccountPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);