import { useState, useEffect, useRef } from 'react';
import { ApiService } from '../services/apiService';
import type { ApiProfileResponse } from '../types/api';
import { InfoBlock } from '../components/Info/InfoBlock';
import { InfoItem } from '../components/Info/InfoItem';
import styles from './OrdersPage.module.css';
import toast from 'react-hot-toast';

export const OrdersPage = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ApiProfileResponse | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const id = toast.loading('Загрузка заказов...');
        const data = await ApiService.get_profile();
        setProfile(data);

        if (!data) {
          toast.success('Заказы не найдены');
        }
        toast.dismiss(id);
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error(`Загрузка заказов не удалась: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Заказы</h1>
      <div>
        {loading ? (
          <div>Загрузка заказов...</div>
        ) : !profile ? (
          <div>Нет заказов</div>
        ) : (
          <div className={styles.orders}>
            {profile.orders.map(order => (
              <InfoBlock title={`${order.id}`}>
                <InfoItem label="Статус" value={order.status} />
                <InfoItem label="ID пользователя" value={order.user_id} />
                <InfoItem label="ID конфигурации" value={order.config_id} />
                <InfoItem label="Цена" value={order.price} />
                <InfoItem label="Валюта" value={order.currency} />
                <InfoItem label="Данные" value={order.data} />
                <InfoItem label="Обновлено" value={order._updated_dttm} />
              </InfoBlock>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
