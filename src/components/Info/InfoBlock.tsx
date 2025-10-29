import type { ReactNode } from 'react';
import styles from './InfoBlock.module.css';

interface InfoBlockProps {
  title: string;
  children: ReactNode;
}

export const InfoBlock = ({ title, children }: InfoBlockProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
