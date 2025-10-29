import type { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { navItems } from '../../constants/navItems';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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