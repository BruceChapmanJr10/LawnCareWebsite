import React from "react";
import FormButton from "../items/FormButton";
import LandscapeImg from "../assets/landscapeImg.webp";

const LandscapeInfo = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={LandscapeImg}
        alt="Mowed Lawn"
        className="mt-2 mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
                      transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        Professional{" "}
        <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Landscape Maintenance{" "}
        </span>
        Services
      </h1>
      <div className="flex flex-col px-5 text-left space-y-6">
        <p className="mt-4 text-lg md:mx-12 text-gray-300">
          At Perfection Lawns LLC, we believe a well-maintained landscape is key
          to a beautiful and inviting home. Let us help you keep your lawn and
          garden looking pristine all year round. We recommend adding landscape
          maintenance to your monthly plan for the best results. Our
          professional team will ensure your outdoor space remains perfectly
          manicured, giving you more time to enjoy it.
        </p>
        <p className="mt-4 text-lg mx-auto text-left text-gray-300">
          Our comprehensive landscape maintenance services include:
        </p>
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
        <p className="mt-7 text-lg mx-auto text-green-700">
          We offer weekly lawn mowing from the beginning of April to early
          November, weather permitting.
        </p>
        <p className="text-lg mx-auto text-green-700">
          This typically includes around 30 cuts, which can be distributed
          across a 12-month plan for your convenience.
        </p>

        <h3 className="mt-4 text-xl text-gray-300 mx-auto">Why Weakly Mows:</h3>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5">
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

export default LandscapeInfo;
