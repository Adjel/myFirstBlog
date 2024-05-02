import React, { createContext, useCallback, useEffect, useState } from "react";

export const ArticlesContext = createContext();

const url = "https://jsonplaceholder.typicode.com/posts";

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setArticles(json);
    };
    fetchArticles();
  }, []);

  const deletArticle = useCallback(
    (newData) => {
      setArticles({
        ...newData,
      });
    },
    [setArticles]
  );

  return (
    <ArticlesContext.Provider value={{ articles, deletArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;
