import { useAuthContext } from '../contexts/AuthContext';
import { InfoBlock } from '../components/Info/InfoBlock';
import { InfoItem } from '../components/Info/InfoItem';
import styles from './AccountPage.module.css';

export const AccountPage = () => {
  const { authState } = useAuthContext();
  const profile = authState.profile;

  if (!profile) {
    return <div className={styles.container}>Загрузка профиля...</div>;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ru-RU');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Профиль пользователя</h1>
      
      <InfoBlock title="Основная информация">
        <InfoItem label="ID" value={profile.user.id} />
        <InfoItem label="Логин" value={profile.user.login} />
        <InfoItem label="Роль" value={profile.role.name} />
      </InfoBlock>

      <InfoBlock title="Профиль">
        <InfoItem label="Имя" value={profile.profile.first_name} />
        <InfoItem label="Фамилия" value={profile.profile.last_name} />
        <InfoItem label="Email" value={profile.profile.email} />
        <InfoItem label="Язык" value={profile.profile.lang_code} />
      </InfoBlock>

      <InfoBlock title="Активные сессии">
        {profile.sessions.map((session) => (
          <div key={session.id} className={styles.session}>
            <InfoItem 
              label={session.session_name} 
              value={session.is_active ? 'Активна' : 'Неактивна'}
            />
            <InfoItem label="IP" value={session.ip_address} />
            <InfoItem label="Устройство" value={session.device_info} />
            <InfoItem label="Последняя активность" value={formatDate(session.last_activity)} />
            <InfoItem label="Истекает" value={formatDate(session.expires_at)} />
          </div>
        ))}
      </InfoBlock>
    </div>
  );
};
