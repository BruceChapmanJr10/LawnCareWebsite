import React, { useState } from "react";
import Modal from "../modals/FormModal";

const Button = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setShowModal(true)}
        className="bg-gradient-to-r from-green-500 to-orange-600 text-white 
                           md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
      >
        {props.text}
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Button;
