import { Submit as RadixSubmit } from '@radix-ui/react-form';
import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { FormContext } from './Form';
import { Loader } from 'react-feather';
import { spin } from './Form.animations';

const Submit = ({ children, ...props }) => {
  const { isLoading } = React.useContext(FormContext);
  return (
    <RadixSubmit asChild {...props}>
      <StyledButton
        disabled={isLoading}
        colorScheme="purple"
        variant="contained"
        size="sm"
      >
        {isLoading ? (
          <StyledLoader
            className="spinner"
            size={16}
            color="var(--color-purple-600)"
          />
        ) : (
          children
        )}
      </StyledButton>
    </RadixSubmit>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const StyledLoader = styled(Loader)`
  animation: ${spin} 1s linear infinite;
`;

export default Submit;
