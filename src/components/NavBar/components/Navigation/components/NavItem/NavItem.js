import React from 'react';

import './NavItem.scss';

const NavItem = ({ 
  children, 
  active, 
  onClick,
}) => {
  let className = 'navbar__item';

  if (active) {
    className += ' navbar__item--active';
  }

  return (
    <button
      className={className} 
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default NavItem;
