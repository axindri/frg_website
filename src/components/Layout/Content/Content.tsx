import styles from './Content.module.css';

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.content}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  );
};