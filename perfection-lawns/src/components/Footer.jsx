import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Perfecion Lawns LLC</h3>
            <p className="text-gray-400">
              Your Trusted Lawn Care Provider Servicing Winchester, VA
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded-1-lg bg-gray-800 border-gray-600
              focuse:outline-none focus:border-green-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1">
            <p>Contact Information:</p>
            <div className="mb-4 mt-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="inline-block text-green-400 mr-2"
              ></FontAwesomeIcon>
              <a
                href="mailto:brucechapmanjr10@gmail.com"
                className="hover:underline"
              >
                Send Message
              </a>
            </div>

            <div className="mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="inline-block text-green-400 mr-2"
              ></FontAwesomeIcon>
              <span>+15409316467</span>
            </div>

            <div className="mb-4">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className="inline-block text-green-400 mr-2"
              ></FontAwesomeIcon>
              <a
                href="mailto:brucechapmanjr10@gmail.com"
                className="hover:underline"
              >
                <span> street, city, country, zip </span>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-4 my-4 md:my-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <div className="text-gray-400">
            <a href="#" className="hover:text-white">
              Privacy
            </a>{" "}
            {"||"}{" "}
            <a href="#" className=" hover:text-white">
              Terms Of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
