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
      <p className="mt-4 text-lg text-gray-300">
        Since I was a kid, I’ve had a passion for mowing lawns, starting out by
        knocking on doors in the neighborhood for $10 a yard. I love the
        satisfaction of seeing a freshly mowed lawn and breathing in the fresh
        scent of cut grass. At Perfection Lawns LLC, we treat your lawn like
        it’s our own, taking pride in creating crisp, clean stripes and keeping
        your yard free of debris.We are fully licensed and insured, ensuring
        peace of mind with every service. Once you choose us as your lawn care
        provider, you’ll never want to go anywhere else. Call today to schedule
        your free estimate. For most lawn mowing services, we can provide an
        estimate over the phone.
      </p>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default LawnInfo;
