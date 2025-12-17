import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfileComplete = ({ onPrevious, onSubmit }) => {
  const navigate = useNavigate();

  const [consent, setConsent] = useState({
    accurate: false,
    terms: false,
    communications: false,
    share: false,
  });

  // Mapping each section to its respective edit route
  const editRoutes = {
    "Personal Information": "/personalinfo",
    Education: "/profileeducation",
    Experience: "/profileexxperience",
    Projects: "/profileprojects",
    "Career Goals": "/profilecareergoals",
    Notifications: "/profilenotifications",
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setConsent({ ...consent, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(consent).some((v) => !v)) {
      alert("Please agree to all the terms before submitting.");
      return;
    }
    onSubmit();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200 font-[Poppins]">
      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
        Career Assessment Sheet
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Complete your comprehensive career profile to unlock personalized
        opportunities and guidance
      </p>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step 7 of 7</span>
          <span>100% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full" style={{ width: "100%" }}></div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Review & Submit
        </h2>
        <p className="text-gray-500">
          Review your career profile before final submission
        </p>
      </div>

      {/* Profile Summary */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">
          Profile Summary
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <p>Total Sections: <span className="font-semibold text-gray-900">6 Complete</span></p>
          <p>Profile Completeness: <span className="font-semibold text-gray-900">100%</span></p>
          <p>Education Entries: <span className="font-semibold text-gray-900">3</span></p>
          <p>Experience Entries: <span className="font-semibold text-gray-900">2</span></p>
          <p>Projects Listed: <span className="font-semibold text-gray-900">4</span></p>
          <p>Skills Identified: <span className="font-semibold text-gray-900">15+</span></p>
        </div>
      </div>

      {/* Section Review */}
      <div className="space-y-4 mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">
          Section Review
        </h3>

        {[
          { name: "Personal Information", items: "12 items" },
          { name: "Education", items: "3 items" },
          { name: "Experience", items: "2 items" },
          { name: "Projects", items: "4 items" },
          { name: "Career Goals", items: "8 items" },
          { name: "Notifications", items: "5 items" },
        ].map((section, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg hover:shadow transition"
          >
            <div>
              <p className="font-semibold text-gray-800">{section.name}</p>
              <p className="text-sm text-gray-500">{section.items}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600 font-medium">Complete</span>

              <button
                className="bg-orange-100 text-orange-700 px-4 py-1 rounded-md border border-orange-200 hover:bg-orange-200 transition text-sm"
                onClick={() => navigate(editRoutes[section.name])}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Terms & Consent */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">
          Terms & Consent
        </h3>

        <div className="space-y-3 text-gray-700">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="accurate"
              checked={consent.accurate}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
            <span>
              I confirm that all information provided is accurate and up-to-date
              to the best of my knowledge.
            </span>
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="terms"
              checked={consent.terms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-orange-600 underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-orange-600 underline">Privacy Policy</a>.
            </span>
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="communications"
              checked={consent.communications}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
            <span>
              I consent to receive career-related communications and job
              opportunities via email and SMS.
            </span>
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="share"
              checked={consent.share}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
            <span>
              I allow my profile to be shared with potential employers and
              recruiting partners.
            </span>
          </label>
        </div>
      </div>

      {/* Data Usage Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">
          Data Usage Notice
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Your information will be used to provide personalized career
          recommendations, match you with relevant job opportunities, and
          improve our services. We prioritize your privacy and data security.
          You can update or delete your profile at any time.
        </p>
      </div>

      
    </div>
  );
};

export default ProfileComplete;
