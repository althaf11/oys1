// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PersonalInfo from "./PersonalInfo";
// import ProfileEducation from "./ProfileEducation";
// import ProfileExperience from "./ProfileExperience";
// import ProfileProjects from "./ProfileProjects";
// import ProfileCareer from "./ProfileCareer";
// import ProfileNotifications from "./ProfileNotifications";
// import ProfileComplete from "./ProfileComplete";
// import Pagination from "./Pagination";

// const Profile = () => {
//   const [step, setStep] = useState(1);

//   // Central form data state for all steps
//   const [formData, setFormData] = useState({
//     personal: {},
//     education: {},
//     experience: {},
//     projects: {},
//     career: {},
//     notifications: {},
//   });

//   const navigate = useNavigate();

//   // Render step based on current step number
//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <PersonalInfo
//             data={formData.personal}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, personal: data }))
//             }
//             onNext={() => setStep(step + 1)}
//           />
//         );
//       case 2:
//         return (
//           <ProfileEducation
//             data={formData.education}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, education: data }))
//             }
//             onNext={() => setStep(step + 1)}
//             onPrevious={() => setStep(step - 1)}
//           />
//         );
//       case 3:
//         return (
//           <ProfileExperience
//             data={formData.experience}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, experience: data }))
//             }
//             onNext={() => setStep(step + 1)}
//             onPrevious={() => setStep(step - 1)}
//           />
//         );
//       case 4:
//         return (
//           <ProfileProjects
//             data={formData.projects}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, projects: data }))
//             }
//             onNext={() => setStep(step + 1)}
//             onPrevious={() => setStep(step - 1)}
//           />
//         );
//       case 5:
//         return (
//           <ProfileCareer
//             data={formData.career}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, career: data }))
//             }
//             onNext={() => setStep(step + 1)}
//             onPrevious={() => setStep(step - 1)}
//           />
//         );
//       case 6:
//         return (
//           <ProfileNotifications
//             data={formData.notifications}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, notifications: data }))
//             }
//             onNext={() => setStep(step + 1)}
//             onPrevious={() => setStep(step - 1)}
//           />
//         );
//       case 7:
//         return (
//           <ProfileComplete
//             formData={formData}
//             onPrevious={() => setStep(step - 1)}
//             onFinish={() => {
//               // Redirect to AdminResume with all collected form data
//               navigate("/admin-resume", { state: { studentData: formData } });
//             }}
//           />
//         );
//       default:
//         return (
//           <PersonalInfo
//             data={formData.personal}
//             setData={(data) =>
//               setFormData((prev) => ({ ...prev, personal: data }))
//             }
//             onNext={() => setStep(step + 1)}
//           />
//         );
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen pb-24">
//       {/* Profile Content */}
//       <div className="max-w-5xl mx-auto p-6">{renderStep()}</div>

//       {/* Optional Sticky Pagination */}
//       {/* <Pagination currentStep={step} totalSteps={7} setStep={setStep} /> */}
//     </div>
//   );
// };

// export default Profile;



import React, { useState } from "react";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "Althaf Khan",
    email: "althaf@gmail.com",
    phone: "9876543210",
    course: "Full Stack Development",
    skills: "HTML, CSS, JavaScript, React",
    experience: "Fresher",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Profile
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="font-semibold">Full Name</label>
          {editMode ? (
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1">{profile.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="font-semibold">Email</label>
          {editMode ? (
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1">{profile.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="font-semibold">Phone</label>
          {editMode ? (
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1">{profile.phone}</p>
          )}
        </div>

        {/* Course */}
        <div className="mb-4">
          <label className="font-semibold">Course</label>
          {editMode ? (
            <input
              name="course"
              value={profile.course}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1">{profile.course}</p>
          )}
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label className="font-semibold">Skills</label>
          {editMode ? (
            <textarea
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1">{profile.skills}</p>
          )}
        </div>

        {/* Experience */}
        <div className="mb-6">
          <label className="font-semibold">Experience</label>
          {editMode ? (
            <input
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1">{profile.experience}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          {editMode ? (
            <button
              onClick={() => setEditMode(false)}
              className="bg-orange-600 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-gray-800 text-white px-6 py-2 rounded"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
