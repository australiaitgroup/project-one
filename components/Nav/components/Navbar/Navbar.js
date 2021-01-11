import Item from './components/Item/Item';

const Navbar = () => (
  <div className="navbar">
    {/* { href: 'HOME', children: 'Home' } */}
    <Item href="HOME">Home</Item>
    {/* React.createElement */}
    <Item href="RESUME" children="Resume" />
    <Item active href="SERVICES" children="Services" />
  </div>
);

export default Navbar;
