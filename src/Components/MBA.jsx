import React, { useState } from "react";
import { FileText, BookOpen, MessageSquare, Zap } from "lucide-react";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";

const MBAPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const actionButtons = [
    { icon: <FileText className="w-4 h-4" />, label: "E-Preparation", route: "/services/e-learning" },
    { icon: <BookOpen className="w-4 h-4" />, label: "E-Material", route: "/services/e-materials" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Career Counselling", route: "/services/career-counseling" },
    { icon: <Zap className="w-4 h-4" />, label: "Crash Course", route: "/services/crash-courses" }
  ];

  const exams = [
    { name: "CAT", description: "Common Admission Test (IIMs & Top B-Schools)" },
    { name: "XAT", description: "Xavier Aptitude Test" },
    { name: "GMAT", description: "MBA programs in India & Abroad" },
    { name: "CMAT", description: "AICTE-approved MBA colleges" },
    { name: "MAT", description: "Management Aptitude Test" }
  ];

  const colleges = [
    { name: "IIM Ahmedabad", courses: ["MBA in Business Analytics", "MBA in Finance", "MBA in Marketing"] },
    { name: "IIM Bangalore", courses: ["MBA in Strategy", "MBA in Operations", "MBA in Human Resources"] },
    { name: "IIM Calcutta", courses: ["MBA in Finance", "MBA in Marketing", "MBA in IT Management"] },
    { name: "XLRI Jamshedpur", courses: ["MBA in HRM", "MBA in Business Analytics"] },
    { name: "SP Jain Institute of Management", courses: ["MBA in Global Business", "MBA in Entrepreneurship"] },
    { name: "ISB Hyderabad", courses: ["MBA in Leadership", "MBA in Marketing"] },
    { name: "FMS Delhi", courses: ["MBA in Finance", "MBA in Operations"] },
    { name: "NMIMS Mumbai", courses: ["MBA in Supply Chain", "MBA in Business Analytics"] }
  ];

  const toggleCourses = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Back Link */}
        <a
          href="/career/higher-studies"
          className="text-orange-600 hover:text-orange-700 mb-6 inline-block"
        >
          ← Back to Higher Studies
        </a>

        {/* Page Header */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MBA (Master of Business Administration)
          </h1>
          <p className="text-gray-600 text-lg">
            Develop leadership, management, and strategic skills to advance into top corporate and entrepreneurial roles.
          </p>
        </div>

        {/* Action Buttons */}
        <ActionButtons buttons={actionButtons} />

        {/* Exams Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Entrance Exams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {exams.map((exam, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg">{exam.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{exam.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colleges Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top MBA Colleges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {colleges.map((college, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCourses(idx)}
                className="relative w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border focus:outline-none"
              >
                <h4 className="font-semibold text-gray-800">{college.name}</h4>

                {activeIndex === idx && (
                  <div className="mt-4 ml-2">
                    <p className="font-semibold text-gray-700 mb-2">Courses Offered</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {college.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

      </div>
      <Footer/>
    </div>
  );
};

export default MBAPage;
