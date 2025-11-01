import { Configs } from '../components/Configs/Configs';
import styles from './ConfigsPage.module.css';

export const ConfigsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Конфигурации</h1>
      <Configs />
    </div>
  );
};
