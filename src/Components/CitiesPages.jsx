import React from "react";
import { useNavigate } from "react-router-dom";

const cities = [
  "Bangalore",  "Chennai", 
  "Hyderabad", 
];

const CitiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Conference by <span className="text-orange-500">Cities in India</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => navigate(`/conferences/${city.toLowerCase()}`)}
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 rounded-lg shadow-lg hover:scale-105 transition"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitiesPage;
