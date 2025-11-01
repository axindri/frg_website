import styles from './OrdersPage.module.css';
import { Orders } from '../components/Orders/Orders';
export const OrdersPage = () => {
  return (
    <div className={styles.container}>
      <Orders />
    </div>
  );
};
