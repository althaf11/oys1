import React from "react";
import { FaCalendarAlt, FaLaptopCode, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Events Calendar",
    description: "Stay updated with upcoming events, workshops, and campus activities.",
    icon: <FaCalendarAlt size={28} />,
  },
  {
    title: "Tech Resources",
    description: "Get coding resources, project guides, and IT study materials tailored for students.",
    icon: <FaLaptopCode size={28} />,
  },
  {
    title: "Community Support",
    description: "Join study groups, connect with peers, and learn together with our community.",
    icon: <FaUsers size={28} />,
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our <span className="text-orange-600">Features</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border rounded-2xl shadow-md hover:shadow-lg hover:border-orange-500 transition"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-orange-100 text-orange-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-4 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
