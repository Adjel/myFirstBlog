import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CommentContext } from "../CommentProvider/CommentProvider";
import CommentItemComponent from "../CommentItemComponent/CommentItemComponent";

function CommentComponent({ articleId }) {
  const { fetchComments, deleteComment, comments } = useContext(CommentContext);

  useEffect(() => {
    fetchComments(articleId);
  }, [articleId]);

  return (
    <div>
      {comments.map(({ id, name, body }) => (
        <CommentItemComponent
          key={id}
          name={name}
          content={body}
          onClick={() => deleteComment(id)}
        ></CommentItemComponent>
      ))}
    </div>
  );
}

const Wrapper = styled.section``;

export default CommentComponent;
