import "./App.scss";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
