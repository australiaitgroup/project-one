import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';

const Highlight = styled.span`
  color: #377e9a;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Nav = styled(Flex)`
  padding: 15px 0;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
`;

const NavbarItem = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 16px;
  text-decoration: none;
  color: #49515d;
  font-size: 15px;
  opacity: ${({ active }) => active ? '1' : '0.6'};
  display: block;
  transition: opacity 0.3s ease-in-out;

  &::after {
    content: "";  
    width: ${({ active }) => active ? '24px' : '0'};
    border-bottom: 3px solid #377e9a;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    width: 24px;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

const Header = ({
  onPageChange,
  page,
}) => {
  const navbarItems = [
    { key: 'HOME', value: 'Home' }, 
    { key: 'RESUME', value: '简历' }, 
    { key: 'SERVICES', value: 'Services' }, 
    { key: 'BLOG', value: 'Blog' }, 
    { key: 'CONTACT', value: 'Contact' }
  ];

  return (
    <Nav>
      <Left>
        <Logo className="logo">
          <Highlight>Tifa</Highlight>
          Lockhart
        </Logo>
      </Left>
      <Right>
        <Flex>
          {/* 会不会引起混乱？会！ -> key [在 list 里面必须唯一] -> 解决了混乱问题 */}
          {/* 没有 key 制造 key */}
          {/* 如果是后端取数据去渲染，那就一定有 key，数据库里面是有 pk */}
          {/* 如果实在没办法，那就用 index 吧，非常非常大的性能隐患 */}
          {navbarItems.map((navbarItem) => (
            // props
            // styled components -> Component, Props
            <NavbarItem 
              // camelCase
              // pass javascript function
              // caller? 
              onClick={() => onPageChange(navbarItem.key)}
              key={navbarItem.key}
              active={page === navbarItem.key} 
              href={navbarItem.value}
            >
              {navbarItem.value}
            </NavbarItem>
          ))}
        </Flex>
      </Right>
    </Nav>
  );
}

export default Header;
