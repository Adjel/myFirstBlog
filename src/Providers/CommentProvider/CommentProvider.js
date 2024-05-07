import React, { createContext, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/comments";
export const CommentContext = createContext();

function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async (postId) => {
    const response = await fetch(`${url}?postId=${postId}`);
    const json = await response.json();

    setComments(json);
  };

  const deleteComment = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
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

  const postComment = async ({ postId, name, email, body }) => {
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          postId: `${postId}`,
          // id is supposed to be created by the API
          // name is supposed to be fetched from user
          name: `${name}`,
          email: `${email}`,
          body: `${body}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          console.log({ response });
          return response.json();
        })
        .then((json) => {
          console.log(json);
          // fake the new comment
          const newComments = [
            ...comments,
            {
              postId: `${postId}`,
              id: `${new Date()}`,
              name: `${name}`,
              email: `${email}`,
              body: `${body}`,
            },
          ];
          setComments(newComments);
        });
    } catch (e) {
      throw new Error(
        `${e} cant't post the new comment at postComment in CommentProvider`
      );
    }
  };

  return (
    <CommentContext.Provider
      value={{ fetchComments, postComment, deleteComment, comments }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
