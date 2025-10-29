export const publicNavItems = [
    { path: '/', label: 'Главная' },
    { path: '/login', label: 'Вход' },
  ];

export const privateNavItems = [
    { path: '/configs', label: 'Конфиги' },
    { path: '/promo', label: 'Промо' },
    { path: '/orders', label: 'Заказы' },
    { path: '/account', label: 'Аккаунт' },
  ];

// For backward compatibility
export const navItems = [...publicNavItems, ...privateNavItems];