import React, { useState } from "react";
import { Link } from "react-router-dom";

const PersonalInfo = ( ) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    altPhone: "",
    email: "",
    city: "",
    state: "",
    country: "",
    address: "",
    linkedin: "",
    website: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  

const statesWithCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
  "Uttar Pradesh": ["Lucknow", "Noida", "Kanpur", "Varanasi"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Delhi: ["New Delhi"],
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

      {/* Progress Info */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step 1 of 7</span>
          <span>14% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: "14%" }}
          ></div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Personal Info
        </h2>
        <p className="text-gray-500">Basic personal information</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Photo Upload */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Profile Photo
          </label>
          <div className="flex items-center gap-4">
            {formData.photo ? (
              <img
                src={URL.createObjectURL(formData.photo)}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                📷
              </div>
            )}
            <div>
              <label className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-600 transition">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-1">
                JPG, PNG, or GIF. Max 5MB.
              </p>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name" 
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Gender *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
  <label className="block text-gray-700 font-semibold mb-2">
    Contact Number *
  </label>

  <div className="flex">
    <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-100 text-gray-700">
      +91
    </span>
    <input
      type="tel"
      name="contactNumber"
      placeholder="9876543210"
      value={formData.contactNumber}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10);
        handleChange({
          target: { name: "contactNumber", value },
        });
      }}
      required
      className="w-full border border-gray-300 p-3 rounded-r-md focus:ring-2 focus:ring-orange-400 outline-none"
    />
  </div>
</div>


          <div>
  <label className="block text-gray-700 font-semibold mb-2">
    Alternative Phone Number
  </label>

  <div className="flex">
    <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-100 text-gray-700">
      +91
    </span>
    <input
      type="tel"
      name="altPhone"
      placeholder="9876543211"
      value={formData.altPhone}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10);
        handleChange({
          target: { name: "altPhone", value },
        });
      }}
      className="w-full border border-gray-300 p-3 rounded-r-md focus:ring-2 focus:ring-orange-400 outline-none"
    />
  </div>
</div>
<div>
  <label className="block text-gray-700 font-semibold mb-2">
    Email Address *
  </label>
  <input
    type="email"
    name="email"
    placeholder="you@example.com"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
  />
</div>


         <div>
  <label className="block text-gray-700 font-semibold mb-2">
    Country *
  </label>
  <select
    name="country"
    value={formData.country || "India"}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
  >
    <option value="India">India</option>
    <option value="USA">USA</option>
    <option value="UK">UK</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
  </select>
</div>

<div>
  <label className="block text-gray-700 font-semibold mb-2">
    State *
  </label>

  <select
    name="state"
    value={formData.state}
    onChange={(e) => {
  setFormData((prev) => ({
    ...prev,
    state: e.target.value,
    city: "",
  }));
}}

    required
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
  >
    <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Telangana">Telangana</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Kerala">Kerala</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Delhi">Delhi</option>
  </select>
</div>

 
 
  <div>
  <label className="block text-gray-700 font-semibold mb-2">
    City *
  </label>

  <select
    name="city"
    value={formData.city}
    onChange={handleChange}
    required
    disabled={!formData.state}
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none disabled:bg-gray-100"
  >
    <option value="">
      {formData.state ? "Select City" : "Select State First"}
    </option>

    {statesWithCities[formData.state]?.map((city, index) => (
      <option key={index} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>

</div>


          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Permanent Address *
            </label>
            <textarea
              name="address"
              placeholder="Enter your permanent address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              LinkedIn Profile (Optional)
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Personal Website (Optional)
            </label>
            <input
              type="url"
              name="website"
              placeholder="https://yourwebsite.com"
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
    

       
      </form>
      
    </div>
  );
};

export default PersonalInfo;
