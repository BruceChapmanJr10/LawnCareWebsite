import React from "react";
import FormButton from "../items/FormButton";
import PlantingImg from "../assets/planting.jpg";

const PlantingInfo = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={PlantingImg}
        alt="Planting Image"
        className="mt-2 mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
                    transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        Professional{" "}
        <span className="text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Planting{" "}
        </span>
        Services
      </h1>
      <div className="flex flex-col px-5 text-left space-y-6">
        <h3 className="mt-4 text-xl font-bold mx-auto text-gray-300">
          At Perfection Lawns LLC, we understand the importance of a
          well-planted garden in enhancing the beauty and value of your
          property. Whether you're looking to create a vibrant flower bed,
          install hedges for privacy, or design a functional vegetable garden,
          our expert team is here to help. We specialize in tailored planting
          services that meet the specific needs of your space, ensuring your
          landscape looks its absolute best.
        </h3>
        <h4 className="mt-4 text-xl font-bold mx-auto text-gray-300">
          Our Planting Services Include:
        </h4>
        <ul className="text-lg list-disc marker:text-green-800 mx-auto text-left pl-5 space-y-5">
          <li>Garden Design & Consultation </li>
          <li>Plant Selection </li>
          <li>Professional Planting & Installation</li>
          <li>Seasonal Planting</li>
          <li>Ongoing Care and Maintenance</li>
        </ul>

        <h3 className="pt-5 text-xl text-gray-300 mx-auto">
          Get Started Today!
        </h3>
        <p className="mt-7 text-lg md:mx-12 text-center">
          Whether you're looking to enhance your garden with new plantings or
          need help designing a completely new landscape, Perfection Lawns LLC
          is here to turn your vision into reality. Contact us today for a
          consultation, and let’s create the perfect outdoor space together!
        </p>
      </div>
      <div className="mt-8 space-x-4 flex flex-row justify-center">
        <FormButton text="Request Quote" />
      </div>
    </div>
  );
};

export default PlantingInfo;
