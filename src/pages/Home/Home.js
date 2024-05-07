import React, { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../../Providers/ArticlesProvider/ArticlesProvider";
import ArticleItemComponent from "../../components/ArticleItemComponent/ArticleItemComponent";
import styled from "styled-components";

function Home() {
  const { articles, resetArticle } = useContext(ArticlesContext);

  useEffect(() => {
    console.log(`wanna delete the article`);
    // In header we have an add button in menu
    // When we are here this button state is addArticle
    // In articleComponent, this button become a deleteArticle because we have a selected article
    // So here, we want to go back to no selected article
    resetArticle();
  });

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
  align-items: center;
  gap: ${20 / 16}rem;
  margin-top: ${20 / 16}rem;
`;

export default Home;
