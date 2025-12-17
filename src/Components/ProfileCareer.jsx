import React, { useState } from "react";
import { Link } from "react-router-dom";
import HigherStudies from "./HigherStudies";

const ProfileCareer = () => {
  const [formData, setFormData] = useState({
    objective: "",
    preferredIndustries: [],
    preferredRoles: [],
    workPreference: "",
    salary: "",
    locations: [],
    relocate: "",
    technicalSkills: "",
    softSkills: "",
    languages: "",
    certifications: "",
    hobbies: "",
    aspirations: "",
  });

  const industryRoles = {
    Technology: [
      "Software Engineer",
      "Data Scientist",
      "DevOps Engineer",
      "UI/UX Designer",
      "Product Manager",
    ],
    Finance: [
      "Financial Analyst",
      "Investment Banker",
      "Risk Analyst",
      "Accountant",
    ],
    Healthcare: [
      "Medical Researcher",
      "Healthcare Analyst",
      "Pharmacist",
      "Nurse",
    ],
    Education: ["Teacher", "Professor", "Curriculum Developer"],
    Consulting: [
      "Business Consultant",
      "Strategy Analyst",
      "Management Consultant",
    ],
  };

  const allIndustries = Object.keys(industryRoles);

  const locationOptions = [
    "Hyderabad",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Gurgaon",
    "Noida",
    "Remote Work",
    "International",
  ];

  // Generic change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const list = formData[name];
      const updatedList = checked
        ? [...list, value]
        : list.filter((item) => item !== value);

      setFormData({ ...formData, [name]: updatedList });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200 font-[Poppins]">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
        Career Assessment Sheet
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Complete your comprehensive career profile to unlock personalized opportunities and guidance
      </p>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step 5 of 7</span>
          <span>71% Complete</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: "71%" }}
          ></div>
        </div>
      </div>

      {/* Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Career Goals</h2>
        <p className="text-gray-500">Career preferences, skills, and aspirations</p>
      </div>

      <form className="space-y-10">

        {/* Career Objective */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Career Objective *
          </label>
          <textarea
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            rows="4"
            placeholder="Describe your career goals..."
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-400"
          ></textarea>
        </div>

        {/* Industries (first step) */}
        <div>
          <label className="block font-semibold text-gray-700 mb-3">
            Preferred Industries *
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allIndustries.map((industry) => (
              <label
                key={industry}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="preferredIndustries"
                  value={industry}
                  checked={formData.preferredIndustries.includes(industry)}
                  onChange={handleChange}
                  className="text-orange-500 focus:ring-orange-400"
                />
                {industry}
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic Roles Display */}
        {formData.preferredIndustries.length > 0 && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Select Relevant Roles for Chosen Industries
            </h3>

            {formData.preferredIndustries.map((industry) => (
              <div
                key={industry}
                className="border p-6 rounded-xl bg-orange-50"
              >
                <p className="font-semibold text-gray-900 mb-3 text-lg">
                  {industry} Roles
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {industryRoles[industry].map((role) => (
                    <label key={role} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="preferredRoles"
                        value={role}
                        checked={formData.preferredRoles.includes(role)}
                        onChange={handleChange}
                        className="text-orange-500 focus:ring-orange-400"
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Work Preference */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Work Preference *
            </label>
            <select
              name="workPreference"
              value={formData.workPreference}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            >
              <option value="">Select</option>
              <option>On-site</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Salary Expectation
            </label>
            <select
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            >
              <option value="">Select</option>
              <option>₹3 - ₹5 LPA</option>
              <option>₹6 - ₹10 LPA</option>
              <option>₹10 - ₹15 LPA</option>
              <option>₹15 LPA +</option>
            </select>
          </div>
        </div>

        {/* Location Preferences */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Location Preferences
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {locationOptions.map((loc) => (
              <label key={loc} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="locations"
                  value={loc}
                  checked={formData.locations.includes(loc)}
                  onChange={handleChange}
                  className="text-orange-500"
                />
                {loc}
              </label>
            ))}
          </div>
        </div>

        {/* Relocate */}
        <div className="md:w-1/2">
          <label className="block font-semibold text-gray-700 mb-2">
            Willing to Relocate?
          </label>
          <select
            name="relocate"
            value={formData.relocate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3"
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Technical Skills
            </label>
            <textarea
              name="technicalSkills"
              value={formData.technicalSkills}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="List technical skills..."
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Soft Skills
            </label>
            <textarea
              name="softSkills"
              value={formData.softSkills}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Communication, leadership..."
            ></textarea>
          </div>
        </div>

        {/* Languages + Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Languages Known
            </label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              placeholder="English, Hindi..."
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Certifications
            </label>
            <input
              type="text"
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              placeholder="AWS, PMP..."
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Interests & Hobbies
          </label>
          <textarea
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-md p-3"
            placeholder="Your interests..."
          ></textarea>
        </div>

        {/* Aspirations */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Long-term Career Aspirations
          </label>
          <textarea
            name="aspirations"
            value={formData.aspirations}
            onChange={handleChange}
            rows="3"
            placeholder="Where do you see yourself in 5-10 years?"
            className="w-full border border-gray-300 rounded-md p-3"
          ></textarea>
        </div>

        {/* Higher Studies */}
        <HigherStudies />

       
      </form>
    </div>
  );
};

export default ProfileCareer;
