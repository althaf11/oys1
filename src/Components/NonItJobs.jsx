import React from 'react';
import { BookOpen, Users, Building2, Briefcase, FileText, Zap, Target } from 'lucide-react';
import ActionButtons from './ActionButtons';
import Footer from './Footer';

const NonITJobsPage = () => {
  const actionButtons = [
    { icon: <BookOpen className="w-4 h-4" />, label: "E-Material", route: "/services/e-materials" },
    { icon: <FileText className="w-4 h-4" />, label: "E-Preparation", route: "/services/e-learning" },
    { icon: <Zap className="w-4 h-4" />, label: "Crash Courses", route: "/services/crash-courses" },
    { icon: <Target className="w-4 h-4" />, label: "E-Learning", route: "/services/e-learning" }
  ];
  
  const courses = [
    { name: "Finance & Accounting", icon: <BookOpen className="w-6 h-6" />, description: "CFA, CA, Financial Analysis" },
    { name: "Marketing", icon: <Users className="w-6 h-6" />, description: "Digital Marketing, Brand Management" },
    { name: "Human Resources", icon: <Users className="w-6 h-6" />, description: "HR Management, Talent Acquisition" },
    { name: "Operations", icon: <Building2 className="w-6 h-6" />, description: "Supply Chain, Project Management" },
    { name: "Sales", icon: <Briefcase className="w-6 h-6" />, description: "Business Development, Key Accounts" }
  ];
  
  const coachingCenters = [
    "Business Skills Academy",
    "Management Training Institute",
    "Professional Development Center",
    "Career Growth Hub",
    "Corporate Training Solutions"
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <a href="/career/job" className="text-orange-600 hover:text-orange-700 mb-6 inline-block no-underline">← Back to Job Categories</a>
        
        <ActionButtons buttons={actionButtons} />
        
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Non-IT Career Path</h1>
          <p className="text-gray-600 text-lg">
            Explore exciting opportunities in Finance, Marketing, HR, Operations, and other business functions. Build expertise in your chosen domain with professional training.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Courses to Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coaching Centers</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="space-y-4">
              {coachingCenters.map((center, idx) => (
                <li key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{center}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NonITJobsPage;