import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MessageCard from './MessageCard';
import { formatDate, sortMessagesByTime } from './Dashboard.helpers';
import { DashboardContext } from './Dashboard';
import { AppContext } from '../App';
import useKeyDown from '../../hooks/useKeyDown';
import withErrorBoundary from '../../hoc/withErrorBoundary';

const ChatPanel = () => {
  const { id } = useParams();
  const { user } = React.useContext(AppContext);
  const { chats } = React.useContext(DashboardContext);
  const containerRef = React.useRef();
  const navigate = useNavigate();

  const isEscapePressed = useKeyDown('Escape');

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

    if (result) {
      return {
        ...result,
        messages: sortMessagesByTime(result?.messages),
      };
    }
  }, [chats, id]);

  React.useEffect(() => {
    containerRef.current.scrollIntoView({ block: 'end' });
  }, [id]);

  React.useEffect(() => {
    if (isEscapePressed) {
      navigate('/dashboard');
    }
  }, [navigate, isEscapePressed]);

  return (
    <div ref={containerRef}>
      {chat?.messages.map((item, index) => {
        let sender;
        let avatar;
        if (item.user_id === user.id) {
          sender = 'me';
        } else if (item.user_id === chat.user.id) {
          sender = chat.user.name;
          avatar = chat.user.avatar_url;
        } else {
          sender = 'Admin';
        }
        return (
          <MessageCard
            avatar={avatar}
            time={formatDate(item.timestamp)}
            sender={sender}
            message={item.content}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default withErrorBoundary(ChatPanel, {
  gridArea: 'main',
});
