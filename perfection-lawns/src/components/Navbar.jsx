import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import CallButton from "../items/CallButton";
import LogoImage from "../assets/logo.jpg";

const Navbar = () => {
  //dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const leaveDropDown = () => setIsOpen(false);

  //navbar hiddin on scroll

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
      <div className="container py-2 flex justify-center md:justify-between items-center whitespace-nowrap">
        <div className="text-2xl font-bold hidden md:inline">
          <div className="flex flex-row gap-3">
            <img src={LogoImage} alt="logo" className="rounded-full h-10" />{" "}
            <h2>Perfection Lawns</h2>
          </div>
        </div>
        <div className="space-x-6">
          <a href="/" className="hover:text-green-600">
            Home
          </a>
          <a href="/about" className="hover:text-green-600">
            About
          </a>

          {/* drop-down menu */}
          <div
            onMouseEnter={toggleDropdown}
            className="relative inline-block text-left"
          >
            <a href="/services" className="hover:text-green-600">
              Services
            </a>
            {isOpen && (
              <div
                onMouseLeave={leaveDropDown}
                className="origin-top-right absolute left-0 mt-2 w-40 
                    rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                role="menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="/lawn-service"
                    className="block px-4 py-2 text-sm text-white 
                            hover:bg-green-800"
                    role="menuitem"
                  >
                    Lawn Mowing
                  </a>
                  <a
                    href="/landscape"
                    className="block px-4 py-2 text-sm text-white
                            hover:bg-green-800"
                    role="menuitem"
                  >
                    Landscaping
                  </a>
                  <a
                    href="/leafcleanup"
                    className="block px-4 py-2 text-sm text-white
                            hover:bg-green-800"
                    role="menuitem"
                  >
                    Leaf Removal
                  </a>
                  <a
                    href="/mulching"
                    className="block px-4 py-2 text-sm text-white
                            hover:bg-green-800"
                    role="menuitem"
                  >
                    Mulching
                  </a>
                  <a
                    href="/planting"
                    className="block px-4 py-2 text-sm text-white
                            hover:bg-green-800"
                    role="menuitem"
                  >
                    Planting
                  </a>
                </div>
              </div>
            )}
          </div>
          <a href="/contact" className="hover:text-green-600">
            Contact
          </a>
          <a href="#blog" className="hover:text-green-600">
            Blog
          </a>
        </div>
        <CallButton />
      </div>
    </motion.nav>
  );
};

export default Navbar;
