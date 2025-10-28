import { useState } from 'react';
import { ConfigsPage } from '../pages/ConfigsPage';
import { OrdersPage } from '../pages/OrdersPage';
import { PromoPage } from '../pages/PromoPage';
import { AccountPage } from '../pages/AccountPage';

type Page = 'configs' | 'orders' | 'promo' | 'account';

export const AppContainer = () => {
  const [currentPage, setCurrentPage] = useState<Page>('configs');

  const pages = [
    { id: 'configs' as Page, name: 'Конфиги' },
    { id: 'orders' as Page, name: 'Заказы' },
    { id: 'promo' as Page, name: 'Промо' },
    { id: 'account' as Page, name: 'Аккаунт' }
  ];

  const getPageTitle = () => {
    switch (currentPage) {
      case 'configs':
        return 'Конфиги';
      case 'orders':
        return 'Заказы';
      case 'promo':
        return 'Промо';
      case 'account':
        return 'Аккаунт';
      default:
        return 'Страница';
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'configs':
        return <ConfigsPage />;
      case 'orders':
        return <OrdersPage />;
      case 'promo':
        return <PromoPage />;
      case 'account':
        return <AccountPage />;
      default:
        return <div>Страница не найдена</div>;
    }
  };

  return (
    <div className="app-container">
      <nav className="navigation">
        {pages.map(page => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            className={`nav-button ${currentPage === page.id ? 'active' : ''}`}
          >
            {page.name}
          </button>
        ))}
      </nav>
      
      <main className="main-content">
        <h1 className="page-title">{getPageTitle()}</h1>
        {renderPage()}
      </main>
    </div>
  );
};
