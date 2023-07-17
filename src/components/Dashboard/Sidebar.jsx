import React from 'react';
import { styled } from 'styled-components';
import logoMark from '@assets/logomark.png';
import SearchInput from './SearchInput';
import { chats } from './Dashboard.constants';
import Chat from './Chat';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredChats = chats.filter((item) => {
    return item.name.includes(searchQuery);
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
      {filteredChats.map((item) => {
        return (
          <Chat
            to={item.id.toString()}
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            email={item.email}
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
