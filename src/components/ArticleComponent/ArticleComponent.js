import React, { useContext } from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY } from "../../Constants";
import { FONTSIZE } from "../../Constants";
import { ArticlesContext } from "../ArticlesProvider";

function ArticleComponent() {
  const { currentArticle } = useContext(ArticlesContext);

  return (
    <Wrapper>
      <Article>
        <header>
          <Title>{currentArticle.title}</Title>
        </header>
        <Body>{currentArticle.body}</Body>
      </Article>
      <AuthorWrapper></AuthorWrapper>
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
