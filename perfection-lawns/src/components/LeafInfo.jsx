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
            <span className="font-bold">Leaf Blowing:</span>
            <br />
            <span className="text-base">
              ** We will blow all the leaves off your property. **
            </span>
          </li>
          <li>
            <span className="font-bold">Leaf Mulching:</span>
            <br />
            <span className="text-base">
              ** We blow all leaves into the yard and mulch it up. **
            </span>
          </li>
          <li>
            <span className="font-bold">Leaf Removal:</span>
            <br />
            <span className="text-base">
              ** We provide thorough leaf collection, ensuring all leaves are
              removed from your lawn, flower beds, and driveway. **
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
      </div>
      <div className="flex flex-col px-5 text-left space-y-6 mt-8">
        <p className="mt-4 text-lg md:mx-12 text-center text-gray-300">
          Benifits of Leaf Removal Include:
        </p>
        <ul className="text-lg list-disc mx-auto max-w-screen-md marker:text-green-800 text-left pl-5 space-y-5">
          <li>
            <span className="font-bold">Prevents Lawn Damage:</span>
            <br />
            <span className="text-base">
              ** Leaving leaves on the lawn can suffocate the grass, leading to
              fungal growth and dead spots. Regular leaf removal helps prevent
              this damage and promotes healthy grass. **
            </span>
          </li>
          <li>
            <span className="font-bold">Improves Appeal:</span>
            <br />
            <span className="text-base">
              ** A tidy lawn free of fallen leaves enhances your home's curb
              appeal, creating a clean and well-maintained appearance throughout
              the season. **
            </span>
          </li>
          <li>
            <span className="font-bold">Enhanced Lawn Care: </span>
            <br />
            <span className="text-base">
              ** Leaf removal is a key part of lawn maintenance. Removing debris
              helps your lawn breathe and promotes healthy growth when spring
              arrives.**
            </span>
          </li>
          <li>
            <span className="font-bold">Comprehensive Cleanup:</span>
            <br />
            <span className="text-base">
              ** Our services go beyond just leaf removal. We also clear debris
              from hard surfaces like sidewalks, patios, and driveways, leaving
              your entire property looking perfect. **
            </span>
          </li>
          <li>
            <span className="font-bold">Customizable Packages:</span>
            <br />
            <span className="text-base">
              ** Whether you need a one-time removal or regular visits
              throughout the fall, we offer tailored plans to meet your specific
              needs. **
            </span>
          </li>
        </ul>
        <p className="mt-7 text-lg md:mx-12 text-center">
          Let us help you maintain a beautiful, healthy lawn all year long with
          our expert leaf removal services.
        </p>
      </div>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default LeafInfo;
