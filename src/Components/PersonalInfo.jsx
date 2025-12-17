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
            <input
              type="tel"
              name="contactNumber"
              placeholder="+91 9876543210"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Alternative Phone Number
            </label>
            <input
              type="tel"
              name="altPhone"
              placeholder="+91 9876543211"
              value={formData.altPhone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email ID *
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
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
    onChange={handleChange}
    required
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
  >
    <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>

    {/* Union Territories */}
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Delhi">Delhi</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Ladakh">Ladakh</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Puducherry">Puducherry</option>
  </select>
</div>

<div>
  <label className="block text-gray-700 font-semibold mb-2">
    City *
  </label>
  <input
    type="text"
    name="city"
    placeholder="Enter your city"
    value={formData.city}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
  />
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
        </div>

       
      </form>
      
    </div>
  );
};

export default PersonalInfo;
