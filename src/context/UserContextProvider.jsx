import React, { createContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/users_service";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingUsers, setLoadinUsers] = useState(true);
  useEffect(() => {
    getAllUsers()
      .then((users) => {
        setAllUsers(users.users);
        setLoadinUsers(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadinUsers(false);
      });
    return () => {};
  }, []);

  return (
    <UserContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        allUsers,
        setAllUsers,
        loadingUsers,
        setLoadinUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
