import { useState } from 'react';
import type { ApiConfig } from '../../types/api';
import styles from './Config.module.css';
import { DefaultButton } from '../Buttons/DefaultButton';
import { CopyIcon } from '../Icons/NavIcons';
import toast from 'react-hot-toast';
interface ConfigProps {
  config: ApiConfig;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const Config = ({ config }: ConfigProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(config.cached_data.connection_url);
      toast.success('Скопировано в буфер обмена');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.config}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{config.type}</h3>
          <div className={`${styles.status} ${config.valid_to_dttm > new Date().toISOString() ? styles.active : styles.inactive}`}>
            {config.valid_to_dttm > new Date().toISOString() ? 'Активна' : 'Неактивна'}
          </div>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{config.price}</span>
          <span className={styles.currency}>{config.currency}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.item}>
          <span className={styles.label}>Действителен до:</span>
          <span className={styles.value}>{formatDate(config.valid_to_dttm)}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>IP лимит:</span>
          <span className={styles.value}>{config.cached_data.limit_ip > 0 ? config.cached_data.limit_ip : 'Не ограничен'}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Трафик:</span>
          <span className={styles.value}>{config.cached_data.total_gb > 0 ? config.cached_data.total_gb + ' GB' : 'Не ограничен'}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Подключение:</span>
          <div className={styles.connectionRow}>
            <span className={styles.connectionUrl}>{config.cached_data.connection_url}</span>
          </div>
          <div className={styles.copyButtonContainer}>
            <DefaultButton variant="primary" onClick={handleCopy}>
              {copied ? <CopyIcon /> : <CopyIcon />}
            </DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
};
