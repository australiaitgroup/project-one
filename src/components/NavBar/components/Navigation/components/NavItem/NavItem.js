import React from 'react';

import './NavItem.scss';

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      foo: 'bar',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event) {
    event.preventDefault();

    this.setState({
      active: true,
    });
  }

  render() {
    const { href, children } = this.props;
    const { active } = this.state;

    let className = 'navbar__item';

    if (active) {
      className += ' navbar__item--active';
    }

    return (
      <a 
        className={className} 
        href={href}
        onClick={this.handleItemClick}
      >
        {children}
        &nbsp;
        active: {active.toString()}
      </a>
    );
  }
}

export default NavItem;
