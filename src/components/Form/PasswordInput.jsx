import React from 'react';
import styled from 'styled-components';
import useToggle from '@hooks/useToggle';
import { StyledInput } from './Input';
import Icon from '../Icon/Icon';

const Password = ({ isDisabled, ...props }) => {
  const [isHidden, toggleHidden] = useToggle(true);
  return (
    <Wrapper>
      <StyledInput
        disabled={isDisabled}
        type={isHidden ? 'password' : 'text'}
        {...props}
      />
      <StyledIcon width="14px" height="14px" onClick={toggleHidden}>
        {isHidden ? 'eye' : 'eye-off'}
      </StyledIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: var(--color-gray-500);
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 15px;
  bottom: 50%;
  translate: 0 50%;
  cursor: pointer;
`;

export default Password;
