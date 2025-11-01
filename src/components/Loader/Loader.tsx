import { LoaderIcon } from '../Icons/NavIcons';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <span>Загрузка</span>
      <LoaderIcon />
    </div>
  );
};
