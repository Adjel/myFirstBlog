import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

function FetchArticleComponent() {
  const [articles, setArticle] = React.useState([]);

  React.useEffect(() => {
    async function getArticles() {
      const response = await fetch(url);
      setArticle(await response.json());
    }

    getArticles();
  }, []);

  return articles;
}

export default FetchArticleComponent;
