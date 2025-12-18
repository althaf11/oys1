import React, { useState } from "react";
import { FileText, BookOpen, MessageSquare, Zap } from "lucide-react";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";

const MTechPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const actionButtons = [
    { icon: <FileText className="w-4 h-4" />, label: "E-Preparation", route: "/services/e-learning" },
    { icon: <BookOpen className="w-4 h-4" />, label: "E-Material", route: "/services/e-materials" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Career Counselling", route: "/services/career-counseling" },
    { icon: <Zap className="w-4 h-4" />, label: "Crash Course", route: "/services/crash-courses" }
  ];

  const exams = [
    { name: "GATE", description: "Graduate Aptitude Test in Engineering" },
    { name: "GRE", description: "For international M.Tech programs" },
    { name: "University Entrance Exams", description: "IIT, NIT, IIIT specific exams" }
  ];

  const colleges = [
    { name: "IIT Bombay", courses: ["M.Tech in Computer Science", "M.Tech in Electronics", "M.Tech in Mechanical"] },
    { name: "IIT Delhi", courses: ["M.Tech in Civil", "M.Tech in Electrical", "M.Tech in Computer Science"] },
    { name: "IIT Madras", courses: ["M.Tech in AI", "M.Tech in Robotics", "M.Tech in Data Science"] },
    { name: "IIT Kanpur", courses: ["M.Tech in Electronics", "M.Tech in Mechanical", "M.Tech in Chemical"] },
    { name: "NIT Trichy", courses: ["M.Tech in Civil", "M.Tech in Electrical", "M.Tech in Computer Science"] },
    { name: "NIT Surathkal", courses: ["M.Tech in Mechanical", "M.Tech in Data Science"] },
    { name: "IIIT Hyderabad", courses: ["M.Tech in AI", "M.Tech in Cybersecurity"] },
    { name: "BITS Pilani", courses: ["M.Tech in Software Engineering", "M.Tech in Electronics"] }
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
            M.Tech (Master of Technology)
          </h1>
          <p className="text-gray-600 text-lg">
            Advance your technical expertise and research skills through top engineering institutions.
          </p>
        </div>

        {/* Action Buttons */}
        <ActionButtons buttons={actionButtons} />

        {/* Exams Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Entrance Exams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Colleges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {colleges.map((college, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCourses(idx)}
                className="relative w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border focus:outline-none"
              >
                <h4 className="font-semibold text-gray-800">{college.name}</h4>

                {/* Courses Display */}
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

export default MTechPage;
