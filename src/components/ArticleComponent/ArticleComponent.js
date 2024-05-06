import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY } from "../../Constants";
import { FONTSIZE } from "../../Constants";
import { ArticlesContext } from "../ArticlesProvider";
import { UserContext } from "../UserProvider/UserProvider";
import AuthorComponent from "../AuthorComponent/AuthorComponent";
import { useParams } from "react-router-dom";
import Divider from "../Divider/Divider";
import CommentComponent from "../CommentComponent/CommentComponent";

function ArticleComponent() {
  const { id } = useParams();
  const { article, getArticle } = useContext(ArticlesContext);
  const { user, getUserbyId } = useContext(UserContext);

  // Here we want the article to load, one time is ok
  useEffect(() => {
    getArticle(id);
  }, []);

  // first we need the article userId to get the user
  // then on page reload we need the user again
  useEffect(() => {
    getUserbyId(article.userId);
    console.log({ user });
  }, [getArticle]);

  return (
    <Wrapper>
      <Article>
        <header>
          <Title>{article.title}</Title>
        </header>
        <Body>{article.body}</Body>
      </Article>
      <Divider />
      <AuthorComponent user={user} />
      <Divider />
      <CommentComponent articleId={article.id} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0 ${32 / 16}rem;
`;

const Article = styled.article``;

const Title = styled.h1`
  font-family: ${FONTFAMILY.lustria};
  font-size: ${FONTSIZE.h1};
  text-transform: uppercase;
  text-align: center;
`;

const Body = styled.p`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.parag};
`;

export default ArticleComponent;
