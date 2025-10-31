import styles from './InfoItem.module.css';

interface InfoItemProps {
  label: string;
  value: string | number;
}

export const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}:</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
