import React, { useContext } from "react";
import { ArticlesContext } from "../../components/ArticlesProvider";
import ArticleItemComponent from "../../components/ArticleItemComponent/ArticleItemComponent";
import styled from "styled-components";

function Home() {
  const { articles } = useContext(ArticlesContext);
  return (
    <Wrapper>
      {articles.map((article) => (
        <ArticleItemComponent key={article.id} article={article} />
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
