import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 bg-gradient-to-r from-orange-50 to-white">
      {/* Left Text */}
      <div className="md:w-1/2 space-y-6">
        <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
          Trusted by 10,000+ Students
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Shape Your <span className="text-orange-600">Career Journey</span> with Expert Guidance
        </h1>
        <p className="text-gray-600">
          From higher studies to dream jobs - get personalized guidance, mock tests, resume templates, and career resources. All for just ₹1 per day.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700">
            Start Your Journey →
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100">
            Learn More
          </button>
        </div>
        {/* Stats */}
        <div className="flex space-x-8 mt-6">
          <div>
            <h3 className="font-bold text-xl">10K+</h3>
            <p className="text-gray-500">Active Students</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">95%</h3>
            <p className="text-gray-500">Success Rate</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">24/7</h3>
            <p className="text-gray-500">Support</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center relative">
        <img
          src='https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg'
          alt="Graduates"
          className="rounded-xl shadow-lg w-[100px"
        />
        <div className="absolute top-6 right-6 bg-white shadow-md px-3 py-1 rounded-full text-sm font-medium text-green-600">
          ● Mock Tests Available
        </div>
        <div className="absolute bottom-6 right-6 bg-white shadow-md px-3 py-1 rounded-full text-sm font-medium text-orange-600">
          Resume Templates
        </div>
      </div>
    </section>
  );
};

export default Hero;
