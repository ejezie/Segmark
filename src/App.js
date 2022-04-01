import "./App.scss";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AccountType from "./pages/AccountType";


function App() {
  const [drawer, setDrawer] = useState(false);

  const location = useLocation();

  const handleMenuClick = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/account" ? null : (
        <Navbar handleMenuClick={handleMenuClick} />
      )}
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/account" ? null : (
        <Slider drawer={drawer} handleMenuClick={handleMenuClick} />
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<AccountType />} />
      </Routes>
      {location.pathname === "/signup" ||
      location.pathname === "/signin" ||
      location.pathname === "/account" ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
