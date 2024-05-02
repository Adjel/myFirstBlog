import "./App.css";
import Home from "./components/Home/Home";
import ArticlesProvider from "./components/ArticlesProvider";

function App() {
  return (
    <body>
      <ArticlesProvider>
        <Home />
      </ArticlesProvider>
    </body>
  );
}

export default App;
