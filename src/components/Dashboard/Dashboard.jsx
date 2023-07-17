import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ChatPanel from './ChatPanel';

function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=":id" element={<ChatPanel />} />
      </Route>
    </Routes>
  );
}

export default Dashboard;
