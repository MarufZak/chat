import React from 'react';
import { styled } from 'styled-components';
import logoMark from '@assets/logomark.png';
import useDebounce from '@hooks/useDebounce';
import SearchInput from './SearchInput';
import SidebarChatItem from './SidebarChatItem';
import { DashboardContext } from './Dashboard';
import { fadeOut } from './Dashboard.animations';

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

  return (
    <Wrapper>
      <div className="logo">
        <img className="logo-mark" src={logoMark} alt="logo mark" />
        Best Chat
      </div>
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  animation: ${fadeOut} 0.3s;
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

export default Sidebar;
