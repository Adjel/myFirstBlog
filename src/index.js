import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home/Home";
import HeaderComponent from "../src/components/HeaderComponent";
import ArticleComponent from "./components/ArticleComponent/ArticleComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesProvider from "./components/ArticlesProvider";
import UserProvider from "./components/UserProvider/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <ArticlesProvider>
        <body>
          <header>
            <HeaderComponent />
          </header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="article/:id" element={<ArticleComponent />} />
            </Routes>
          </BrowserRouter>
        </body>
      </ArticlesProvider>
    </UserProvider>
  );
}

/**
 *   <body>
      <ArticlesProvider>
        <header>
          <HeaderComponent />
        </header>
        <Home />
      </ArticlesProvider>
    </body>
 */

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
