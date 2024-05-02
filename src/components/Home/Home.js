import React, { useContext } from "react";
import { ArticlesContext } from "../ArticlesProvider";
import ArticleComponent from "../ArticleComponent/ArticleComponent";
import styled from "styled-components";

function Home() {
  const { articles } = useContext(ArticlesContext);
  return (
    <Wrapper>
      {articles.map(({ id, title, body }) => (
        <ArticleComponent key={id} title={title} article={body} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${20 / 16}rem;
  margin-top: ${20 / 16}rem;
`;

export default Home;
