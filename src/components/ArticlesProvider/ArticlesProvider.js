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
      console.log(`in ArticleProvider: ${articles.length}`);
    };
    fetchArticles();
  }, []);

  const getArticle = async (id) => {
    const response = await fetch(`${articleUrl}${id}`);
    const json = await response.json();

    setArticle(json);
  };

  const deletArticle = async () => {
    console.log("before");
    console.log(` article: ${articles.length}`);
    console.log(`article.id ${article.id}`);
    const response = await fetch(`${articleUrl}${article.id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    console.log({ json });

    // we will fake the response
    console.log(`delete : ${article.id}`);
    setArticles(articles.filter((item) => item.id !== article.id));
  };

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
