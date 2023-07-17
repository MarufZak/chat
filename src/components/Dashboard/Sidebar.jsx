import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';

const Sidebar = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.nav`
  grid-area: sidebar;
  background-color: var(--color-gray-900);
`;

export default Sidebar;
