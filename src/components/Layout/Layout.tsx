import type { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
        <Header />
        <main className={styles.content}>
          <Content>
            {children}
          </Content>
        </main>
    </div>
  );
};