import "./App.css";
import MyCarousel from "./components/HomePage/Carousel";
import Topics from "./components/HomePage/Topics";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Topics />
        <MyCarousel />
      </div>
    </>
  );
}

export default App;
