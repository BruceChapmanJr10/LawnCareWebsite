import React from "react";
import LawnImg from "../assets/lawn.webp";
import MulchingImg from "../assets/mulching.webp";
import LeafCleanup from "../assets/leafcleanup.webp";

const HeaderPage = () => {
  return (
    <div className="bg-black text-white text-center py-16 ">
      <div className="mb-7">
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-orange-500">
            Perfection Lawns LLC
          </span>
        </h1>
        <h2 className="mb-6">
          Professional Lawn Care Provider Servicing Winchester, VA and
          Surrounding Areas
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="mb-5">
          <img
            src={LawnImg}
            alt="Mowed Lawn"
            className="mx-auto mb-3 w-48 h-48 rounded-lg object-cover transform
                            transition-transform duration-300 hover:scale-105"
          />
          <h3>Lawn Mowing</h3>
        </div>
        <div className="mb-5">
          <img
            src={MulchingImg}
            alt="Mowed Lawn"
            className="mx-auto mb-3 w-48 h-48 rounded-lg object-cover transform
                            transition-transform duration-300 hover:scale-105"
          />
          <h3>Mulching</h3>
        </div>
        <div className="mb-5">
          <img
            src={LeafCleanup}
            alt="Mowed Lawn"
            className="mx-auto mb-3 w-48 h-48 rounded-lg object-cover transform
                            transition-transform duration-300 hover:scale-105"
          />
          <h3>Leaf Clean-ups</h3>
        </div>
      </div>

      <p className="mt-4 text-lg text-gray-300">
        If you are looking for a professional lawn mowing and landscaping
        company then look no further. We treat each and every customer like
        family, no that does not mean free mows every week, but that does mean
        we treat your yard with respect, care, and listen to what you want done
        to your yard. If you would like to know more please call today or fill
        out a free quote form.
      </p>

      {/* Buttons */}
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-500 to-orange-600 text-white 
                                hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
        >
          Call Today
        </button>
        <button
          className="bg-gradient-to-r from-yellow-500 to-green-500 text-white 
                                hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
        >
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default HeaderPage;
