import React from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template: 64px 1fr / 312px 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
`;

export default Layout;
