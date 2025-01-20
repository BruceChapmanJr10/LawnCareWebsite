import React, { useRef } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

// Close Modal
const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const form = useRef();

  //Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mb49urf", "template_0845rrb", form.current, {
        publicKey: "7mfYLsk53yHGUh25L",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className=" mb-10 z-10 fixed inset-0 bg-black bg-opacity-60 backdrop:blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-green-950  rounded-xl px-20 py 10 flex flex-col gap-5 items-center mx-4">
          <h1 className=" text-2xl md:text-3xl font-extrabold">
            Free Quote Form
          </h1>
          <form ref={form} onSubmit={sendEmail} className="py-2 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full md:py-3 md:px-4 rounded-md text-black bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Name"
                name="user_name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full md:px-4 md:py-2 rounded-md text-black bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Email"
                name="user_email"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <input
                name="user_address"
                type="text"
                className="w-full md:px-4 md:py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Address"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                type="text"
                className="w-full px-4 py-2 rounded-md text-black bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                rows="3"
                name="message"
              />
            </div>
            <button
              type="submit"
              className=" mt-4 w-full bg-gradient-to-r from-green-500 to-orange-600 text-white 
                           md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
