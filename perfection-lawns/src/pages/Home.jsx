import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeadPage from "../components/HeadPage";

const Home = () => {
  return (
    <div>
      <HeadPage />
      <About />
      <Services />
      <Contact />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
