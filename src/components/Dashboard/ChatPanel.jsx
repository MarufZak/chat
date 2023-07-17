import React from 'react';
import { useParams } from 'react-router-dom';

const ChatPanel = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ChatPanel;
