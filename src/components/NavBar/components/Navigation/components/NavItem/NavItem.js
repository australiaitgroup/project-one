import React from 'react';

import './NavItem.scss';

class NavItem extends React.Component {
  render() {
    const { href, children, active, onClick } = this.props;

    let className = 'navbar__item';
    
    if (active) {
      className += ' navbar__item--active';
    }
  
    return (
      <a 
        className={className} 
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
}

export default NavItem;
