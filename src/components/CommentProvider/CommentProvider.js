import React, { createContext, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/comments";
export const CommentContext = createContext();

function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  /*
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(url);
      const json = await response.json();

      setComments(json);
    }

    fetchComments();
  }, []);
  */

  const fetchComments = async (postId) => {
    const response = await fetch(`${url}?postId=${postId}`);
    const json = await response.json();

    setComments(json);
  };

  return (
    <CommentContext.Provider value={{ fetchComments, comments }}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
