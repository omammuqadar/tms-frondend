import { createContext, useState } from "react";

const muser = {
  mid: 0,
  auth: false
}

export const UserContext = createContext(muser);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState(muser);

  // Login updates the user data with a name parameter
  const login = (mid) => {
    setUser((user) => ({
      mid: mid,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      mid: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  )
}
