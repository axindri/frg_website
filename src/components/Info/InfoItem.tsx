import styles from './InfoItem.module.css';

interface InfoItemProps {
  label: string;
  value: string | number | object;
}

export const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}:</span>
      <span className={styles.value}>{typeof value === 'object' ? JSON.stringify(value) : value}</span>
    </div>
  );
};
