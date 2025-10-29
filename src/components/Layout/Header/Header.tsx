import { Navigation } from '../Navigation/Navigation';
import { navItems } from '../../../constants/navItems';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <h2 className={styles.title}>Fast Ray Gram</h2>
        </div>
        <Navigation navItems={navItems} />
    </header>
  );
};