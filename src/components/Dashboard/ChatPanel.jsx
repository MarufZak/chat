import React from 'react';
import { useParams } from 'react-router-dom';
import MessageCard from './MessageCard';
import { formatDate } from './Dashboard.helpers';
import { DashboardContext } from './Dashboard';

const ChatPanel = () => {
  const { id } = useParams();
  const { user, chats } = React.useContext(DashboardContext);
  const containerRef = React.useRef();

  React.useEffect(() => {
    containerRef.current.scrollIntoView({ block: 'end' });
  }, [id]);

  const chat = chats.archived?.find((item) => item.user.id.toString() === id);
  return (
    <div ref={containerRef}>
      {chat?.messages.map((item, index) => {
        return (
          <MessageCard
            time={formatDate(item.timestamp)}
            sender={item.user_id === user.id ? 'me' : chat.user.name}
            message={item.content}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ChatPanel;
