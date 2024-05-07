import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import HeaderComponent from "../src/components/HeaderComponent";
import ArticleComponent from "./components/ArticleComponent/ArticleComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesProvider from "./Providers/ArticlesProvider/ArticlesProvider";
import UserProvider from "./Providers/UserProvider/UserProvider";
import CreateArticleComponent from "./components/CreateArticleComponent/CreateArticleComponent";
import CommentProvider from "./Providers/CommentProvider/CommentProvider";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ArticlesProvider>
          <CommentProvider>
            <body>
              <header>
                <HeaderComponent />
              </header>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="article/:id" element={<ArticleComponent />} />
                <Route
                  path="createArticle"
                  element={<CreateArticleComponent />}
                />
              </Routes>
            </body>
          </CommentProvider>
        </ArticlesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
