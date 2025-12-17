import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileNotifications = () => {
  const [formData, setFormData] = useState({
    emailNotifications: [],
    emailFrequency: "Weekly Summary",
    smsNotifications: [],
    smsFrequency: "Immediate",
    pushNotifications: [],
    contactMethod: "Email",
    contactTime: "Morning (9 AM - 12 PM)",
    timezone: "IST (India)",
  });

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...formData[category], value]
      : formData[category].filter((item) => item !== value);
    setFormData({ ...formData, [category]: updated });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <span>Step 6 of 7</span>
          <span>86% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: "86%" }}
          ></div>
        </div>
      </div>

      {/* Step Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Notifications
        </h2>
        <p className="text-gray-500">
          Configure your communication and alert preferences
        </p>
      </div>

      {/* Form */}
      <form className="space-y-10">
        {/* Email Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">
            Email Notifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            {["Job Alerts", "Career Tips & Advice", "Company Updates", "Weekly Newsletter"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={item}
                    checked={formData.emailNotifications.includes(item)}
                    onChange={(e) => handleCheckboxChange(e, "emailNotifications")}
                    className="text-orange-500 rounded focus:ring-orange-400"
                  />
                  {item}
                </label>
              )
            )}
          </div>

          <div className="mt-4">
            <label className="block font-semibold text-gray-700 mb-2">
              Email Frequency
            </label>
            <select
              name="emailFrequency"
              value={formData.emailFrequency}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-400 focus:border-orange-400"
            >
              <option>Immediate</option>
              <option>Daily Digest</option>
              <option>Weekly Summary</option>
              <option>Monthly Updates</option>
            </select>
          </div>
        </div>

        {/* SMS Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">
            SMS Notifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            {["Job Alerts", "Interview Reminders", "Urgent Updates"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={formData.smsNotifications.includes(item)}
                  onChange={(e) => handleCheckboxChange(e, "smsNotifications")}
                  className="text-orange-500 rounded focus:ring-orange-400"
                />
                {item}
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label className="block font-semibold text-gray-700 mb-2">
              SMS Frequency
            </label>
            <select
              name="smsFrequency"
              value={formData.smsFrequency}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-400 focus:border-orange-400"
            >
              <option>Immediate</option>
              <option>Daily Summary</option>
              <option>Weekly Summary</option>
            </select>
          </div>
        </div>

        {/* Push Notifications */}
        

        {/* Communication Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">
            Communication Preferences
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-400 focus:border-orange-400"
              >
                <option>Email</option>
                <option>Phone</option>
                <option>SMS</option>
                <option>Push Notification</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Best Time to Contact
              </label>
              <select
                name="contactTime"
                value={formData.contactTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-400 focus:border-orange-400"
              >
                <option>Morning (9 AM - 12 PM)</option>
                <option>Afternoon (12 PM - 4 PM)</option>
                <option>Evening (4 PM - 8 PM)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Timezone
              </label>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-400 focus:border-orange-400"
              >
                <option>IST (India)</option>
                <option>EST (Eastern)</option>
                <option>PST (Pacific)</option>
                <option>GMT (London)</option>
                <option>CET (Europe)</option>
              </select>
            </div>
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default ProfileNotifications;
