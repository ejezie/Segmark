import "./App.scss";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Slider from "./components/Slider";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
