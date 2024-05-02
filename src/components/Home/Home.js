import React, { useContext } from "react";
import { ArticlesContext } from "../ArticlesProvider";

function Home() {
  const { articles } = useContext(ArticlesContext);
  return (
    <>
      {articles.map(({ id, body }) => (
        <div key={id}>{body}</div>
      ))}
    </>
  );
}

export default Home;
