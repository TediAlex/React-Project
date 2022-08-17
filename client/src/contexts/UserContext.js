import { createContext } from 'react';
import { useLocalStorage } from './../hook/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('auth', {});
  const userLogin = (authData) => {
    setUser(authData);
  };
  const userLogout = () => {
    setUser({});
  };
  return (
    <UserContext.Provider
      value={{
        user: user,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
