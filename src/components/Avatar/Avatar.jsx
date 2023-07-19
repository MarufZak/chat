import { Image, Root, Fallback } from '@radix-ui/react-avatar';
import React from 'react';
import styled from 'styled-components';

function Avatar({ src, width = 32, height = 32, name, ...props }) {
  return (
    <Root {...props} style={{ '--width': width + 'px', '--height': height + 'px' }}>
      <StyledAvatarImage src={src} alt={`${name} avatar`} />
      <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
    </Root>
  );
}

const StyledAvatarImage = styled(Image)`
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

const AvatarFallback = styled(Fallback)`
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--color-purple-800);
  background-color: var(--color-purple-200);
`;

export default Avatar;
