import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Phone } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="flex justify-between lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2">
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                to={"/"}
                href="#"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                Home
              </Link>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                to={"/about"}
                href="#"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                About
              </Link>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                to={"/services"}
                href="#"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                Services
              </Link>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <Link
                onClick={() => setOpen((prev) => !prev)}
                to={"/contact"}
                href="#"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      <a
        className="bg-gradient-to-r from-green-500 to-orange-600 text-white px-3 py-3 mt-2 rounded-full "
        href="tel:+15409316467"
      >
        <Phone />
      </a>
    </div>
  );
};

export default MobileNavbar;
