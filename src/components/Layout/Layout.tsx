import type { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
  navItems: {
    path: string;
    label: string;
  }[];
}

export const Layout = ({ children, navItems }: LayoutProps) => {
  return (
    <div className="layout">
      <header className="navigation">
        <Navigation navItems={navItems} />
      </header>
      <main className="content">
        {children}
      </main>
    </div>
  );
};