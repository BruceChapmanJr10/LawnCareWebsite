import React from "react";

const Button = (props) => {
  return (
    <div>
      {" "}
      <button
        className="bg-gradient-to-r from-green-500 to-orange-600 text-white 
                            hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
