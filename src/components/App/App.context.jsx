import React from 'react';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(() => {
    const existingUser = localStorage.getItem('user');
    return existingUser ? JSON.parse(existingUser) : null;
  });

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
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
