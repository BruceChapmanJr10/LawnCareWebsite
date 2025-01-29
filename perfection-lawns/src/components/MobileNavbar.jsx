import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Phone } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";

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
              <a
                onClick={() => setOpen((prev) => !prev)}
                href="/"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                Home
              </a>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <a
                onClick={() => setOpen((prev) => !prev)}
                href="/about"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                About
              </a>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <a
                onClick={() => setOpen((prev) => !prev)}
                href="/services"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                Services
              </a>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
              <a
                onClick={() => setOpen((prev) => !prev)}
                href="/contact"
                className="hover:text-green-600 flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
      <Phone className="text-green-900 mt-3" href="tel:+15409316467" />
    </div>
  );
};

export default MobileNavbar;
