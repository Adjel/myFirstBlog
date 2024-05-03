import React from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY } from "../../Constants";
import { FONTSIZE } from "../../Constants";
import { Link } from "react-router-dom";

function ArticleComponent({ title, article, isPreview = false }) {
  return (
    <Article>
      <header>
        <Title>{title}</Title>
      </header>
      <Body>{article}</Body>
      <ReadMoreLink to="/article">Lire la suite</ReadMoreLink>
    </Article>
  );
}

const Article = styled.article`
  padding: 0 ${32 / 16}rem;
`;

const Title = styled.h1`
  font-family: ${FONTFAMILY.lustria};
  font-size: ${FONTSIZE.h1};
  text-transform: uppercase;
  text-align: center;
`;

const Body = styled.p`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.parag};
  padding: ${8 / 16}rem 0;
`;

const ReadMoreLink = styled(Link)`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.button};
  background: none;
  border: none;
  text-transform: uppercase;
  color: ${COLORS.pimary};
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export default ArticleComponent;
