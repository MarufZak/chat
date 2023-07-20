import React from 'react';
import { Root } from '@radix-ui/react-accessible-icon';
import styled from 'styled-components';

const Icon = ({ children, width, height, color, ...props }, ref) => {
  return (
    <Root label={`${children} icon`}>
      <StyledIcon
        {...props}
        style={{
          '--width': width,
          '--height': height,
          '--color': color,
        }}
        ref={ref}
      >
        <use href={`/sprite.svg#${children}`}></use>
      </StyledIcon>
    </Root>
  );
};

const StyledIcon = styled.svg`
  width: var(--width, 24px);
  height: var(--height, 24px);
  color: var(--color);
`;

export default React.forwardRef(Icon);
