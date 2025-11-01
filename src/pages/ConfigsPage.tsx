import { useState, useEffect, useRef } from 'react';
import { ApiService } from '../services/apiService';
import type { ApiProfileResponse } from '../types/api';
import { InfoBlock } from '../components/Info/InfoBlock';
import { InfoItem } from '../components/Info/InfoItem';
import styles from './ConfigsPage.module.css';

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
        const data = await ApiService.get_profile();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
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
          <div>Loading...</div>
        ) : !profile ? (
          <div>No profile data</div>
        ) : (
          <div>
            {profile.configs.map(config => (
              <div key={config.id}>
                <InfoBlock title="Configs">
                  <InfoItem label="ID" value={config.id} />
                  <InfoItem label="Type" value={config.type} />
                  <InfoItem label="Price" value={config.price} />
                  <InfoItem label="Currency" value={config.currency} />
                  <InfoItem label="User ID" value={config.user_id} />
                  <InfoItem label="Service User ID" value={config.service_user_id} />
                  <InfoItem label="Cached Data" value={config.cached_data} />
                  <InfoItem label="Valid From" value={config.valid_from_dttm} />
                  <InfoItem label="Valid To" value={config.valid_to_dttm} />
                  <InfoItem label="Updated" value={config._updated_dttm} />
                </InfoBlock>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
