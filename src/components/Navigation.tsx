import { Link, useLocation } from 'react-router-dom';
interface NavigationProps {
  navItems: {
    path: string;
    label: string;
  }[];
}
export const Navigation = ({ navItems }: NavigationProps) => {
  const location = useLocation();
  return (
    <nav>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
          >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};