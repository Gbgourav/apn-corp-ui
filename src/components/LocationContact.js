import React from 'react';

const LocationContact = () => {
  return (
    <div className="bg-gray-100 py-22 px-6 mb-20">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-stretch">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[24px] lg:text-[40px] font-rasputin font-light text-[#C36A6A] mb-6">Location & Contact</h2>
                <p className="font-helixa text-[#242424] opacity-50 text-[16px] lg:text-[20px] leading-relaxed mb-12">
                  Perfectly placed between thriving IT hubs, premium lifestyle avenues, and green escapes, it offers seamless access to everything you need, while preserving the luxury of privacy.
                </p>
              </div>
              
              <div className="font-helixa space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-[#242424] opacity-25 text-[16px] lg:text-[20px] font-medium mb-3 uppercase tracking-wide">Site Address</h3>
                  <p className="text-[#C36A6A] text-[16px] lg:text-[20px] leading-relaxed">
                    Pan Card Club Rd, Baner Gaon,<br />
                    Baner, Pune, Maharashtra 411069
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm font-helixa ">
                  <h3 className="text-[#242424] opacity-25 text-[16px] lg:text-[20px] font-medium mb-3 uppercase tracking-wide">Contact Us</h3>
                  <div className="text-[#C36A6A] text-[16px] lg:text-[20px] font-medium">
                    +91 60094 60095
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map */}
            <div className="relative">
              <div className="bg-gray-200 relative overflow-hidden rounded-lg h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1847874022885!2d73.7729842!3d18.5629806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc1c6d0c7ab%3A0x8c1e9e0b8f7f7f7f!2sPan%20Card%20Club%20Rd%2C%20Baner%20Gaon%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <div>
              <h2 className="text-[24px] lg:text-[40px] font-light text-[#C36A6A] mb-6 font-rasputin">Location & Contact</h2>
              <p className="text-[#242424] leading-relaxed text-base mb-6 font-rasputin">
                Perfectly placed between thriving IT hubs, premium lifestyle avenues, and green escapes, it offers seamless access to everything you need, while preserving the luxury of privacy.
              </p>
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-100 relative overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1847874022885!2d73.7729842!3d18.5629806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc1c6d0c7ab%3A0x8c1e9e0b8f7f7f7f!2sPan%20Card%20Club%20Rd%2C%20Baner%20Gaon%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 font-helixa ">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-[#242424] opacity-25 text-[16px] lg:text-[20px] font-medium mb-3 uppercase tracking-wide">Site Address</h3>
                <p className="text-[#C36A6A] text-[16px] text-[16px] lg:text-[20px] leading-relaxed">
                  Pan Card Club Rd, Baner Gaon,<br />
                  Baner, Pune, Maharashtra 411069
                </p>
              </div>
              
              <div className="font-helixa bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-[#242424] opacity-25 text-[16px] lg:text-[20px] font-medium mb-3 uppercase tracking-wide">Contact Us</h3>
                <p className="text-[#C36A6A] text-[16px] lg:text-[20px] font-medium">
                  +91 60094 60095
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContact;