import { useLocation } from 'react-router-dom';
import styles from './PageTitle.module.css';

export const PageTitle = () => {
  const location = useLocation();
  const pageTitle = location.pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return <h2 className={styles.pageTitle}>{pageTitle}</h2>;
};