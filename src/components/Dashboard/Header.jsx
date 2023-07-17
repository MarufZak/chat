import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { Download, Upload } from 'react-feather';

const Header = () => {
  return (
    <Wrapper>
      <Button iconRight={Download} colorScheme="purple" size="xs" variant="text">
        Import
      </Button>
      <Button iconRight={Upload} colorScheme="purple" size="xs" variant="contained">
        Export
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 18px 48px;
  border-bottom: 1px solid var(--color-gray-200);
`;

export default Header;
