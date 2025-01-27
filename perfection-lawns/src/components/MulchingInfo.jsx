import React from "react";
import FormButton from "../items/FormButton";
import MulchingImg from "../assets/mulchingImg.webp";

const MulchingInfo = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={MulchingImg}
        alt="Mulching Image"
        className="mt-2 mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
                    transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        Professional{" "}
        <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Mulching{" "}
        </span>
        Services
      </h1>
      <div className="flex flex-col px-5 text-left space-y-6">
        <h3 className="mt-4 text-xl font-bold mx-auto text-gray-300">
          Make Your Landscape Stand Out With Some Fresh Mulch
        </h3>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-left text-gray-300">
          Mulching is a simple yet highly effective way to improve the health,
          beauty, and sustainability of your lawn and garden. Whether you are
          looking to conserve water, promote soil health, or enhance your
          landscape’s visual appeal, mulching is an investment that provides
          long-term benefits for your outdoor space.
        </p>
        <h4 className="mt-4 text-xl font-bold mx-auto text-gray-300">
          Here are the key benefits of mulching for your lawn and garden:
        </h4>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5">
          <li>Improves Soil Moisture Retention </li>
          <li>Enhances Soil Health</li>
          <li>Reduces Weed Growth</li>
          <li>Regulates Soil Temperature</li>
          <li>Reduces Soil Erosion</li>
          <li>Enhances the Appeal of Your Lawn</li>
          <li>Saves Time on Lawn Maintenance</li>
          <li>Environmentally Friendly</li>
          <li>Increases Property Value</li>
        </ul>

        <h3 className="pt-5 text-xl text-gray-300 mx-auto">
          For professional mulching services tailored to your lawn’s needs,
          contact Perfection Lawns LLC today!
        </h3>
      </div>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default MulchingInfo;
