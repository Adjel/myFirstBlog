import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY } from "../../Constants";
import { FONTSIZE } from "../../Constants";
import { ArticlesContext } from "../ArticlesProvider";
import { UserContext } from "../UserProvider/UserProvider";
import AuthorComponent from "../AuthorComponent/AuthorComponent";
import { useParams } from "react-router-dom";

function ArticleComponent() {
  const { id } = useParams();
  const { article, getArticle } = useContext(ArticlesContext);
  const { user, getUserbyId } = useContext(UserContext);

  useEffect(() => {
    getArticle(id);
    getUserbyId(article.userId);
    console.log({ user });
  }, [getUserbyId]);

  return (
    <Wrapper>
      <Article>
        <header>
          <Title>{article.title}</Title>
        </header>
        <Body>{article.body}</Body>
      </Article>
      <AuthorComponent user={user} />
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

const AuthorWrapper = styled.section``;

export default ArticleComponent;
