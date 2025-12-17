import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileProjects from "./ProfileProjects";
import ProfileCareer from "./ProfileCareer";
import ProfileNotifications from "./ProfileNotifications";
import ProfileComplete from "./ProfileComplete";

const TOTAL_STEPS = 7;

export default function Pagination() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ProfileEducation />;
      case 3:
        return <ProfileExperience />;
      case 4:
        return <ProfileProjects />;
      case 5:
        return <ProfileCareer />;
      case 6:
        return <ProfileNotifications />;
      case 7:
        return <ProfileComplete />;
      default:
        return <PersonalInfo />;
    }
  };

  const progressPercent = Math.round((currentStep / TOTAL_STEPS) * 100);

  return (
    <div className="max-w-4xl mx-auto py-8">
      
      {/* STEP CONTENT (TOP) */}
      <div>{renderStep()}</div>

      {/* STEPPER (BOTTOM) */}
      <div className="flex justify-between mt-10 mb-4">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;

          return (
            <div
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`flex-1 mx-1 cursor-pointer p-3 rounded-md text-center text-sm transition
                ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : isCompleted
                    ? "bg-green-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }
              `}
            >
              Step {step}
            </div>
          );
        })}
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

     {/* NAVIGATION BUTTONS */}
<div className="flex justify-between">
  <button
    onClick={() => setCurrentStep((p) => Math.max(p - 1, 1))}
    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition"
  >
    Previous
  </button>

  {currentStep < TOTAL_STEPS ? (
    <button
      onClick={() => setCurrentStep((p) => Math.min(p + 1, TOTAL_STEPS))}
      className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
    >
      Next →
    </button>
  ) : (
    <button
     
      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
    >
      Submit ✔
    </button>
  )}
</div>

    </div>
  );
}
