import React from 'react';
import { styled } from 'styled-components';
import logoMark from '@assets/logomark.png';
import useDebounce from '@hooks/useDebounce';
import SearchInput from './SearchInput';
import Chat from './Chat';
import { DashboardContext } from './Dashboard';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { chats } = React.useContext(DashboardContext);

  const filteredChats = chats.archived.filter((item) => {
    return item.user.name.includes(debouncedSearchQuery);
  });

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
          <Chat
            to={item.user.id.toString()}
            key={index}
            avatar={item.user.avatar_url}
            name={item.user.name}
            email={item.user.email}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
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
