import React from "react";
import FormButton from "../items/FormButton";
import LeafRemoval from "../assets/leafRemoval.webp";

const LeafInfo = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={LeafRemoval}
        alt="Leaf Cleanup Img"
        className="mt-2 mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
                    transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        Professional{" "}
        <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Leaf Removal{" "}
        </span>
        Services
      </h1>
      <div className="flex flex-col px-5 text-left space-y-6">
        <p className="mt-4 text-lg md:mx-12 text-gray-300">
          At Perfection Lawns LLC, we understand that maintaining a clean,
          healthy lawn goes beyond regular mowing. Leaf removal is an essential
          service to protect your lawn and keep your yard looking neat and
          inviting throughout the fall and the beginning of Spring.
        </p>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5">
          <li>
            <span className="font-bold">Lawn Mowing and Edging:</span>
            <span className="text-base">
              We will blow all the leaves off your property
            </span>
          </li>
          <li>
            <span className="font-bold">Hedge Trimming:</span>
            <br />
            <span className="text-base">
              ** Keep your shrubs and hedges neat and tidy with our expert
              trimming services, enhancing the overall appearance of your yard.
              **
            </span>
          </li>
          <li>
            <span className="font-bold">Weed Control:</span>
            <br />
            <span className="text-base">
              ** We’ll remove unsightly weeds from your lawn and flower beds to
              maintain a healthy and clean landscape. **
            </span>
          </li>
          <li>
            <span className="font-bold">Flower Bed Maintenance:</span>
            <br />
            <span className="text-base">
              ** Keep your flower beds looking vibrant with regular care,
              including weeding, mulching, and trimming. **
            </span>
          </li>
          <li>
            <span className="font-bold">Seasonal Cleanup:</span>
            <br />
            <span className="text-base">
              ** We offer fall and spring cleanups to keep your landscape
              thriving through every season. **
            </span>
          </li>
        </ul>
        <p className="mt-7 text-lg md:mx-12">
          By adding maintenance to your plan, you'll not only save time, but
          you'll also ensure your home’s exterior stays flawless throughout the
          year. At Perfection Lawns LLC, we take pride in delivering exceptional
          service and a landscape that reflects the care and attention it
          deserves.
        </p>
      </div>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default LeafInfo;
