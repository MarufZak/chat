import React from 'react';
import { styled } from 'styled-components';
import Avatar from '../Avatar/Avatar';

const MessageCard = ({ sender, time, message, avatar }) => {
  let Message;
  if (sender === 'me') {
    Message = MyMessage;
  } else {
    Message = OtherMessage;
  }

  return (
    <Wrapper style={{ '--margin-left': sender === 'me' && 'auto' }}>
      {sender !== 'me' && (
        <Avatar
          className="sender-avatar"
          width={40}
          height={40}
          name={sender}
          src={avatar}
        />
      )}
      <div className="message-body">
        <MessageHeader>
          <span className="message-sender">{sender === 'me' ? 'You' : sender}</span>
          <time className="message-time">{time}</time>
        </MessageHeader>
        <Message>{message}</Message>
      </div>
    </Wrapper>
  );
};

const MessageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  .message-sender {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-gray-700);
  }

  .message-time {
    font-size: 1.2rem;
    color: var(--color-gray-600);
  }
`;

const MyMessage = styled.div`
  padding: 10px 14px;
  border-radius: 8px 0px 8px 8px;
  background-color: var(--color-purple-600);
  color: var(--color-white);
`;

const OtherMessage = styled.div`
  padding: 10px 14px;
  border-radius: 0px 8px 8px 8px;
  background-color: var(--color-white);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-200);
`;

const Wrapper = styled.article`
  margin-left: var(--margin-left);
  display: flex;
  gap: 12px;
  max-width: 320px;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  .sender-avatar {
    flex-shrink: 0;
  }

  .message-body {
    width: 100%;
  }

  &:has(.sender-avatar) {
    max-width: 372px; // max-width + avatar width + gap
  }
`;

export default MessageCard;
