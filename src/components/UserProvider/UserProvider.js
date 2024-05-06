import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

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

  // If we havn't any user corresponding to the id the api will get another
  // so we will fake this here
  const fakeNewUser = () => {
    return users[users.length - 1].id + 1;
  };

  async function getUserIdByEmail(userEmail) {
    const response = await fetch(url + `?email=${userEmail}`);
    const json = await response.json();
    return json[0]?.id ?? fakeNewUser();
  }

  return (
    <UserContext.Provider value={{ getUserbyId, user, getUserIdByEmail }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
