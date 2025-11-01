import styles from './Order.module.css';
import type { ApiOrder } from '../../types/api';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface OrderProps {
  order: ApiOrder;
}

export const Order = ({ order }: OrderProps) => {
  const [copied, setCopied] = useState(false);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  const handleTitleClick = async () => {
    try {
      await navigator.clipboard.writeText(order.id);
      toast.success('Скопировано в буфер обмена');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title} onClick={handleTitleClick}>
            {order.id}
          </h3>
        </div>
        <div className={styles.statusContainer}>
          <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>{order.status}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <span className={styles.label}>Цена:</span>
          <span className={styles.value}>
            {order.price} <span className={styles.currency}>{order.currency}</span>
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Ограничение IP:</span>
          <span className={styles.value}>{order.data.limit_ip}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Трафик:</span>
          <span className={styles.value}>{order.data.total_gb > 0 ? order.data.total_gb + ' GB' : 'Не ограничен'}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Последняя активность:</span>
          <span className={styles.value}>{formatDate(order._updated_dttm)}</span>
        </div>
      </div>
    </div>
  );
};
