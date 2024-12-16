import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/HomePage/Index";
import Navbar from "./components/shared/Navbar";
import AllRestaurant from "./components/AllRestaurant/AllRestaurant";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/AllRestaurant" element={<AllRestaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
