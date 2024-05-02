import React, { createContext, useContext, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch(url);
      setArticles(await response.json());
    }

    getArticles();
  }, []);

  return (
    <APIContext.Provider value={{ articles }}>{children}</APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);

  if (context === undefined) {
    throw new Error("Context must be within a provider");
  }
  return context;
}
