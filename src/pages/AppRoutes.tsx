import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AccountPage } from './AccountPage';
import { ConfigsPage } from '../pages/ConfigsPage';
import { OrdersPage } from './OrdersPage';
import { PromoPage } from './PromoPage';
import { NotFoundPage } from './NotFoundPage';
import { LoginPage } from './LoginPage';
import { GuestOnly, RequireAuth } from './RequireAuth';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/login"
      element={
        <GuestOnly>
          <LoginPage />
        </GuestOnly>
      }
    />
    <Route
      path="/configs"
      element={
        <RequireAuth>
          <ConfigsPage />
        </RequireAuth>
      }
    />
    <Route
      path="/promo"
      element={
        <RequireAuth>
          <PromoPage />
        </RequireAuth>
      }
    />
    <Route
      path="/orders"
      element={
        <RequireAuth>
          <OrdersPage />
        </RequireAuth>
      }
    />
    <Route
      path="/account"
      element={
        <RequireAuth>
          <AccountPage />
        </RequireAuth>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);