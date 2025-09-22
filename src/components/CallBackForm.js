"use client";

import React, { useState } from 'react';

const CallBackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    configuration: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div
    className="h-[60vh] my-20 md:h-screen bg-cover bg-center bg-gray-300"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/formbanner.png')",
    }}
  >
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-start items-start min-h-screen">
            <div className="w-110 bg-white p-8 shadow-xl ml-8">
              <h2 className="font-host-grotesk text-[40px] text-[#242424] lg:text-[40px] mb-6">Request Call-Back</h2>
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] placeholder-gray-400"
                />
                <div className="flex">
                  <select 
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="px-3 py-4 border border-gray-300 rounded-l-md border-r-0 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] w-20"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="flex-1 px-4 py-4 border border-gray-300 rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] placeholder-gray-400"
                  />
                </div>
                <select 
                  value={formData.configuration}
                  onChange={(e) => handleInputChange('configuration', e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] text-gray-400 appearance-none bg-white"
                >
                  <option value="">Select Configuration</option>
                  <option value="config1">Configuration 1</option>
                  <option value="config2">Configuration 2</option>
                </select>
                <button
                  onClick={handleSubmit}
                  className="w-[78px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                >
                  Submit
                  <svg
                className="w-4 h-4 rotate-[45deg]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19V5m0 0l-7 7m7-7l7 7"
                />
              </svg>


                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="px-4 min-h-screen flex items-start justify-center">
          <div className="w-full max-w-sm bg-white p-6 shadow-xl">
          <h2 className="font-host-grotesk text-[32px] text-[#242424] lg:text-[40px] mb-6">Request Call-Back</h2>
          <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] placeholder-gray-400"
              />
              <div className="flex">
                <select 
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange('countryCode', e.target.value)}
                  className="px-3 py-4 border border-gray-300 rounded-l-md border-r-0 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] w-20"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="flex-1 px-4 py-4 border border-gray-300 rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] placeholder-gray-400"
                />
              </div>
              <select 
                value={formData.configuration}
                onChange={(e) => handleInputChange('configuration', e.target.value)}
                className="w-full px-4 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C36A6A] focus:border-[#C36A6A] text-gray-400 appearance-none bg-white"
              >
                <option value="">Select Configuration</option>
                <option value="config1">Configuration 1</option>
                <option value="config2">Configuration 2</option>
              </select>
              <button
                  onClick={handleSubmit}
                  className="w-[78px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                >
                  Submit
                  <svg
                className="w-4 h-4 rotate-[45deg]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19V5m0 0l-7 7m7-7l7 7"
                />
              </svg>


                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBackForm;