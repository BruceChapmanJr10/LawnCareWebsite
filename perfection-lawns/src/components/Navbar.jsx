import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "../items/Button";
import logoImg from "../assets/logo.jpg";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });
  return (
    // Navbar Scroll Effect
    <motion.nav
      animate={isHidden ? "hidden" : "visable"}
      whileHover={"visable"}
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        visable: { y: "0%" },
        hidden: { y: "-90%" },
      }}
      transition={{ duration: 0.2 }}
      className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-10"
    >
      <div className="container py-2 flex justify-center md:justify-between items-center">
        {/* Nav Title */}
        <div className="text-2xl font-bold hidden md:inline">
          <div className="flex flex-row py-3">
            <img
              src={logoImg}
              alt="Perfection Lawns"
              className="rounded-full h-12 px-3"
            />
            Perfection Lawns LLC
          </div>
        </div>
        {/* Nav Links */}
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">
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
        {/* Nav Button */}
        <Button text="Call Now" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
