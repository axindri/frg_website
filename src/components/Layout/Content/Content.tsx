import styles from './Content.module.css';

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
};