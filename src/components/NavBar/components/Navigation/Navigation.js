import React from 'react';
import NavItem from './components/NavItem';

import './Navigation.scss';

const NAV_ITEMS = [{
  pageName: 'HOME',
  children: 'Home',
}, {
  pageName: 'RESUME',
  children: 'Resume',
}, {
  pageName: 'SERVICE',
  children: 'Service',
}, {
  pageName: 'BLOG',
  children: 'Blog',
}, {
  pageName: 'CONTACT',
  children: 'Contact',
}];

const Navigation = ({
  activePage, 
  onNavItemClick,
}) => (
  <nav className="navbar">
    {NAV_ITEMS.map(({ pageName, children }) => (
      <NavItem
        key={pageName}
        active={activePage === pageName}
        onClick={onNavItemClick(pageName)}
      >
        {children}
      </NavItem>
    ))}
  </nav>
)
export default Navigation;
