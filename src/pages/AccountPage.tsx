import { useAuthContext } from '../contexts/AuthContext';
import { InfoBlock } from '../components/Info/InfoBlock';
import { InfoItem } from '../components/Info/InfoItem';
import styles from './AccountPage.module.css';
import toast from 'react-hot-toast';

export const AccountPage = () => {
  const { authState } = useAuthContext();
  const profile = authState.profile;

  const handleIdClick = () => {
    navigator.clipboard.writeText(profile?.user.id || '');
    toast.success('Скопировано в буфер обмена');
  };

  if (!profile) {
    return <div className={styles.container}>Загрузка профиля...</div>;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ru-RU');
  };

  return (
    <div className={styles.container}>
      <InfoBlock title="Основная информация">
        <div className={styles.idContainer} onClick={handleIdClick}>
          <InfoItem label="ID" value={profile.user.id} />
        </div>
        <InfoItem label="Логин" value={profile.user.login} />
        <InfoItem label="Роль" value={profile.role.name} />
      </InfoBlock>

      <InfoBlock title="Профиль">
        <InfoItem label="Имя" value={profile.profile.first_name + ' ' + profile.profile.last_name} />
        <InfoItem label="Email" value={profile.profile.email} />
        <InfoItem label="Язык" value={profile.profile.lang_code.toUpperCase()} />
      </InfoBlock>

      <InfoBlock title="Активные сессии">
        {profile.sessions.map(session => (
          <div key={session.id} className={styles.session}>
            <InfoItem label="Название" value={session.session_name} />
            <InfoItem label="Устройство" value={session.device_info} />
            <InfoItem label="IP" value={session.ip_address} />
            <InfoItem label="Последняя активность" value={formatDate(session.last_activity)} />
            <InfoItem label="Истекает" value={formatDate(session.expires_at)} />
          </div>
        ))}
      </InfoBlock>
    </div>
  );
};
