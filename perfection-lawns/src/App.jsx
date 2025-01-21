import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LawnService from "./pages/LawnService";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawn-service" element={<LawnService />} />
      </Routes>
    </div>
  );
}

export default App;
