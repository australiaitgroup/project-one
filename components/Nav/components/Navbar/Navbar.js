import Item from './components/Item/Item';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    {/* { href: 'HOME', children: 'Home' } */}
    <Item active href="HOME">Home</Item>
    {/* React.createElement */}
    <Item href="RESUME" children="Resume" />
    <Item href="SERVICES" children="Services" />
  </div>
);

export default Navbar;
