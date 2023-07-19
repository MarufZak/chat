import { Image, Root, Fallback } from '@radix-ui/react-avatar';
import React from 'react';
import styled from 'styled-components';
import { SIZES } from './Avatar.sizes';

function Avatar({ src, size, name, ...props }) {
  const sizeValue = SIZES[size];
  if (!sizeValue) {
    throw new Error(`Invalid size for Avatar: ${size}`);
  }

  return (
    <Root {...props} style={{ '--size': sizeValue }}>
      <StyledAvatarImage src={src} alt={`${name} avatar`} />
      <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
    </Root>
  );
}

const StyledAvatarImage = styled(Image)`
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

const AvatarFallback = styled(Fallback)`
  width: var(--size);
  height: var(--size);
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
