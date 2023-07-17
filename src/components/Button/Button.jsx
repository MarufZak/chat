import React from 'react';
import PurpleButton from './PurpleButton';
import GrayButton from './GrayButton';
import { styled } from 'styled-components';

const Button = ({ iconRight, colorScheme, children, ...props }, ref) => {
  let Component;
  if (colorScheme === 'purple') {
    Component = PurpleButton;
  } else if (colorScheme === 'gray') {
    Component = GrayButton;
  } else {
    throw new Error(`Incorrect colorScheme for Button ${colorScheme}`);
  }

  return (
    <StyledButton as={Component} {...props} ref={ref}>
      {children}
      {iconRight}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// ref passed for radix ui asChild prop for.
export default React.forwardRef(Button);
