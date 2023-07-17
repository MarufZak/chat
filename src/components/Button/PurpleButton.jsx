import React from 'react';
import styled from 'styled-components';
import { SIZES } from './Button.sizes';
import { ButtonBase } from './ButtonBase';

const PurpleButton = ({ children, variant, size, ...props }) => {
  let Component;
  if (variant === 'contained') {
    Component = PurpleButtonContained;
  } else if (variant === 'text') {
    Component = PurpleButtonText;
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

const PurpleButtonContained = styled(ButtonBase)`
  color: var(--color-white);
  background-color: var(--color-purple-600);
  outline: 3px solid transparent;

  &:focus {
    outline-color: var(--color-purple-900);
    color: var(--color-purple-100);
    background-color: var(--color-purple-700);
  }

  &:hover {
    background-color: var(--color-purple-700);
  }

  &:disabled {
    background-color: var(--color-purple-100);
    color: var(--color-gray-300);
  }
`;

const PurpleButtonText = styled(ButtonBase)`
  background-color: transparent;
  color: var(--color-purple-600);
  outline: 3px solid transparent;

  &:hover {
    background-color: var(--color-purple-100);
  }

  &:focus {
    outline-color: var(--color-purple-600);
  }
`;

export default PurpleButton;
