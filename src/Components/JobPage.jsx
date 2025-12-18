import React from 'react';
import { Code, Building2, Landmark } from 'lucide-react';

const JobPage = () => {
  const jobTypes = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "IT Jobs",
      description: "Software Development, Data Science, Cloud Computing, and more",
      route: "/career/job/it"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Non-IT Jobs",
      description: "Finance, Marketing, HR, Operations, and other sectors",
      route: "/career/job/non-it"
    },
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: "Government Jobs",
      description: "UPSC, SSC, Banking, Railways, and other government exams",
      route: "/career/job/government"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-orange-600 hover:text-orange-700 mb-8 inline-block no-underline">← Back to Home</a>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Career Path</h1>
        <p className="text-gray-600 text-lg mb-12">Select a job category to explore opportunities and resources</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {jobTypes.map((job, idx) => (
            <a 
              key={idx}
              href={job.route}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 group block no-underline"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {job.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <span className="text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPage;