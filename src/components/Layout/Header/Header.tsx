import { Navigation } from '../Navigation/Navigation';
import { publicNavItems, privateNavItems } from '../../../constants/navItems';
import { tokenStorage } from '../../../services/tokenStorageService';
import styles from './Header.module.css';

export const Header = () => {
  const isAuthenticated = !!tokenStorage.getAccessToken();
  const homeItem = publicNavItems.find((item) => item.path === '/');
  const navItems = isAuthenticated
    ? (homeItem ? [homeItem, ...privateNavItems] : privateNavItems)
    : publicNavItems;

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <h2 className={styles.title}>Fast Ray Gram</h2>
        </div>
        <Navigation navItems={navItems} />
    </header>
  );
};