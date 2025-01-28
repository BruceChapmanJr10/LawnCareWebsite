import React from "react";
import FormButton from "../items/FormButton";
import SpringCleanupImg from "../assets/springcleanup.jpg";

const SpringCleanupInfo = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={SpringCleanupImg}
        alt="Mowed Lawn"
        className="mt-2 mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
                    transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        Professional{" "}
        <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Spring Clean-up{" "}
        </span>
        Services
      </h1>
      <div className="flex flex-col px-5 text-left space-y-6">
        <h3 className="mt-4 text-xl font-bold mx-auto max-w-2xl text-center text-gray-300">
          As the seasons change, it's time to give your yard the fresh start it
          deserves! At Perfection Lawns LLC, we specialize in comprehensive
          Spring Cleanup services that will transform your outdoor space into a
          lush, healthy environment ready for the warmer months ahead.
        </h3>
        <h4 className="mt-4 text-xl font-bold mx-auto text-gray-300">
          Our Spring Clean-up services include:
        </h4>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5">
          <li>Leaf Removal</li>
          <li>Debris Clean-up </li>
          <li>Lawn Aeration</li>
          <li>Edging and Mulching</li>
          <li>Pruning and Trimmingg</li>
          <li>Weed Control</li>
          <li>Fertilization</li>
        </ul>

        <h3 className="pt-5 text-xl text-gray-300 mx-auto max-w-3xl">
          Make sure your yard is ready for the season! Call Perfection Lawns LLC
          today for a free estimate to schedule your Spring Cleanup!
        </h3>
      </div>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default SpringCleanupInfo;
