import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';

const GrayButton = ({ children, variant, ...props }) => {
  let Component;
  if (variant === 'contained') {
    Component = GrayButtonContained;
  } else if (variant === 'text') {
    Component = GrayButtonText;
  } else {
    throw new Error(`Incorrect variant for Button ${variant}`);
  }

  return <Component {...props}>{children}</Component>;
};

// q: cannot access ButtonBase before initialization, how to fix ?

const GrayButtonContained = styled(ButtonBase)`
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

const GrayButtonText = styled(ButtonBase)`
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