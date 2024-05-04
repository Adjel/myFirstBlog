import React, { createContext, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setUsers(json);
    };

    fetchUsers();
  }, []);

  function getUserbyId(userId) {
    setUser(users.find(({ id }) => id === userId));
  }

  return (
    <UserContext.Provider value={{ getUserbyId, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
