import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/HomePage/Index";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
