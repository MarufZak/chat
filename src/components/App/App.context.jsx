import React from 'react';
import { getFromLocalStorage, setToLocalStorage } from '@utils/helpers';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(() => {
    return getFromLocalStorage('user');
  });

  const handleLogin = (user) => {
    setUser(user);
    setToLocalStorage('user', user);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
