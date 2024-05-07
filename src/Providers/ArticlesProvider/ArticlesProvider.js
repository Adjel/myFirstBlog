import React, { createContext, useEffect, useState } from "react";

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
    console.log(` deletArticle: article.length ${articles.length}`);
    console.log(`deletArticle: article.id ${article.id}`);
    const response = await fetch(`${articleUrl}${article.id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    console.log({ json });

    // we will fake the response
    console.log(`delete : ${article.id}`);
    setArticles(articles.filter((item) => item.id !== article.id));
  };

  const postArticle = ({ title, body, userId }) => {
    // we need to wait the userId response from async function in UserProvider
    userId.then((id) => {
      // Then now we have the id, we can fetch post
      return post(id);
    });

    async function post(id) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: `${title}`,
            body: `${body}`,
            userId: `${id}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      console.log({ response });
      const json = await response.json();
      console.log({ json });
      return { response, json };
    }
  };

  const resetArticle = () => {
    setArticle(null);
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        deletArticle,
        article,
        getArticle,
        postArticle,
        resetArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;
