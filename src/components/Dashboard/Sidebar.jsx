import React from 'react';
import { styled } from 'styled-components';
import logoMark from '@assets/logomark.png';
import useDebounce from '@hooks/useDebounce';
import SearchInput from './SearchInput';
import SidebarChatItem from './SidebarChatItem';
import { DashboardContext } from './Dashboard';
import { fadeOut } from './Dashboard.animations';
import notFoundImg from '@assets/not-found.png';

const Sidebar = () => {
  const { chats } = React.useContext(DashboardContext);
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);

  const filteredChats = React.useMemo(() => {
    let result = [];

    for (const key in chats) {
      for (let i = 0; i < chats[key].length; i++) {
        const chat = chats[key][i];
        if (chat.user.name.includes(debouncedSearchQuery)) {
          result.push(chat);
        }
      }
    }

    return result;
  }, [chats, debouncedSearchQuery]);

  const isChatsEmpty = chats.archived.length === 0 && chats.active.length === 0;
  const isFilteredChatsEmpty = filteredChats.length === 0;
  return (
    <Wrapper>
      <div className="logo">
        <img className="logo-mark" src={logoMark} alt="logo mark" />
        Best Chat
      </div>
      <ChatsSection>
        {isChatsEmpty === false && (
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        {(isChatsEmpty || isFilteredChatsEmpty) && (
          <NotFoundImg src={notFoundImg} alt="clouds with search icon" />
        )}
        {filteredChats.map((item, index) => {
          return (
            <SidebarChatItem
              id={item.user.id}
              key={index}
              avatar={item.user.avatar_url}
              name={item.user.name}
            />
          );
        })}
      </ChatsSection>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  animation: ${fadeOut} 0.3s;
  overflow-y: auto;

  grid-area: sidebar;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-gray-200);
  padding: 18px 24px;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 2.4rem;
    color: var(--color-gray-900);
  }

  .logo-mark {
    width: 42px;
    height: 42px;
  }
`;

const ChatsSection = styled.div`
  flex-grow: 1;
  position: relative;
`;

const NotFoundImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export default Sidebar;
