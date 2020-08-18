import React from 'react';
import NavItem from './components/NavItem';

import './Navigation.scss';

const Navigation = ({
  navItems,
  onNavItemClick,
  currentPage,
}) => (
  <nav className="navbar">
    {navItems.map((item) => (
      <NavItem 
        key={item.key}
        active={currentPage === item.key} 
        onClick={() => onNavItemClick(item.key)}
      >
        {item.value}
      </NavItem>
    ))}
  </nav>
);

export default Navigation;
