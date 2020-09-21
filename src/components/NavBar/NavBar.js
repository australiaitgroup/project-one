import React from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

import './NavBar.scss';

const NavBar = ({
  activePage,
  onNavItemClick,
}) => (
  <header className="nav">
    <div className="nav__left">
      <Logo />
    </div>
    <div className="nav__right">
      <Navigation 
        activePage={activePage}
        onNavItemClick={onNavItemClick}
      />
    </div>
  </header>
);

export default NavBar;