import { HomeIcon, LoginIcon, ConfigsIcon, PromoIcon, OrdersIcon, AccountIcon } from '../components/Icons/NavIcons';

export const publicNavItems = [
  { path: '/', label: 'Главная', icon: HomeIcon },
  { path: '/login', label: 'Вход', icon: LoginIcon },
];

export const privateNavItems = [
  { path: '/configs', label: 'Конфиги', icon: ConfigsIcon },
  { path: '/promo', label: 'Промо', icon: PromoIcon },
  { path: '/orders', label: 'Заказы', icon: OrdersIcon },
  { path: '/account', label: 'Аккаунт', icon: AccountIcon },
];

// For backward compatibility
export const navItems = [...publicNavItems, ...privateNavItems];
