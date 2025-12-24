import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const CareerMapping = () => {
  const careerOptions = [
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Job",
      description: "Explore various job opportunities in IT, Non-IT, and Government sectors with comprehensive guidance and resources.",
      route: "/career/job"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Higher Studies",
      description: "Pursue advanced education with M.Tech, MBA, Study Abroad programs, and other postgraduate courses.",
      route: "/career/higher-studies"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Mapping
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your path and let us guide you towards your dream career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {careerOptions.map((option, idx) => (
            <a 
              key={idx}
              href={option.route}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 group block no-underline"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <span className="text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerMapping;
