import { Navigation } from './Navigation';
import { navItems } from '../../constants/navItems';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          {/* <img src={logo} alt="Fast Ray Gram" /> */}
          <h1>Fast Ray Gram</h1>
        </div>
        <Navigation navItems={navItems} />
      </div>
    </header>
  );
};