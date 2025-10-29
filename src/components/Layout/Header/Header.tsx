import { Navigation } from '../Navigation/Navigation';
import { publicNavItems, privateNavItems } from '../../../constants/navItems';
import { useAuthContext } from '../../../contexts/AuthContext';
import styles from './Header.module.css';

export const Header = () => {
  const { authState, isInitialized } = useAuthContext();
  const isAuthenticated = authState.isAuthenticated;
  const homeItem = publicNavItems.find((item) => item.path === '/');
   
  const navItems = !isInitialized 
    ? publicNavItems 
    : isAuthenticated
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