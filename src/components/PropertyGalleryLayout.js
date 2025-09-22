"use client";
import React, { useState } from 'react';

const PropertyGalleryLayout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    salesExecutive: '',
    selectConfiguration: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Buttons */}
      <div className="absolute top-4 right-4 z-10 flex gap-3">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Download Floor Plans
        </button>
        <button className="border border-red-500 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Request Cost Sheet
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image Gallery */}
        <div className="lg:w-3/5 xl:w-2/3 p-4">
          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-4 h-full">
            {/* Left Column - Small Images */}
            <div className="col-span-12 md:col-span-3 flex md:flex-col gap-4">
              <div className="flex-1">
                <img 
                  src="img1.png" 
                  alt="Property view 1" 
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <img 
                  src="img2.png" 
                  alt="Property view 2" 
                  className="w-full h-48 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Middle Column - Large Images with Text */}
            <div className="col-span-12 md:col-span-6 space-y-4">
              {/* Top Image with Text Overlay */}
              <div className="relative h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="img3.png" 
                  alt="Property bridge view" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h2 className="text-2xl md:text-3xl font-light mb-2">
                      Where Nature doesn't
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-light">
                      knock it simply surrounds
                    </h2>
                  </div>
                </div>
              </div>

              {/* Bottom Large Image */}
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="img1.png" 
                  alt="Pool and amenities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text and Image */}
            <div className="col-span-12 md:col-span-3 space-y-4">
              {/* Text Section */}
              <div className="bg-white p-6 rounded-lg shadow-md h-48 md:h-64 flex flex-col justify-center">
                <h3 className="text-red-400 text-xl md:text-2xl font-light leading-tight">
                  Where Nature doesn't knock it simply surrounds
                </h3>
              </div>
              
              {/* Small Images Stack */}
              <div className="space-y-4">
                <img 
                  src="img2.png" 
                  alt="Property amenity 1" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="img3.png" 
                  alt="Property amenity 2" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="img1.png" 
                  alt="Property amenity 3" 
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-12 gap-4 mt-4">
            {/* Bottom Left Text */}
            <div className="col-span-12 md:col-span-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-red-400 text-xl md:text-2xl font-light">
                Where leisure spans across 50000 ft.
              </h3>
            </div>
            
            {/* Bottom Image */}
            <div className="col-span-12 md:col-span-6">
              <img 
                src="img2.png" 
                alt="Luxury amenities" 
                className="w-full h-48 md:h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Bottom Text Section */}
          <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-gray-800 text-lg font-medium mb-2">Request Call-Back</h4>
          </div>
        </div>

        {/* Right Side - Contact Form and Info */}
        <div className="lg:w-2/5 xl:w-1/3 p-4 lg:p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {/* Small Gallery */}
            <div className="mb-6">
              <h3 className="text-red-400 text-lg font-light mb-4">
                Where Nature doesn't knock it simply surrounds
              </h3>
              <div className="space-y-3">
                <img 
                  src="img1.png" 
                  alt="Gallery 1" 
                  className="w-full h-24 object-cover rounded-lg"
                />
                <img 
                  src="img2.png" 
                  alt="Gallery 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="img3.png" 
                  alt="Gallery 3" 
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <p className="text-red-400 text-sm mt-3">
                Where leisure spans across 50000 ft.
              </p>
            </div>

            {/* Contact Form */}
            <div className="border-t pt-6">
              <h4 className="text-gray-800 text-lg font-medium mb-4">Request Call-Back</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none"
                />
                
                <div className="flex gap-3">
                  <select className="w-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none"
                  />
                </div>
                
                <select
                  name="salesExecutive"
                  value={formData.salesExecutive}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none text-gray-500"
                >
                  <option value="">Sales Executive</option>
                  <option value="executive1">Executive 1</option>
                  <option value="executive2">Executive 2</option>
                </select>
                
                <select
                  name="selectConfiguration"
                  value={formData.selectConfiguration}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none text-gray-500"
                >
                  <option value="">Select Configuration</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                </select>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-medium transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-gray-800 text-lg font-medium mb-3">Location & Contact</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Situated at the prime location offering premium lifestyle amenities, and green concepts. 
              It offers seamless access to everything you need, while preserving the luxury of privacy.
            </p>
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map Area</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGalleryLayout;