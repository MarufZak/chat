import React from 'react';
import { useParams } from 'react-router-dom';
import MessageCard from './MessageCard';

const myId = 10;

const ChatPanel = () => {
  const { id } = useParams();
  const chats = JSON.parse(localStorage.getItem('chats'));
  const chat = chats.find((item) => item.id.toString() === id);
  return (
    <div>
      {chat.messages.map((item, index) => {
        console.log(item);
        return (
          <MessageCard
            time={item.time}
            sender={item.user_id === myId ? 'me' : chat.user.name}
            message={item.message}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ChatPanel;
