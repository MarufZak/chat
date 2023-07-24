import React from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import useWindowSize from '@hooks/useWindowSize';
import Icon from '../Icon/Icon';

const Layout = () => {
  const { id } = useParams();
  const { width: windowWidth } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Wrapper id={id}>
      <Sidebar />
      <Header />
      {windowWidth > 768 ? (
        <div className="content">
          <Outlet />
        </div>
      ) : id ? (
        <div className="content">
          <ContentHeader>
            <button
              className="back-btn"
              onClick={() => navigate('/dashboard')}
              type="button"
            >
              <Icon>arrow-left</Icon>
            </button>
          </ContentHeader>
          <Outlet />
        </div>
      ) : null}
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

  @media screen and (max-width: 768px) {
    grid-template: auto 1fr/ 1fr;
    grid-template-areas:
      'header'
      'sidebar';

    .content {
      --content-header-height: 56px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      padding-top: calc(var(--content-header-height) + 32px);
    }
  }
`;

const ContentHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--content-header-height);
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 0 36px;
  border: 1px solid var(--color-gray-200);

  .back-btn {
    cursor: pointer;
  }
`;

export default Layout;
