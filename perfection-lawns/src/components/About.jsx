import React from "react";
import AboutImage from "../assets/landscape.webp";
import FormButton from "../items/FormButton";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            className="w-72 h-80 rounded object-cover mb-8 md:mb:0"
          />
          <div className="flex-1">
            <p className="mb-8">
              Perfection Lawns LLC is a trusted lawn care provider in
              Winchester, VA and the surrounding areas. Whether you need routine
              lawn mowing service or ongoing lawn care maintenance, we are
              dedicated to providing exceptional care for your property. We are
              a fully licensed and insured lawn care company that treats every
              customer like family. From the first consultation to every service
              visit, you can expect professional, reliable, and friendly
              service. Our commitment to excellence ensures your lawn remains
              healthy, vibrant, and well-maintained year-round. Our services
              include lawn mowing, landscape maintenance, aeration, and more. We
              understand that each lawn is unique, so we tailor our services to
              meet your specific needs. Looking for a lawn care service in
              Winchester that you can trust? We take pride in being the go-to
              choice for local homeowners and businesses. Perfection Lawns LLC
              is the team you can count on that offers affordable and convenient
              solutions that will keep your lawn looking great without the
              hassle.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-between text-center">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              20+
            </h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              1000+
            </h3>
            <p>Lawns Mowed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              100+
            </h3>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="mt-20 space-x-5 flex flex-row justify-center">
          <FormButton text="Request Quote" />
        </div>
      </div>
    </div>
  );
};

export default About;
