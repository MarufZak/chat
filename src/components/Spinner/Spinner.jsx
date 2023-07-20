import React from 'react';
import { styled } from 'styled-components';
import Icon from '../Icon';
import { SIZES } from './Spinner.sizes';
import { spin } from './Spinner.animations';

function Spinner({ size, color }) {
  const spinnerSize = SIZES[size];

  if (!size) {
    throw new Error(`Unrecognized size for Spinner: ${size}`);
  }

  return (
    <StyledSpinner width={spinnerSize} height={spinnerSize} color={color}>
      loading
    </StyledSpinner>
  );
}

const StyledSpinner = styled(Icon)`
  animation: ${spin} 1s infinite;
`;

export default Spinner;
