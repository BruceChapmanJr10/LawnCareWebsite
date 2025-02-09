import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LawnService from "./pages/LawnService";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Landscape from "./pages/Landscape";
import LeafCleanup from "./pages/LeafCleanup";
import Mulching from "./pages/Mulching";
import Planting from "./pages/Planting";
import SpringCleanups from "./pages/SpringCleanups";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <HashRouter base="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lawn-service" element={<LawnService />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutowner" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/leafcleanup" element={<LeafCleanup />} />
          <Route path="/mulching" element={<Mulching />} />
          <Route path="/planting" element={<Planting />} />
          <Route path="/springcleanups" element={<SpringCleanups />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
