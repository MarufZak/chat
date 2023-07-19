import React from 'react';
import { useParams } from 'react-router-dom';
import MessageCard from './MessageCard';
import { formatDate } from './Dashboard.helpers';
import { DashboardContext } from './Dashboard';
import { AppContext } from '../App';

const ChatPanel = () => {
  const { id } = useParams();
  const { user } = React.useContext(AppContext);
  const { chats } = React.useContext(DashboardContext);
  const containerRef = React.useRef();

  React.useEffect(() => {
    containerRef.current.scrollIntoView({ block: 'end' });
  }, [id]);

  const chat = React.useMemo(() => {
    let result;

    for (const key in chats) {
      for (let i = 0; i < chats[key].length; i++) {
        const chat = chats[key][i];
        if (chat.user.id.toString() === id) {
          result = chat;
          break;
        }
      }
    }

    return result;
  }, [id, chats]);

  return (
    <div ref={containerRef}>
      {chat?.messages.map((item, index) => {
        return (
          <MessageCard
            avatar={chat.user.avatar_url}
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
