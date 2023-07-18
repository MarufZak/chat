import React from 'react';
import { styled } from 'styled-components';
import Avatar from '../Avatar';
import Heading from '../Heading';
import { NavLink } from 'react-router-dom';

const Chat = ({ avatar, name, to, ...props }) => {
  return (
    <Wrapper {...props} to={to}>
      <Avatar width={40} height={40} src={avatar} name={name} />
      <Heading level={6}>{name}</Heading>
    </Wrapper>
  );
};

const Wrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 8px;

  &.active {
    background-color: var(--color-gray-100);
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export default Chat;
