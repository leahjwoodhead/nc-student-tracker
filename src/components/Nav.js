import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const NavButton = styled.button`
  margin: 1rem;
  margin-bottom: 3rem;
  padding: 0.5rem;
  width: 200px;
  font-size: 18px;
`;

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <NavButton>Home</NavButton>
      </Link>
      <Link to='/students'>
        <NavButton>Students</NavButton>
      </Link>
      <Link to='/graduates'>
        <NavButton>Graduates</NavButton>
      </Link>
      <Link to='/blocks'>
        <NavButton>Block Breakdown</NavButton>
      </Link>
    </nav>
  );
};

export default Nav;
