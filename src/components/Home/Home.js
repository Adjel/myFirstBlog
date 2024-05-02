import React from "react";
import { APIContextProvider } from "../apiContext.js/apiContext";
import Articles from "../Articles/Articles";

function Home() {
  return (
    <APIContextProvider>
      <Articles />
    </APIContextProvider>
  );
}

export default Home;
