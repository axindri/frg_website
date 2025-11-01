import { useState, useEffect, useRef } from 'react';
import { ApiService } from '../services/apiService';
import type { ApiProfileResponse } from '../types/api';
import { InfoBlock } from '../components/Info/InfoBlock';
import { InfoItem } from '../components/Info/InfoItem';
import styles from './ConfigsPage.module.css';
import toast from 'react-hot-toast';

export const ConfigsPage = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ApiProfileResponse | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const id = toast.loading('Загрузка конфигураций...');
        const data = await ApiService.get_profile();
        setProfile(data);

        if (!data) {
          toast.success('Конфигурации не найдены');
        }
        toast.dismiss(id);
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error(`Загрузка конфигураций не удалась: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Конфигурации</h1>
      {/* <button
        onClick={async () => {
          const data = await ApiService.get_profile();
          setProfile(data);
        }}
      >
        Get Profile
      </button> */}
      <div>
        {loading ? (
          <div>Загрузка конфигураций...</div>
        ) : !profile ? (
          <div></div>
        ) : (
          <div className={styles.configs}>
            {profile.configs.map(config => (
              <InfoBlock title={`${config.type}`.toUpperCase()}>
                <InfoItem label="ID" value={config.id} />
                <InfoItem label="Цена" value={config.price} />
                <InfoItem label="Валюта" value={config.currency} />
                <InfoItem label="ID пользователя" value={config.user_id} />
                <InfoItem label="ID сервисного пользователя" value={config.service_user_id} />
                <InfoItem label="Email" value={config.cached_data.email} />
                <InfoItem label="Ограничение IP" value={config.cached_data.limit_ip} />
                <InfoItem label="Объем" value={config.cached_data.total_gb} />
                <InfoItem label="URL соединения" value={config.cached_data.connection_url} />
                <InfoItem label="URL подписки" value={config.cached_data.subscription_url} />
                <InfoItem label="Действительно с" value={config.valid_from_dttm} />
                <InfoItem label="Действительно до" value={config.valid_to_dttm} />
                <InfoItem label="Обновлено" value={config._updated_dttm} />
              </InfoBlock>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
