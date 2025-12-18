import React from 'react';
import { Code, Briefcase, Globe, GraduationCap } from 'lucide-react';

const HigherStudiesPage = () => {
  const studyOptions = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "M.Tech",
      description: "Master of Technology in various specializations",
      route: "/career/higher-studies/mtech"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "MBA",
      description: "Master of Business Administration for management careers",
      route: "/career/higher-studies/mba"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Abroad Education",
      description: "Study in top universities around the world",
      route: "/career/higher-studies/abroad"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Other PG Courses",
      description: "M.Sc, M.A, MCA, and other postgraduate programs",
      route: "/career/higher-studies/pg"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block no-underline">← Back to Home</a>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Higher Studies Options</h1>
        <p className="text-gray-600 text-lg mb-12">Advance your education and career with postgraduate programs</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {studyOptions.map((option, idx) => (
            <a 
              key={idx}
              href={option.route}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 group block no-underline"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HigherStudiesPage;