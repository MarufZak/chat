import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { Download, Upload } from 'react-feather';

const Header = () => {
  return (
    <Wrapper>
      <Button
        iconRight={<Download size={14} />}
        colorScheme="gray"
        size="sm"
        variant="contained"
      >
        Import
      </Button>
      <Button
        iconRight={<Upload size={14} />}
        colorScheme="gray"
        size="sm"
        variant="contained"
      >
        Export
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  grid-area: header;
  background-color: var(--color-gray-900);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 48px;
`;

export default Header;
