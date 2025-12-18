import React from 'react';
import { Laptop, Code, Landmark, Globe, Zap, BookOpen, FileText, Target } from 'lucide-react';
import ActionButtons from './ActionButtons';
import Footer from './Footer';

const ITJobsPage = () => {
  const actionButtons = [
    { icon: <BookOpen className="w-4 h-4" />, label: "E-Material", route: "/services/e-materials" },
    { icon: <FileText className="w-4 h-4" />, label: "E-Preparation", route: "/services/e-learning" },
    { icon: <Zap className="w-4 h-4" />, label: "Crash Courses", route: "/services/crash-courses" },
    { icon: <Target className="w-4 h-4" />, label: "Courses", route: "/services/e-learning" }
  ];
  
  const courses = [
    { name: "Web Development", icon: <Laptop className="w-6 h-6" />, description: "Frontend, Backend, Full Stack" },
    { name: "Data Science", icon: <Code className="w-6 h-6" />, description: "Python, R, Machine Learning" },
    { name: "Cyber Security", icon: <Landmark className="w-6 h-6" />, description: "Ethical Hacking, Network Security" },
    { name: "Cloud Computing", icon: <Globe className="w-6 h-6" />, description: "AWS, Azure, Google Cloud" },
    { name: "AI / ML", icon: <Zap className="w-6 h-6" />, description: "Artificial Intelligence, Deep Learning" }
  ];
  
  const coachingCenters = [
    "TechVeda Learning Institute",
    "Code Academy Pro",
    "Digital Skills Hub",
    "IT Training Center",
    "Tech Masters Academy"
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <a href="/career/job" className="text-orange-600 hover:text-orange-700 mb-6 inline-block no-underline">← Back to Job Categories</a>
        
        <ActionButtons buttons={actionButtons} />
        
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Career Path</h1>
          <p className="text-gray-600 text-lg">
            The IT industry offers diverse opportunities in software development, data analytics, cybersecurity, and emerging technologies. Start your journey with the right skills and guidance.
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

export default ITJobsPage;


