import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ChatPanel from './ChatPanel';
import { formatChats } from './Dashboard.helpers';

export const DashboardContext = React.createContext();

function Dashboard() {
  const [chats, setChats] = React.useState({});
  const [user, setUser] = React.useState({ id: 100 });

  React.useEffect(() => {
    const newChats = JSON.parse(localStorage.getItem('chats'));
    setChats(newChats);
  }, []);

  const handleImport = (importedChats) => {
    let newChats = {
      ...chats,
      archived: chats.archived.filter((item) => !item.imported),
    };

    for (let i = 0; i < importedChats.archived.length; i++) {
      const chat = importedChats.archived[i];
      newChats.archived.push({
        ...chat,
        imported: true,
      });
    }

    setChats(newChats);
  };

  const handleExport = () => {
    const data = JSON.stringify(formatChats(chats));
    const anchorElement = document.createElement('a');

    anchorElement.href = `data:application/json;charset=utf-8,${encodeURI(data)}`;
    anchorElement.download = `user-${user.id}-chats.json`;
    anchorElement.click();
    anchorElement.remove();
  };

  const handleClear = () => {
    const newChats = {
      ...chats,
      archived: chats.archived.filter((item) => {
        return !item.imported;
      }),
    };
    setChats(newChats);
  };

  return (
    <DashboardContext.Provider
      value={{ user, chats, handleImport, handleClear, handleExport }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":id" element={<ChatPanel />} />
        </Route>
      </Routes>
    </DashboardContext.Provider>
  );
}

export default Dashboard;
