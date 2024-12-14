import "./App.css";
import Carousel from "./components/HomePage/Carousel";
import Topics from "./components/HomePage/Topics";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Topics />
        <Carousel />
      </div>
    </>
  );
}

export default App;
