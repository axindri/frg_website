import { useEffect, useRef, useState } from 'react';
import { Config } from './Config';
import type { ApiProfileResponse } from '../../types/api';
import toast from 'react-hot-toast';
import { ApiService } from '../../services/apiService';
import styles from './Configs.module.css';
import { Loader } from '../Loader/Loader';

export const Configs = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ApiProfileResponse | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const id = toast.loading('Загрузка...');
        const data = await ApiService.get_profile();
        setProfile(data);

        if (!data) {
          toast.success('Конфигурации не найдены');
        }
        toast.dismiss(id);
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error(`Загрузка не удалась: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : !profile ? (
        <div>Профиль пользователя не найден</div>
      ) : (
        <div className={styles.container}>
          {profile.configs.map(config => (
            <Config key={config.id} config={config} />
          ))}
        </div>
      )}
    </>
  );
};
