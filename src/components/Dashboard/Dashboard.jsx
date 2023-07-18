import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ChatPanel from './ChatPanel';

export const DashboardContext = React.createContext();

function Dashboard() {
  const [chats, setChats] = React.useState({});

  React.useEffect(() => {
    const newChats = JSON.parse(localStorage.getItem('chats'));
    setChats(newChats);
  }, []);

  return (
    <DashboardContext.Provider value={{ chats }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":id" element={<ChatPanel />} />
        </Route>
      </Routes>
    </DashboardContext.Provider>
  );
}

export default Dashboard;
