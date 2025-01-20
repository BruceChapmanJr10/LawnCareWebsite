import React from "react";

// Services offered
const services = [
  {
    id: 1,
    title: "Lawn Mowing",
    description: "Mowing lawns giving perfect stripes",
  },
  {
    id: 2,
    title: "Leaf Clean-up",
    description: "Cleaning leaves off your yard making it look beautiful again",
  },
  {
    id: 3,
    title: "Landscape Maintenance",
    description: "Keep your landscape looking perfect year round",
  },
  {
    id: 4,
    title: "Planting",
    description: "Panting the perfect flowers to make your garden beautiful",
  },
  {
    id: 5,
    title: "Mulching",
    description:
      "Putting fresh mulch in your gardens beds to keep them healthy and beautiful",
  },
  {
    id: 6,
    title: "Spring Clean-ups",
    description: "Come into spring ready to impress the neighborhood",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

        {/* Add Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-r from-gray-900 to-gray-700 px-6 pb-6 rounded-lg hover:shadow-lg 
                            transform transition-transform duration-300 hover:scale-105 "
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

              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
