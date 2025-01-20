import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeadPage from "./components/HeadPage";

function App() {
  return (
    <div>
      <Navbar />
      <HeadPage />
      <About />
      <Services />
      <Contact />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
