import React from 'react';
import logoMark from '@assets/logomark.png';
import { styled } from 'styled-components';

function Logo() {
  return (
    <Wrapper>
      <img className="logo-mark" src={logoMark} alt="logo mark" />
      Best Chat
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 2.4rem;
  color: var(--color-gray-900);

  .logo-mark {
    width: 42px;
    height: 42px;
  }
`;

export default Logo;
