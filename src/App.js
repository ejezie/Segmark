import "./App.scss";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

function App() {
  const [drawer, setDrawer] = useState(false);

  const handleMenuClick = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <Router>
        <Slider drawer={drawer} handleMenuClick={handleMenuClick} />
        <Navbar handleMenuClick={handleMenuClick} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
