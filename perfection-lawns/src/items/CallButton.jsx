import React from "react";
import { Phone } from "lucide-react";

const CallButton = (props) => {
  return (
    <div
      className="hidden lg:bg-gradient-to-r from-green-500 to-orange-600 text-white 
                           lg:inline transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full  "
    >
      <a className="text-green-900" href="tel:+15409316467">
        {props.text}
        <Phone />
      </a>
    </div>
  );
};

export default CallButton;
