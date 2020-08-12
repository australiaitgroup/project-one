import React from 'react';

import './NavItem.scss';

const NavItem = (props) => {
  let className = 'navbar__item';

  if (props.active) {
    className += ' navbar__item--active';
  }

  return (
    <a 
      className={className} 
      href={props.href}
    >
      {props.children}
    </a>
  );
}

export default NavItem;
