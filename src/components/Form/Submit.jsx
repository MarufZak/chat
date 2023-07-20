import { Submit as RadixSubmit } from '@radix-ui/react-form';
import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { FormContext } from './Form';
import Spinner from '../Spinner';

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
          <Spinner size="sm" color="var(--color-purple-500)" />
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

export default Submit;
