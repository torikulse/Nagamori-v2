import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Treatment from "./pages/Treatment";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <MobileNav sidebar={sidebar} setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
