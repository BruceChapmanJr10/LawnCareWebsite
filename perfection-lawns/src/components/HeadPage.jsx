import React, { useState } from "react";
import MowingImg from "../assets/lawn.webp";
import MulchingImg from "../assets/mulching.webp";
import LeafCleanup from "../assets/leafcleanup.webp";
import FormButton from "../items/FormButton";
import CallButton from "../items/CallButton";

const HeadPage = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <div className="mb-8">
        <h1 className=" mb-3 text-4xl font-bold text-transparent bg bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 ">
          Perfection Lawns LLC
        </h1>
        <p>
          Trusted Lawn Mowing and Landscape Company Servicing Winchester,VA and
          Surrounding Areas
        </p>
      </div>
      <div className=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <a href="/lawn-service">
            <img
              src={MowingImg}
              alt="Mowed Lawn"
              className="mx-auto mb-3 w-48 h-48 rounded-lg object-cover transform
                        transition-transform duration-300 hover:scale-105"
            />
            <h3>Lawn Mowing</h3>
          </a>
        </div>
        <div>
          <a href="./mulching">
            <img
              src={MulchingImg}
              alt="Mowed Lawn"
              className="mx-auto mb-3 w-48 h-48 rounded-lg object-cover transform
                        transition-transform duration-300 hover:scale-105"
            />

            <h3>Mulching</h3>
          </a>
        </div>
        <div>
          <a href="./leafcleanup">
            <img
              src={LeafCleanup}
              alt="Mowed Lawn"
              className="mx-auto mb-3 w-48 h-48 rounded-lg object-cover transform
                        transition-transform duration-300 hover:scale-105"
            />
            <h3>Leaf Clean-ups</h3>
          </a>
        </div>
      </div>

      <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto text-left">
        Looking for a professional lawn mowing and landscape company who is
        reliable, trustworthy, and always listens to what the customer wants?
        Then you came to the right place! We treat our customers like family, no
        that does not mean you get a free cut every week, but that does mean we
        treat your yard with respect and care. Please call today or fill out the
        free quote form for more information.
      </p>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <CallButton />
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default HeadPage;
