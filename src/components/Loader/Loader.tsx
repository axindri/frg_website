import { LoaderIcon } from '../Icons/NavIcons';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <LoaderIcon />
      <span>Загрузка...</span>
    </div>
  );
};
