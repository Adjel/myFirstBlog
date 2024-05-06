import React, { useContext } from "react";
import { ArticlesContext } from "../../components/ArticlesProvider";
import ArticleComponent from "../../components/ArticleItemComponent/ArticleItemComponent";

export default function Article() {
  const { currentArticle } = useContext(ArticlesContext);
  return <ArticleComponent article={currentArticle} />;
}
