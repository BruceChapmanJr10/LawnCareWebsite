import React from "react";

const SubmitButton = () => {
  return (
    <div>
      <button
        className="bg-gradient-to-r from-green-500 to-orange-600 text-white 
                           md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
