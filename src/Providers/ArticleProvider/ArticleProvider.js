import React, { createContext, useState } from "react";

const ArticleContext = createContext();

function ArticleProvider({ children }) {
  const [currentArticle, setCurrentArticle] = useState(null);

  return (
    <ArticleContext.Provider value={{ currentArticle, setCurrentArticle }}>
      {children}
    </ArticleContext.Provider>
  );
}

export default ArticleProvider;
