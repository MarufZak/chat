import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default Dashboard;
