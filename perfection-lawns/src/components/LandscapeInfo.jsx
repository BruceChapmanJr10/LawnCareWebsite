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
        <p className="mt-4 text-lg max-w-2xl mx-auto text-left text-gray-300 ">
          At Perfection Lawns LLC, we believe a well-maintained landscape is key
          to a beautiful and inviting home. Let us help you keep your lawn and
          garden looking pristine all year round. We recommend adding landscape
          maintenance to your monthly plan for the best results. Our
          professional team will ensure your outdoor space remains perfectly
          manicured, giving you more time to enjoy it.
        </p>
        <h3 className="mt-4 text-xl font-bold mx-auto text-left text-gray-300">
          Our comprehensive landscape maintenance services include:
        </h3>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5 max-w-2xl">
          <li>
            <span className="font-bold">Lawn Mowing and Edging:</span>
            <br />
            <span className="text-base">
              ** We’ll ensure your lawn is mowed to perfection, with crisp,
              clean edges around flower beds, driveways, and walkways. **
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
        <p className="mt-7 text-lg max-w-2xl mx-auto text-left">
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

export default LandscapeInfo;
