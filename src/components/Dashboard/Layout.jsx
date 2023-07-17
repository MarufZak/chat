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
      <div className="content">
        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template: auto 1fr / 360px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';

  .content {
    grid-area: main;
    padding: 32px;
    background-color: var(--color-gray-25);
    overflow-y: auto;
  }
`;

export default Layout;
