import React from 'react';
import styled from 'styled-components';
import useToggle from '@hooks/useToggle';
import { StyledInput as StyledInputBase } from './Input';
import { Eye, EyeOff } from 'react-feather';

const Password = ({ isDisabled, ...props }) => {
  const [isHidden, toggleHidden] = useToggle(true);
  return (
    <Wrapper>
      <StyledInput
        disabled={isDisabled}
        type={isHidden ? 'password' : 'text'}
        {...props}
      />
      <EyeIcon as={isHidden ? Eye : EyeOff} onClick={toggleHidden} size={14} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: var(--color-gray-500);
`;

const StyledInput = styled(StyledInputBase)`
  -webkit-text-fill-color: var(--color-gray-500);
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 15px;
  bottom: 50%;
  translate: 0 50%;
  cursor: pointer;
`;

export default Password;
