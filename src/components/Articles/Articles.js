import React from "react";
import { useAPI } from "../apiContext.js/apiContext";

export default function Articles() {
  const { articles } = useAPI();
  return (
    <ul>
      {articles.map(({ body, id }) => (
        <div key={id}>{body}</div>
      ))}
    </ul>
  );
}
