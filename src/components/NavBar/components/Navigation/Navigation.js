import React from 'react';
import NavItem from './components/NavItem';

import './Navigation.scss';

const Navigation =  () => (
  <nav className="navbar">
    <NavItem active href="HOME">Home</NavItem>
    <NavItem href="RESUME">Resume</NavItem>
    <NavItem href="SERVICE">Service</NavItem>
    <NavItem href="BLOG">Blog</NavItem>
    <NavItem href="CONTACT">Contact</NavItem>
  </nav>
);

export default Navigation;
