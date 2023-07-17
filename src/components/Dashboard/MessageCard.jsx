import React from 'react';
import { styled } from 'styled-components';

const MessageCard = ({ sender, time, message }) => {
  let MessageBody;
  if (sender === 'me') {
    MessageBody = MyMessageBody;
  } else {
    MessageBody = OtherMessageBody;
  }

  return (
    <Wrapper style={{ '--margin-left': sender === 'me' && 'auto' }}>
      <MessageHeader>
        <span className="sender">{sender === 'me' ? 'You' : sender}</span>
        <time className="time">{time}</time>
      </MessageHeader>
      <MessageBody>{message}</MessageBody>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  max-width: 320px;
  width: 100%;
  margin-left: var(--margin-left);

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const MessageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  .sender {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-gray-700);
  }

  .time {
    font-size: 1.2rem;
    color: var(--color-gray-600);
  }
`;

const MyMessageBody = styled.div`
  padding: 10px 14px;
  border-radius: 8px 0px 8px 8px;
  background-color: var(--color-purple-600);
  color: var(--color-white);
`;

const OtherMessageBody = styled.div`
  padding: 10px 14px;
  border-radius: 0px 8px 8px 8px;
  background-color: var(--color-white);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-200);
`;
export default MessageCard;
