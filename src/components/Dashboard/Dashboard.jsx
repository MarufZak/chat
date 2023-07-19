import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ChatPanel from './ChatPanel';
import { removeChatsImportFlag } from './Dashboard.helpers';
import { AppContext } from '../App';

export const DashboardContext = React.createContext();

function Dashboard() {
  const { user } = React.useContext(AppContext);
  const [chats, setChats] = React.useState({
    active: [],
    archived: [],
  });

  React.useEffect(() => {
    const newChats = JSON.parse(localStorage.getItem('chats'));
    if (newChats) {
      setChats(newChats);
    }
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
    const data = JSON.stringify(removeChatsImportFlag(chats));
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

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <DashboardContext.Provider
      value={{ chats, handleImport, handleClear, handleExport }}
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
