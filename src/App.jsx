import "./App.css";
import MyCarousel from "./components/HomePage/Carousel";
import Feedback from "./components/HomePage/Feedback";
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
        <Feedback />
      </div>
    </>
  );
}

export default App;
