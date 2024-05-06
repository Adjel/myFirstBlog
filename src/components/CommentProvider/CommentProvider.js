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

  const deleteComment = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      }).then((json) => {
        console.log({ json });
        // fake response
        const newcomments = comments.filter((com) => com.id !== id);
        setComments(newcomments);
      });
    } catch (e) {
      throw new Error(
        `${e}: delete method failed at CommentProvider in deleteComment`
      );
    }
  };

  return (
    <CommentContext.Provider value={{ fetchComments, deleteComment, comments }}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
