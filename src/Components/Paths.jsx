import React from "react";
import { FaBookOpen, FaUserGraduate, FaBriefcase } from "react-icons/fa";

const paths = [
  {
    title: "E-Library",
    description: "Access curated study materials across all branches and prepare for exams effectively.",
    icon: <FaBookOpen size={30} />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Higher Studies",
    description: "Guidance, resources, and materials for students aspiring to pursue higher education.",
    icon: <FaUserGraduate size={30} />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Job Preparation",
    description: "Aptitude, coding, and interview preparation guides to help you crack your dream job.",
    icon: <FaBriefcase size={30} />,
    color: "bg-orange-100 text-orange-600",
  },
];

const Paths = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Choose Your <span className="text-orange-600">Path</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {paths.map((path, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${path.color}`}>
                {path.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">{path.title}</h3>
              <p className="mt-3 text-gray-500">{path.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Paths;
