import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileProjects from "./ProfileProjects";
import ProfileCareer from "./ProfileCareer";
import ProfileNotifications from "./ProfileNotifications";
import ProfileComplete from "./ProfileComplete";
import Pagination from "./Pagination";

const Profile = () => {
  const [step, setStep] = useState(1);

  // Central form data state for all steps
  const [formData, setFormData] = useState({
    personal: {},
    education: {},
    experience: {},
    projects: {},
    career: {},
    notifications: {},
  });

  const navigate = useNavigate();

  // Render step based on current step number
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            data={formData.personal}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, personal: data }))
            }
            onNext={() => setStep(step + 1)}
          />
        );
      case 2:
        return (
          <ProfileEducation
            data={formData.education}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, education: data }))
            }
            onNext={() => setStep(step + 1)}
            onPrevious={() => setStep(step - 1)}
          />
        );
      case 3:
        return (
          <ProfileExperience
            data={formData.experience}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, experience: data }))
            }
            onNext={() => setStep(step + 1)}
            onPrevious={() => setStep(step - 1)}
          />
        );
      case 4:
        return (
          <ProfileProjects
            data={formData.projects}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, projects: data }))
            }
            onNext={() => setStep(step + 1)}
            onPrevious={() => setStep(step - 1)}
          />
        );
      case 5:
        return (
          <ProfileCareer
            data={formData.career}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, career: data }))
            }
            onNext={() => setStep(step + 1)}
            onPrevious={() => setStep(step - 1)}
          />
        );
      case 6:
        return (
          <ProfileNotifications
            data={formData.notifications}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, notifications: data }))
            }
            onNext={() => setStep(step + 1)}
            onPrevious={() => setStep(step - 1)}
          />
        );
      case 7:
        return (
          <ProfileComplete
            formData={formData}
            onPrevious={() => setStep(step - 1)}
            onFinish={() => {
              // Redirect to AdminResume with all collected form data
              navigate("/admin-resume", { state: { studentData: formData } });
            }}
          />
        );
      default:
        return (
          <PersonalInfo
            data={formData.personal}
            setData={(data) =>
              setFormData((prev) => ({ ...prev, personal: data }))
            }
            onNext={() => setStep(step + 1)}
          />
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Profile Content */}
      <div className="max-w-5xl mx-auto p-6">{renderStep()}</div>

      {/* Optional Sticky Pagination */}
      {/* <Pagination currentStep={step} totalSteps={7} setStep={setStep} /> */}
    </div>
  );
};

export default Profile;
