import "./App.css";
import MyCarousel from "./components/HomePage/Carousel";
import Feedback from "./components/HomePage/Feedback";
import Reviews from "./components/HomePage/Reviews";
import Topics from "./components/HomePage/Topics";
import Trends from "./components/HomePage/Trends";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Topics />
        <MyCarousel />
        <Trends />
        <Feedback />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default App;
