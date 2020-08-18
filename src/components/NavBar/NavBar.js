import React from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

import './NavBar.scss';

const NavBar = ({
  navItems,
  currentPage,
  onNavItemClick,
}) => (
  <header className="nav">
    <div className="nav__left">
      <Logo />
    </div>
    <div className="nav__right">
      <Navigation 
        navItems={navItems}
        currentPage={currentPage}
        onNavItemClick={onNavItemClick}
      />
    </div>
  </header>
);

export default NavBar;