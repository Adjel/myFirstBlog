import React from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY } from "../../Constants";
import { FONTSIZE } from "../../Constants";
import { Link } from "react-router-dom";

function ArticleItemComponent({ article }) {
  return (
    <Article>
      <header>
        <Title>{article.title}</Title>
      </header>
      <Body>{article.body}</Body>
      <ReadMoreLink to={`article/${article.id}`}>Lire la suite</ReadMoreLink>
    </Article>
  );
}

const Article = styled.article`
  padding: ${32 / 16}rem;
  background: ${COLORS.Gray.buttonLightGray};
  width: 80%;
`;

const Title = styled.h1`
  font-family: ${FONTFAMILY.lustria};
  font-size: ${FONTSIZE.h1};
  text-transform: uppercase;
  text-align: center;
`;

/*
   overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; => number or lines to show
  line-clamp: 4;
  -webkit-box-orient: vertical;

  this makes the text truncate at 4 lines then put the ellipsis
 */
const Body = styled.p`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.parag};

  overflow: "hidden",
  "text-overflow": "ellipsis",
  display: "-webkit-box",
  "-webkit-line-clamp": "4",
  "line-clamp": "4",
  "-webkit-box-orient": "vertical",
`;

const ReadMoreLink = styled(Link)`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.button};
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: ${COLORS.primary};
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export default ArticleItemComponent;
