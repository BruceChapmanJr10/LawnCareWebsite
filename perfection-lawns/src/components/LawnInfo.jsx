import React from "react";
import LawnImg from "../assets/lawn.webp";
import FormButton from "../items/FormButton";

const LawnInfo = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={LawnImg}
        alt="Mowed Lawn"
        className="mt-2 mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
                        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        Professional{" "}
        <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Lawn Mowing{" "}
        </span>
        Services
      </h1>
      <div className="flex flex-col px-5 text-left space-y-6">
        <h3 className="mt-4 text-xl font-bold mx-auto max-w-2xl text-center text-gray-300">
          At Perfection Lawns LLC, we are committed to delivering top-notch lawn
          care with every visit.
        </h3>
        <h4 className="mt-4 text-xl font-bold mx-auto text-gray-300">
          Our lawn mowing services include:
        </h4>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5">
          <li>Mowing for an even, clean-cut look </li>
          <li>String-trimming around edges and obstacles </li>
          <li>
            Edging along concrete and asphalt for a sharp, defined boundary
          </li>
          <li>
            Blowing grass clippings off hard surfaces, leaving your yard neat
            and tidy
          </li>
        </ul>
        <p className="pt-5 text-lg mx-auto max-w-2xl text-green-700">
          We offer weekly lawn mowing from the beginning of April to early
          November, weather permitting.
        </p>
        <p className="text-lg mx-auto max-w-2xl text-green-700">
          This typically includes around 30 cuts, which can be distributed
          across a 12-month plan for your convenience.
        </p>

        <h3 className="pt-5 text-xl text-gray-300 mx-auto">Why Weakly Mows:</h3>
        <ul className="text-lg list-disc max-w-2xl marker:text-green-800 mx-auto text-left pl-5 space-y-5">
          <li>
            Promote Healthy Growth: Regular weekly mowing helps maintain an even
            lawn, encouraging robust growth
          </li>
          <li>
            Natural Fertilization: Small clippings from each mow decompose and
            enrich your lawn, providing essential nutrients
          </li>
        </ul>
      </div>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default LawnInfo;
