import React from "react";
import Button from "../items/Button";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          {" "}
          Perfection Lawns{" "}
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#blog" className="hover:text-gray-400">
            Blog
          </a>
        </div>
        <Button text="Submit" />
      </div>
    </nav>
  );
};

export default Navbar;
