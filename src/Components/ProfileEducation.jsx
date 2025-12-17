import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileEducation = () => {
  const emptyEducation = {
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    grade: "",
    current: false,
  };

  const [educationList, setEducationList] = useState([emptyEducation]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updated = [...educationList];
    updated[index][name] = type === "checkbox" ? checked : value;

    // Auto-clear end date if "current" is checked
    if (name === "current" && checked) {
      updated[index].endDate = "";
    }

    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([...educationList, { ...emptyEducation }]);
  };

  const removeEducation = (index) => {
    const updated = [...educationList];
    updated.splice(index, 1);
    setEducationList(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Education Data:", educationList);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
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
          <span>Step 2 of 7</span>
          <span>29% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: "29%" }}
          ></div>
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
        <p className="text-gray-500">Educational background and qualifications</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm bg-orange-50 relative"
          >
            {/* Remove Button */}
            {educationList.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="absolute top-4 right-4 text-red-600 font-medium text-sm hover:underline"
              >
                Remove
              </button>
            )}

            <h3 className="text-lg font-semibold text-orange-600 mb-4">
              Education {index + 1}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Institution */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Institution Name *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter institution name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Degree */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Degree/Program *
                </label>
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g., Bachelor of Engineering"
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Field of Study */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Field of Study *
                </label>
                <input
                  type="text"
                  name="field"
                  value={edu.field}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g., Computer Science"
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={edu.startDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  End Date *
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={edu.endDate}
                  onChange={(e) => handleChange(index, e)}
                  disabled={edu.current}
                  required={!edu.current}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none disabled:bg-gray-100"
                />
              </div>

              {/* Grade */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Grade/CGPA
                </label>
                <input
                  type="text"
                  name="grade"
                  value={edu.grade}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="e.g., 8.5/10 or 85%"
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Current Checkbox */}
              <div className="flex items-center mt-6">
                <input
                  type="checkbox"
                  name="current"
                  checked={edu.current}
                  onChange={(e) => handleChange(index, e)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <label className="ml-2 text-gray-700">
                  I am currently studying here
                </label>
              </div>
            </div>
          </div>
        ))}

        {/* Add More */}
        <div className="text-center">
          <button
            type="button"
            onClick={addEducation}
            className="bg-orange-100 text-orange-700 px-6 py-2 rounded-md border border-orange-300 hover:bg-orange-200 transition font-medium"
          >
            + Add Another Education
          </button>
        </div>

      
      </form>
    </div>
  );
};

export default ProfileEducation;
