import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

function FetchArticleComponent() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    async function getArticles() {
      const response = await fetch(url);
      setArticles(await response.json());
    }

    getArticles();
  }, []);
}

export default FetchArticleComponent;
