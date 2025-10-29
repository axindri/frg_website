import { useNavigate, useLocation} from 'react-router-dom';
import { NavButton } from '../../Buttons/NavButton';
import styles from './Navigation.module.css';
interface NavigationProps {
  navItems: {
    path: string;
    label: string;
  }[];
}

export const Navigation = ({ navItems }: NavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <NavButton key={item.path} onClick={() => { navigate(item.path); }} isActive={location.pathname === item.path}>
          {item.label}
        </NavButton>
      ))}
    </nav>
  );
};