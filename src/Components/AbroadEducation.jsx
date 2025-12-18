import React, { useState } from "react";
import { FileText, BookOpen, MessageSquare, Zap } from "lucide-react";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";

const StudyAbroadPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const actionButtons = [
    { icon: <FileText className="w-4 h-4" />, label: "E-Preparation", route: "/services/e-learning" },
    { icon: <BookOpen className="w-4 h-4" />, label: "E-Material", route: "/services/e-materials" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Career Counselling", route: "/services/career-counseling" },
    { icon: <Zap className="w-4 h-4" />, label: "Crash Course", route: "/services/crash-courses" }
  ];

  const exams = [
    { name: "GRE", description: "Graduate Record Examination for MS programs" },
    { name: "TOEFL", description: "Test of English as a Foreign Language" },
    { name: "IELTS", description: "International English Language Testing System" },
    { name: "GMAT", description: "Graduate Management Admission Test for MBA" }
  ];

  const universities = [
    {
      name: "Massachusetts Institute of Technology (MIT)",
      country: "USA",
      courses: [
        "MS Computer Science",
        "MS Artificial Intelligence",
        "MBA",
        "MS Mechanical Engineering"
      ]
    },
    {
      name: "Stanford University",
      country: "USA",
      courses: [
        "MS Data Science",
        "MS Computer Science",
        "MBA",
        "MS Electrical Engineering"
      ]
    },
    {
      name: "University of Cambridge",
      country: "UK",
      courses: [
        "MS Engineering",
        "MS Mathematics",
        "MBA"
      ]
    },
    {
      name: "University of Oxford",
      country: "UK",
      courses: [
        "MS Computer Science",
        "MBA",
        "MS Public Policy"
      ]
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      courses: [
        "MS Robotics",
        "MS Artificial Intelligence",
        "MS Data Science"
      ]
    },
    {
      name: "National University of Singapore",
      country: "Singapore",
      courses: [
        "MS Computer Science",
        "MS FinTech",
        "MBA"
      ]
    },
    {
      name: "University of Toronto",
      country: "Canada",
      courses: [
        "MS Artificial Intelligence",
        "MS Data Science",
        "MBA"
      ]
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      courses: [
        "MS Information Technology",
        "MS Computer Science",
        "MBA"
      ]
    }
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

        {/* Action Buttons */}
        <ActionButtons buttons={actionButtons} />

        {/* Header */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Abroad Path
          </h1>
          <p className="text-gray-600 text-lg">
            Pursue higher education at world-class universities with expert
            guidance on exams, admissions, and career planning.
          </p>
        </div>

        {/* Exams Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Exams to Prepare
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {exams.map((exam, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {exam.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {exam.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Universities Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Top Universities
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              {universities.map((uni, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleCourses(idx)}
                  className="relative z-10 w-full text-left p-4 bg-gray-50 rounded-lg
                             hover:bg-gray-100 transition border
                             focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {uni.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {uni.country}
                      </p>
                    </div>
                  </div>

                  {activeIndex === idx && (
                    <div className="mt-4 ml-14">
                      <p className="font-semibold text-gray-700 mb-2">
                        Courses Offered
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {uni.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer/>
    </div>
  );
};

export default StudyAbroadPage;
