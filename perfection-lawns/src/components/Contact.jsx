import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Business Contact Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 mb-4">
              Let's Talk About Your Project
            </h3>
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

          {/* Subscription Form */}
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full pt-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full pt-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full pt-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  rows="5"
                />
              </div>

              <button
                className="bg-gradient-to-r from-green-500 to-orange-500 text-white 
                            hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
