import React, { createContext, useCallback, useEffect, useState } from "react";

export const ArticlesContext = createContext();

const url = "https://jsonplaceholder.typicode.com/posts";
const articleUrl = "https://jsonplaceholder.typicode.com/posts/";

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setArticles(json);
    };
    fetchArticles();
  }, []);

  const getArticle = async (id) => {
    const response = await fetch(`${articleUrl}${id}`);
    const json = await response.json();

    setArticle(json);
  };

  const deletArticle = useCallback(
    (newData) => {
      setArticles({
        ...newData,
      });
    },
    [setArticles]
  );

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        deletArticle,
        article,
        getArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;
