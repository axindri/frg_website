import { Navigation } from '../Navigation/Navigation';
import { navItems } from '../../../constants/navItems';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <img src={logo} alt="Fast Ray Gram" /> */}
          <h2 className={styles.title}>Fast Ray Gram</h2>
        </div>
        <Navigation navItems={navItems} />
      </div>
    </header>
  );
};