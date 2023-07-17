import React from 'react';
import { styled } from 'styled-components';
import Avatar from '../Avatar';
import Heading from '../Heading';

const Chat = ({ avatar, name, email, isActive, ...props }) => {
  return (
    <Wrapper
      {...props}
      style={{
        '--bg-color': isActive ? 'var(--color-gray-100)' : 'var(--color-white)',
      }}
    >
      <Avatar width={40} height={40} src={avatar} name={name} />
      <div className="info">
        <Heading level={6}>{name}</Heading>
        <p className="info-email">{email}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  background-color: var(--bg-color);
  padding: 12px 16px;
  border-radius: 8px;

  .info-email {
    font-size: 1.4rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export default Chat;
