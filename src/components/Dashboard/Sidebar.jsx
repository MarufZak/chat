import React from 'react';
import { styled } from 'styled-components';
import useDebounce from '@hooks/useDebounce';
import useWindowSize from '@hooks/useWindowSize';
import SearchInput from './SearchInput';
import SidebarChatItem from './SidebarChatItem';
import { DashboardContext } from './Dashboard';
import { fadeOut } from './Dashboard.animations';
import notFoundImg from '@assets/not-found.png';
import withErrorBoundary from '@hoc/withErrorBoundary';
import Logo from '../Logo/Logo';

const Sidebar = () => {
  const { chats } = React.useContext(DashboardContext);
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { width: windowWidth } = useWindowSize();

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
      {windowWidth > 768 && <Logo />}
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
`;

const ChatsSection = styled.div`
  flex-grow: 1;
  position: relative;
`;

const NotFoundImg = styled.img`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export default withErrorBoundary(Sidebar, {
  gridArea: 'sidebar',
});
