import "./App.css";
import Home from "./components/Home/Home";
import ArticlesProvider from "./components/ArticlesProvider";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <body>
      <ArticlesProvider>
        <header>
          <HeaderComponent />
        </header>
        <Home />
      </ArticlesProvider>
    </body>
  );
}

export default App;
