import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import AppProvider from './App.context';
import { AppContext } from './App.context';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </AppProvider>
  );
}

export { AppContext };
export default App;
