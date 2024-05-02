import React from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY } from "../../Constants";
import { FONTSIZE } from "../../Constants";

function ArticleComponent({ title, article, isPreview = false }) {
  return (
    <Article>
      <header>
        <Title>{title}</Title>
      </header>
      <Body>{article}</Body>
      <ReadMoreButton>Lire la suite</ReadMoreButton>
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

const ReadMoreButton = styled.button`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.button};
  background: none;
  border: none;
  text-transform: uppercase;
  color: ${COLORS.pimary};
`;

export default ArticleComponent;
