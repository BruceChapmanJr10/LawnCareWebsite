import React from "react";
import ServicesList from "../items/ServicesList";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesList.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg 
                            transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-600 to to-orange-600"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-orange-600">
                {service.title}
              </h3>
              <p className="mt-5 text-gray-300">{service.description}</p>

              <Link
                to={service.page}
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
