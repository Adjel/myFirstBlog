import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CommentContext } from "../CommentProvider/CommentProvider";
import CommentItemComponent from "../CommentItemComponent/CommentItemComponent";
import CommentForm from "../CommentForm/CommentForm";

function CommentComponent({ articleId }) {
  const { fetchComments, postComment, deleteComment, comments } =
    useContext(CommentContext);

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
      {/* pass directly articleId to postComment ? */}
      <CommentForm articleId={articleId} onSubmit={postComment} />
    </div>
  );
}

const Wrapper = styled.section``;

export default CommentComponent;
