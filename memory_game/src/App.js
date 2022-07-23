import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Game from "./Components/Game";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
