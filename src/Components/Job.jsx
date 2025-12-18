import React from "react";
import { Laptop, Users, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const JobCategories = () => {
  const categories = [
    {
      title: "IT Jobs",
      icon: <Laptop className="w-10 h-10" />,
      route: "/career/job/IT",
      color: "orange",
    },
    {
      title: "Non-IT Jobs",
      icon: <Users className="w-10 h-10" />,
      route: "/career/job/NonIT",
      color: "orange",
    },
    {
      title: "Government Jobs",
      icon: <Landmark className="w-10 h-10" />,
      route: "/career/job/gov",
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Choose Your Job Career Path
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={cat.route}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center"
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-${cat.color}-100 text-${cat.color}-600`}
            >
              {cat.icon}
            </div>
            <h2 className="text-2xl font-bold">{cat.title}</h2>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default JobCategories;
