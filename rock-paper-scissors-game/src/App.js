import Footer from "./Footer";
import Header from "./Header";
import PlayGame from "./PlayGame";
import "./App.css"
import MainContextProvider from "./Contexts/MainContext";

function App() {
  return (
    <MainContextProvider>
      <div className="App">
        <Header />
        <PlayGame />
        <Footer />
      </div>
    </MainContextProvider>
  );
}

export default App;
