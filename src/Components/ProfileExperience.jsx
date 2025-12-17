import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileExperience = () => {
  const emptyExperience = {
    type: "",
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
    skills: "",
  };

  const [experienceList, setExperienceList] = useState([emptyExperience]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updated = [...experienceList];
    updated[index][name] = type === "checkbox" ? checked : value;

    // Auto-clear end date if "current" is checked
    if (name === "current" && checked) {
      updated[index].endDate = "";
    }

    setExperienceList(updated);
  };

  const addExperience = () => {
    setExperienceList([...experienceList, { ...emptyExperience }]);
  };

  const removeExperience = (index) => {
    const updated = [...experienceList];
    updated.splice(index, 1);
    setExperienceList(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Experience Data Submitted:", experienceList);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
        Career Assessment Sheet
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Complete your comprehensive career profile to unlock personalized
        opportunities and guidance
      </p>

      {/* Progress Info */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step 3 of 7</span>
          <span>43% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: "43%" }}
          ></div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Experience
        </h2>
        <p className="text-gray-500">
          Work experience, internships, and professional roles
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm bg-orange-50 relative"
          >
            {/* Remove Button */}
            {experienceList.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="absolute top-4 right-4 text-red-600 font-semibold text-sm hover:underline"
              >
                Remove
              </button>
            )}

            <h3 className="text-lg font-semibold text-orange-600 mb-4">
              Experience {index + 1}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Experience Type *
                </label>
                <select
                  name="type"
                  value={exp.type}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                >
                  <option value="">Select experience type</option>
                  <option>Internship</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Freelance</option>
                  <option>Volunteer</option>
                </select>
              </div>

              {/* Company */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={exp.company}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Position/Role *
                </label>
                <input
                  type="text"
                  name="position"
                  placeholder="e.g., Software Engineer"
                  value={exp.position}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Location */}
             <div>
  <label className="block text-gray-700 font-semibold mb-2">
    Location
  </label>
  <select
    name="location"
    value={exp.location}
    onChange={(e) => handleChange(index, e)}
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
  >
    <option value="">Select location</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Chennai">Chennai</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Pune">Pune</option>
    <option value="Delhi">Delhi</option>
    <option value="Kolkata">Kolkata</option>
    <option value="Remote">Remote</option>
  </select>
</div>


              {/* Start Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(index, e)}
                  disabled={exp.current}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none disabled:bg-gray-100"
                />
              </div>

              {/* Current Checkbox */}
              <div className="flex items-center mt-6">
                <input
                  type="checkbox"
                  name="current"
                  checked={exp.current}
                  onChange={(e) => handleChange(index, e)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <label className="ml-2 text-gray-700">I currently work here</label>
              </div>
            </div>

            {/* Job Description */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Job Description
              </label>
              <textarea
                name="description"
                placeholder="Describe your key responsibilities and achievements..."
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none resize-none"
              ></textarea>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Skills Used
              </label>
              <input
                type="text"
                name="skills"
                placeholder="e.g., React, Node.js, Python, Leadership"
                value={exp.skills}
                onChange={(e) => handleChange(index, e)}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          </div>
        ))}

        {/* Add More Experience */}
        <div className="text-center">
          <button
            type="button"
            onClick={addExperience}
            className="bg-orange-100 text-orange-700 px-6 py-2 rounded-md border border-orange-300 hover:bg-orange-200 transition font-medium"
          >
            + Add Another Experience
          </button>
        </div>

       
      </form>
    </div>
  );
};

export default ProfileExperience;
