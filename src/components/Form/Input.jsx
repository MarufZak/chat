import { Control, Field, Label } from '@radix-ui/react-form';
import React from 'react';
import styled from 'styled-components';
import PasswordInput from './PasswordInput';

const Input = ({ type = 'text', name, className, label, ...props }) => {
  return (
    <Wrapper name={name} className={className}>
      <StyledLabel>{label}</StyledLabel>
      {type === 'password' ? (
        <PasswordInput {...props} />
      ) : (
        <StyledInput type={type} {...props} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Field)`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

// export used in password input
export const StyledInput = styled(Control)`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--color-gray-900);
  outline: 1px solid var(--color-gray-300);
  box-shadow: var(--shadow-gray-xs);

  ::placeholder {
    color: var(--color-gray-500);
  }

  &:focus {
    outline-color: var(--color-purple-300);
    box-shadow: var(--shadow-purple-xs);
  }

  &[data-invalid='true'] {
    outline-color: var(--color-red-500);

    :focus {
      box-shadow: var(--shadow-red-xs);
    }
  }
`;

const StyledLabel = styled(Label)`
  display: block;
  text-align: left;
  font-size: 1.4rem;
  color: var(--color-gray-700);
  margin-bottom: 6px;
`;

export default Input;
