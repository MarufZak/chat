import React from 'react';
import styled from 'styled-components';
import { SIZES } from './Button.sizes';

const GrayButton = ({ children, variant, size, ...props }) => {
  let Component;
  if (variant === 'contained') {
    Component = GrayButtonContained;
  } else if (variant === 'text') {
    Component = GrayButtonText;
  } else {
    throw new Error(`Incorrect variant for Button ${variant}`);
  }

  const { fontSize, padding } = SIZES[size];

  return (
    <Component style={{ '--font-size': fontSize, '--padding': padding }} {...props}>
      {children}
    </Component>
  );
};

const GrayButtonBase = styled.button`
  display: inline-block;
  font-size: var(--font-size);
  padding: var(--padding);
  border-radius: 8px;
  transition: background 0.4s, color 0.4s;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const GrayButtonContained = styled(GrayButtonBase)`
  color: var(--color-white);
  background-color: var(--color-gray-600);
  outline: 3px solid transparent;

  &:focus {
    outline-color: var(--color-gray-900);
    color: var(--color-gray-100);
    background-color: var(--color-gray-700);
  }

  &:hover {
    background-color: var(--color-gray-700);
  }

  &:disabled {
    background-color: var(--color-gray-100);
    color: var(--color-gray-300);
  }
`;

const GrayButtonText = styled(GrayButtonBase)`
  background-color: transparent;
  color: var(--color-gray-600);
  outline: 3px solid transparent;

  &:hover {
    background-color: var(--color-gray-100);
  }

  &:focus {
    outline-color: var(--color-gray-600);
  }
`;

export default GrayButton;
