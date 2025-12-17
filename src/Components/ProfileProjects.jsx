import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileProjects = () => {
  const [projects, setProjects] = useState([
    {
      title: "",
      type: "",
      description: "",
      technologies: "",
      role: "",
      teamSize: "",
      duration: "",
      projectUrl: "",
      githubUrl: "",
      achievements: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...projects];
    updated[index][name] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        type: "",
        description: "",
        technologies: "",
        role: "",
        teamSize: "",
        duration: "",
        projectUrl: "",
        githubUrl: "",
        achievements: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
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
          <span>Step 4 of 7</span>
          <span>57% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: "57%" }}
          ></div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
        <p className="text-gray-500">
          Academic and professional projects you've worked on
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm bg-orange-50"
          >
            <h3 className="text-lg font-semibold text-orange-600 mb-4">
              Project {index + 1}
            </h3>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter project title"
                  value={project.title}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Type *
                </label>
                <select
                  name="type"
                  value={project.type}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                >
                  <option value="">Select project type</option>
                  <option>Academic</option>
                  <option>Professional</option>
                  <option>Freelance</option>
                  <option>Research</option>
                  <option>Personal</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                placeholder="Describe what the project does, its purpose, and key features..."
                value={project.description}
                onChange={(e) => handleChange(index, e)}
                rows="4"
                required
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none resize-none"
              ></textarea>
            </div>

            {/* Technologies & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Technologies Used *
                </label>
                <input
                  type="text"
                  name="technologies"
                  placeholder="e.g., React, Node.js, MongoDB, AWS"
                  value={project.technologies}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Role *
                </label>
                <select
                  name="role"
                  value={project.role}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                >
                  <option value="">Select your role</option>
                  <option>Team Leader</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>Designer</option>
                  <option>Tester</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Team Size
                </label>
                <input
                  type="number"
                  name="teamSize"
                  placeholder="Select team size"
                  value={project.teamSize}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g., 3 months, 6 weeks"
                  value={project.duration}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project URL
                </label>
                <input
                  type="url"
                  name="projectUrl"
                  placeholder="https://your-project.com"
                  value={project.projectUrl}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  name="githubUrl"
                  placeholder="https://github.com/username/project"
                  value={project.githubUrl}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

           
          </div>
        ))}

        {/* Add Another Project Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={addProject}
            className="bg-orange-100 text-orange-700 px-6 py-2 rounded-md border border-orange-300 hover:bg-orange-200 transition font-medium"
          >
            + Add Another Project
          </button>
        </div>

        
      </form>
    </div>
  );
};

export default ProfileProjects;
