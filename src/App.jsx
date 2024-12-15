import "./App.css";
import MyCarousel from "./components/HomePage/Carousel";
import Topics from "./components/HomePage/Topics";
import Trends from "./components/HomePage/Trends";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Topics />
        <MyCarousel />
        <Trends />
      </div>
    </>
  );
}

export default App;
