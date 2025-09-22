// import React from "react";

// const RitualRetreatComponent = () => {
//   return (
//     <div className="bg-gray-100 py-16">
//       {/* Desktop Layout */}
//       <div className="hidden md:block">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="font-rasputin text-[24px] lg:text-[40px] font-light text-[#C36A6A] mb-6">
//               A Ritual designed for retreat
//             </h2>
//             <p className="font-helixa text-[#242424] text-[16px] lg:text-[20px] leading-relaxed max-w-4xl mx-auto">
//               Choose your perfect home, with Super-sized layouts with thoughtful
//               planning. Experience premium floor heights, open-to-sky decks, and
//               exclusive corner residences.
//             </p>
//           </div>

//           {/* Desktop Table Layout */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden max-w-5xl mx-auto">
//             {/* Header Tabs */}
//             <div className="grid grid-cols-3">
//               <div className="bg-gray-100"></div>
//               <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
//                 <span className="text-xl font-medium">03 BHK</span>
//               </div>
//               <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
//                 <span className="text-xl font-medium">04 BHK</span>
//               </div>
//             </div>

//             {/* Table Content */}
//             <div className="font-helixa text-[#242424] text-[16px] bg-white divide-y divide-gray-200">
//               {/* Floor to Ceiling Height */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Floor-to-Ceiling Height
//                 </div>
//                 <div className="text-gray-800">
//                   ~3.4 m (Premium spacious height)
//                 </div>
//                 <div className="text-gray-800">
//                   ~3.4 m (Premium spacious height)
//                 </div>
//               </div>

//               {/* Residences per Floor */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Residences per Floor
//                 </div>
//                 <div className="text-gray-800">04</div>
//                 <div className="text-gray-800">04</div>
//               </div>

//               {/* Privacy Factor */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">Privacy Factor</div>
//                 <div className="text-gray-800">Tower gaps of 200 ft</div>
//                 <div className="text-gray-800">Tower gaps of 200 ft</div>
//               </div>

//               {/* Balcony / Deck */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">Balcony / Deck</div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium sky deck
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium sky deck
//                 </div>
//               </div>

//               {/* Luxury Detailing */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Luxury Detailing
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium luxury finishes
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium luxury finishes
//                 </div>
//               </div>

//               {/* Carpet Area */}
//               <div className="grid grid-cols-3 py-6 px-8 border-b-0">
//                 <div className="text-gray-400 font-normal">Carpet Area</div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   1456 - 1567 sq ft
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   1838 - 1956 sq ft
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Download Floor Plans
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//             <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Request Cost Sheet
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-light text-red-400 mb-4">
//               A Ritual designed for retreat
//             </h2>
//             <p className="text-gray-700 leading-relaxed text-center">
//               Choose your perfect home, with Super-sized layouts with thoughtful
//               planning. Experience premium floor heights, open-to-sky decks, and
//               exclusive corner residences.
//             </p>
//           </div>

//           {/* Mobile Card Layout - Only 03 BHK */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             {/* Header */}
//             <div className="bg-red-400 text-white text-center py-4">
//               <span className="text-xl font-medium">03 BHK</span>
//             </div>

//             {/* Content */}
//             <div className="divide-y divide-gray-200">
//               <div className="p-4 flex justify-between items-center">
//                 <span className="text-gray-400 font-normal text-sm">
//                   Floor-to-Ceiling Height
//                 </span>
//                 <span className="text-gray-800 text-sm text-right">
//                   ~3.4 m (Premium spacious height)
//                 </span>
//               </div>

//               <div className="p-4 flex justify-between items-center">
//                 <span className="text-gray-400 font-normal text-sm">
//                   Residences per Floor
//                 </span>
//                 <span className="text-gray-800 text-sm">04</span>
//               </div>

//               <div className="p-4 flex justify-between items-center">
//                 <span className="text-gray-400 font-normal text-sm">
//                   Privacy Factor
//                 </span>
//                 <span className="text-gray-800 text-sm">
//                   Tower gaps of 200 ft
//                 </span>
//               </div>

//               <div className="p-4 flex justify-between items-center">
//                 <span className="text-gray-400 font-normal text-sm">
//                   Balcony / Deck
//                 </span>
//                 <span
//                   className="text-gray-400 text-sm"
//                   style={{ filter: "blur(2px)" }}
//                 >
//                   Premium sky deck
//                 </span>
//               </div>

//               <div className="p-4 flex justify-between items-center">
//                 <span className="text-gray-400 font-normal text-sm">
//                   Luxury Detailing
//                 </span>
//                 <span
//                   className="text-gray-400 text-sm"
//                   style={{ filter: "blur(2px)" }}
//                 >
//                   Premium luxury finishes
//                 </span>
//               </div>

//               <div className="p-4 flex justify-between items-center">
//                 <span className="text-gray-400 font-normal text-sm">
//                   Carpet Area
//                 </span>
//                 <span
//                   className="text-gray-400 text-sm"
//                   style={{ filter: "blur(2px)" }}
//                 >
//                   1456 - 1567 sq ft
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col gap-3 mt-8">
//             <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Download Floor Plans
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//             <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Request Cost Sheet
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RitualRetreatComponent;


// "use client"

// import React, { useState } from "react";

// const RitualRetreatComponent = () => {
//   const [activeMobileTab, setActiveMobileTab] = useState(0);

//   const apartmentData = [
//     {
//       type: "03 BHK",
//       data: {
//         floorHeight: "~3.4 m (Premium spacious height)",
//         residences: "04",
//         privacy: "Tower gaps of 200 ft",
//         balcony: "Premium sky deck",
//         luxury: "Premium luxury finishes",
//         carpetArea: "1456 - 1567 sq ft"
//       }
//     },
//     {
//       type: "04 BHK",
//       data: {
//         floorHeight: "~3.4 m (Premium spacious height)",
//         residences: "04",
//         privacy: "Tower gaps of 200 ft",
//         balcony: "Premium sky deck",
//         luxury: "Premium luxury finishes",
//         carpetArea: "1838 - 1956 sq ft"
//       }
//     }
//   ];

//   return (
//     <div className="bg-gray-100 py-16">
//       {/* Desktop Layout */}
//       <div className="hidden md:block">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="font-rasputin text-[24px] lg:text-[40px] font-light text-[#C36A6A] mb-6">
//               A Ritual designed for retreat
//             </h2>
//             <p className="font-helixa text-[#242424] text-[16px] lg:text-[20px] leading-relaxed max-w-4xl mx-auto">
//               Choose your perfect home, with Super-sized layouts with thoughtful
//               planning. Experience premium floor heights, open-to-sky decks, and
//               exclusive corner residences.
//             </p>
//           </div>

//           {/* Desktop Table Layout */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden max-w-5xl mx-auto">
//             {/* Header Tabs */}
//             <div className="grid grid-cols-3">
//               <div className="bg-gray-100"></div>
//               <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
//                 <span className="text-xl font-medium">03 BHK</span>
//               </div>
//               <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
//                 <span className="text-xl font-medium">04 BHK</span>
//               </div>
//             </div>

//             {/* Table Content */}
//             <div className="font-helixa text-[#242424] text-[16px] bg-white divide-y divide-gray-200">
//               {/* Floor to Ceiling Height */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Floor-to-Ceiling Height
//                 </div>
//                 <div className="text-gray-800">
//                   ~3.4 m (Premium spacious height)
//                 </div>
//                 <div className="text-gray-800">
//                   ~3.4 m (Premium spacious height)
//                 </div>
//               </div>

//               {/* Residences per Floor */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Residences per Floor
//                 </div>
//                 <div className="text-gray-800">04</div>
//                 <div className="text-gray-800">04</div>
//               </div>

//               {/* Privacy Factor */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">Privacy Factor</div>
//                 <div className="text-gray-800">Tower gaps of 200 ft</div>
//                 <div className="text-gray-800">Tower gaps of 200 ft</div>
//               </div>

//               {/* Balcony / Deck */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">Balcony / Deck</div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium sky deck
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium sky deck
//                 </div>
//               </div>

//               {/* Luxury Detailing */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Luxury Detailing
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium luxury finishes
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium luxury finishes
//                 </div>
//               </div>

//               {/* Carpet Area */}
//               <div className="grid grid-cols-3 py-6 px-8 border-b-0">
//                 <div className="text-gray-400 font-normal">Carpet Area</div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   1456 - 1567 sq ft
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   1838 - 1956 sq ft
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Download Floor Plans
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//             <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Request Cost Sheet
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="font-rasputin text-[24px] font-light text-[#C36A6A] mb-4">
//               A Ritual designed for retreat
//             </h2>
//             <p className="font-helixa text-[#242424] text-[16px] leading-relaxed text-center">
//               Choose your perfect home, with Super-sized layouts with thoughtful
//               planning. Experience premium floor heights, open-to-sky decks, and
//               exclusive corner residences.
//             </p>
//           </div>

//           {/* Mobile Scrollable Tabs Container */}
//           <div className="relative">
//             {/* Scrollable Tab Headers */}
//             <div className="flex overflow-x-auto scrollbar-hide mb-0">
//               {apartmentData.map((apartment, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveMobileTab(index)}
//                   className={`flex-shrink-0 px-8 py-3 font-rasputin text-lg font-medium transition-colors duration-200 ${
//                     activeMobileTab === index
//                       ? "bg-[#C36A6A] text-white"
//                       : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//                   } ${index === 0 ? "rounded-tl-lg" : ""} ${
//                     index === apartmentData.length - 1 ? "rounded-tr-lg" : ""
//                   }`}
//                 >
//                   {apartment.type}
//                 </button>
//               ))}
//             </div>

//             {/* Active Tab Indicator Bar */}
//             <div className="relative h-1 bg-gray-200">
//               <div
//                 className="absolute h-full bg-[#A7423E] transition-transform duration-300"
//                 style={{
//                   width: `${100 / apartmentData.length}%`,
//                   transform: `translateX(${activeMobileTab * 100}%)`,
//                 }}
//               />
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
//               <div className="font-helixa text-[#242424] divide-y divide-gray-200">
//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Floor-to-Ceiling Height
//                   </span>
//                   <span className="text-gray-800 text-sm text-right">
//                     {apartmentData[activeMobileTab].data.floorHeight}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Residences per Floor
//                   </span>
//                   <span className="text-gray-800 text-sm">
//                     {apartmentData[activeMobileTab].data.residences}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Privacy Factor
//                   </span>
//                   <span className="text-gray-800 text-sm">
//                     {apartmentData[activeMobileTab].data.privacy}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Balcony / Deck
//                   </span>
//                   <span
//                     className="text-gray-400 text-sm"
//                     style={{ filter: "blur(2px)" }}
//                   >
//                     {apartmentData[activeMobileTab].data.balcony}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Luxury Detailing
//                   </span>
//                   <span
//                     className="text-gray-400 text-sm"
//                     style={{ filter: "blur(2px)" }}
//                   >
//                     {apartmentData[activeMobileTab].data.luxury}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Carpet Area
//                   </span>
//                   <span
//                     className="text-gray-400 text-sm"
//                     style={{ filter: "blur(2px)" }}
//                   >
//                     {apartmentData[activeMobileTab].data.carpetArea}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col gap-3 mt-8">
//             <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto">
//               Download Floor Plans
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//             <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto">
//               Request Cost Sheet
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RitualRetreatComponent;



// "use client"

// import React, { useState, useRef, useEffect } from "react";

// const RitualRetreatComponent = () => {
//   const [activeMobileTab, setActiveMobileTab] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const apartmentData = [
//     {
//       type: "03 BHK",
//       data: {
//         floorHeight: "~3.4 m (Premium spacious height)",
//         residences: "04",
//         privacy: "Tower gaps of 200 ft",
//         balcony: "Premium sky deck",
//         luxury: "Premium luxury finishes",
//         carpetArea: "1456 - 1567 sq ft"
//       }
//     },
//     {
//       type: "04 BHK",
//       data: {
//         floorHeight: "~3.4 m (Premium spacious height)",
//         residences: "04",
//         privacy: "Tower gaps of 200 ft",
//         balcony: "Premium sky deck",
//         luxury: "Premium luxury finishes",
//         carpetArea: "1838 - 1956 sq ft"
//       }
//     }
//   ];

//   // Handle scroll snap and update active tab
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const containerWidth = container.clientWidth;
//       const newActiveTab = Math.round(scrollLeft / containerWidth);
//       setActiveMobileTab(newActiveTab);
//     };

//     container.addEventListener('scroll', handleScroll);
//     return () => container.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTab = (index) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const containerWidth = container.clientWidth;
//       container.scrollTo({
//         left: index * containerWidth,
//         behavior: 'smooth'
//       });
//     }
//     setActiveMobileTab(index);
//   };

//   return (
//     <div className="bg-gray-100 py-16">
//       {/* Desktop Layout */}
//       <div className="hidden md:block">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="font-rasputin text-[24px] lg:text-[40px] font-light text-[#C36A6A] mb-6">
//               A Ritual designed for retreat
//             </h2>
//             <p className="font-helixa text-[#242424] text-[16px] lg:text-[20px] leading-relaxed max-w-4xl mx-auto">
//               Choose your perfect home, with Super-sized layouts with thoughtful
//               planning. Experience premium floor heights, open-to-sky decks, and
//               exclusive corner residences.
//             </p>
//           </div>

//           {/* Desktop Table Layout */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden max-w-5xl mx-auto">
//             {/* Header Tabs */}
//             <div className="grid grid-cols-3">
//               <div className="bg-gray-100"></div>
//               <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
//                 <span className="text-xl font-medium">03 BHK</span>
//               </div>
//               <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
//                 <span className="text-xl font-medium">04 BHK</span>
//               </div>
//             </div>

//             {/* Table Content */}
//             <div className="font-helixa text-[#242424] text-[16px] bg-white divide-y divide-gray-200">
//               {/* Floor to Ceiling Height */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Floor-to-Ceiling Height
//                 </div>
//                 <div className="text-gray-800">
//                   ~3.4 m (Premium spacious height)
//                 </div>
//                 <div className="text-gray-800">
//                   ~3.4 m (Premium spacious height)
//                 </div>
//               </div>

//               {/* Residences per Floor */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Residences per Floor
//                 </div>
//                 <div className="text-gray-800">04</div>
//                 <div className="text-gray-800">04</div>
//               </div>

//               {/* Privacy Factor */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">Privacy Factor</div>
//                 <div className="text-gray-800">Tower gaps of 200 ft</div>
//                 <div className="text-gray-800">Tower gaps of 200 ft</div>
//               </div>

//               {/* Balcony / Deck */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">Balcony / Deck</div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium sky deck
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium sky deck
//                 </div>
//               </div>

//               {/* Luxury Detailing */}
//               <div className="grid grid-cols-3 py-6 px-8">
//                 <div className="text-gray-400 font-normal">
//                   Luxury Detailing
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium luxury finishes
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   Premium luxury finishes
//                 </div>
//               </div>

//               {/* Carpet Area */}
//               <div className="grid grid-cols-3 py-6 px-8 border-b-0">
//                 <div className="text-gray-400 font-normal">Carpet Area</div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   1456 - 1567 sq ft
//                 </div>
//                 <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
//                   1838 - 1956 sq ft
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Download Floor Plans
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//             <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
//               Request Cost Sheet
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="font-rasputin text-[24px] font-light text-[#C36A6A] mb-4">
//               A Ritual designed for retreat
//             </h2>
//             <p className="font-helixa text-[#242424] text-[16px] leading-relaxed text-center">
//               Choose your perfect home, with Super-sized layouts with thoughtful
//               planning. Experience premium floor heights, open-to-sky decks, and
//               exclusive corner residences.
//             </p>
//           </div>

//           {/* Mobile Horizontal Scroll Tabs */}
//           <div className="relative">
//             {/* Scrollable Tab Headers with snap behavior */}
//             <div 
//               ref={scrollContainerRef}
//               className="flex overflow-x-scroll scrollbar-hide scroll-snap-x-mandatory"
//               style={{
//                 scrollSnapType: 'x mandatory',
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none'
//               }}
//             >
//               {apartmentData.map((apartment, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-full scroll-snap-start"
//                   style={{ scrollSnapAlign: 'start' }}
//                 >
//                   <button
//                     onClick={() => scrollToTab(index)}
//                     className={`w-full py-3 font-rasputin text-lg font-medium transition-colors duration-200 ${
//                       activeMobileTab === index
//                         ? "bg-[#C36A6A] text-white"
//                         : "bg-gray-200 text-gray-600 hover:bg-gray-300"
//                     } rounded-t-lg`}
//                   >
//                     {apartment.type}
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
//               {/* Active Tab Indicator Bar - positioned below tabs */}
//               <div className="relative h-1 bg-gray-200">
//                 <div
//                   className="absolute h-full bg-[#A7423E] transition-transform duration-300"
//                   style={{
//                     width: `${100 / apartmentData.length}%`,
//                     transform: `translateX(${activeMobileTab * 100}%)`,
//                   }}
//                 />
//               </div>

//               <div className="font-helixa text-[#242424] divide-y divide-gray-200">
//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Floor-to-Ceiling Height
//                   </span>
//                   <span className="text-gray-800 text-sm text-right">
//                     {apartmentData[activeMobileTab].data.floorHeight}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Residences per Floor
//                   </span>
//                   <span className="text-gray-800 text-sm">
//                     {apartmentData[activeMobileTab].data.residences}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Privacy Factor
//                   </span>
//                   <span className="text-gray-800 text-sm">
//                     {apartmentData[activeMobileTab].data.privacy}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Balcony / Deck
//                   </span>
//                   <span
//                     className="text-gray-400 text-sm"
//                     style={{ filter: "blur(2px)" }}
//                   >
//                     {apartmentData[activeMobileTab].data.balcony}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Luxury Detailing
//                   </span>
//                   <span
//                     className="text-gray-400 text-sm"
//                     style={{ filter: "blur(2px)" }}
//                   >
//                     {apartmentData[activeMobileTab].data.luxury}
//                   </span>
//                 </div>

//                 <div className="p-4 flex justify-between items-center">
//                   <span className="text-gray-400 font-normal text-sm">
//                     Carpet Area
//                   </span>
//                   <span
//                     className="text-gray-400 text-sm"
//                     style={{ filter: "blur(2px)" }}
//                   >
//                     {apartmentData[activeMobileTab].data.carpetArea}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col gap-3 mt-8">
//             <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto">
//               Download Floor Plans
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//             <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto">
//               Request Cost Sheet
//               <svg
//                 className="w-4 h-4 rotate-[45deg]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 19V5m0 0l-7 7m7-7l7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RitualRetreatComponent;




"use client"

import React, { useState, useRef, useEffect } from "react";

const RitualRetreatComponent = () => {
  const [activeMobileTab, setActiveMobileTab] = useState(0);
  const scrollContainerRef = useRef(null);

  const apartmentData = [
    {
      type: "03 BHK",
      data: {
        floorHeight: "~3.4 m (Premium spacious height)",
        residences: "04",
        privacy: "Tower gaps of 200 ft",
        balcony: "Premium sky deck",
        luxury: "Premium luxury finishes",
        carpetArea: "1456 - 1567 sq ft"
      }
    },
    {
      type: "04 BHK",
      data: {
        floorHeight: "~3.4 m (Premium spacious height)",
        residences: "04",
        privacy: "Tower gaps of 200 ft",
        balcony: "Premium sky deck",
        luxury: "Premium luxury finishes",
        carpetArea: "1838 - 1956 sq ft"
      }
    }
  ];

  // Handle scroll snap and update active tab
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const newActiveTab = Math.round(scrollLeft / containerWidth);
      if (newActiveTab !== activeMobileTab && newActiveTab >= 0 && newActiveTab < apartmentData.length) {
        setActiveMobileTab(newActiveTab);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeMobileTab, apartmentData.length]);

  const scrollToTab = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      container.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      });
    }
    setActiveMobileTab(index);
  };

  return (
    <div className="bg-gray-100 py-16">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-rasputin text-[24px] lg:text-[40px] font-light text-[#C36A6A] mb-6">
              A Ritual designed for retreat
            </h2>
            <p className="font-helixa text-[#242424] text-[16px] lg:text-[20px] leading-relaxed max-w-4xl mx-auto">
              Choose your perfect home, with Super-sized layouts with thoughtful
              planning. Experience premium floor heights, open-to-sky decks, and
              exclusive corner residences.
            </p>
          </div>

          {/* Desktop Table Layout */}
          <div className="bg-gray-100 rounded-lg overflow-hidden max-w-5xl mx-auto">
            {/* Header Tabs */}
            <div className="grid grid-cols-3">
              <div className="bg-gray-100"></div>
              <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
                <span className="text-xl font-medium">03 BHK</span>
              </div>
              <div className="font-rasputin bg-[#C36A6A] text-white text-center py-2 mx-2 rounded-t-[18px]">
                <span className="text-xl font-medium">04 BHK</span>
              </div>
            </div>

            {/* Table Content */}
            <div className="font-helixa text-[#242424] text-[16px] bg-white divide-y divide-gray-200">
              {/* Floor to Ceiling Height */}
              <div className="grid grid-cols-3 py-6 px-8">
                <div className="text-gray-400 font-normal">
                  Floor-to-Ceiling Height
                </div>
                <div className="text-gray-800">
                  ~3.4 m (Premium spacious height)
                </div>
                <div className="text-gray-800">
                  ~3.4 m (Premium spacious height)
                </div>
              </div>

              {/* Residences per Floor */}
              <div className="grid grid-cols-3 py-6 px-8">
                <div className="text-gray-400 font-normal">
                  Residences per Floor
                </div>
                <div className="text-gray-800">04</div>
                <div className="text-gray-800">04</div>
              </div>

              {/* Privacy Factor */}
              <div className="grid grid-cols-3 py-6 px-8">
                <div className="text-gray-400 font-normal">Privacy Factor</div>
                <div className="text-gray-800">Tower gaps of 200 ft</div>
                <div className="text-gray-800">Tower gaps of 200 ft</div>
              </div>

              {/* Balcony / Deck */}
              <div className="grid grid-cols-3 py-6 px-8">
                <div className="text-gray-400 font-normal">Balcony / Deck</div>
                <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
                  Premium sky deck
                </div>
                <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
                  Premium sky deck
                </div>
              </div>

              {/* Luxury Detailing */}
              <div className="grid grid-cols-3 py-6 px-8">
                <div className="text-gray-400 font-normal">
                  Luxury Detailing
                </div>
                <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
                  Premium luxury finishes
                </div>
                <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
                  Premium luxury finishes
                </div>
              </div>

              {/* Carpet Area */}
              <div className="grid grid-cols-3 py-6 px-8 border-b-0">
                <div className="text-gray-400 font-normal">Carpet Area</div>
                <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
                  1456 - 1567 sq ft
                </div>
                <div className="text-gray-400" style={{ filter: "blur(2px)" }}>
                  1838 - 1956 sq ft
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
              Download Floor Plans
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
            <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2">
              Request Cost Sheet
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

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-rasputin text-[24px] font-light text-[#C36A6A] mb-4">
              A Ritual designed for retreat
            </h2>
            <p className="font-helixa text-[#242424] text-[16px] leading-relaxed text-center">
              Choose your perfect home, with Super-sized layouts with thoughtful
              planning. Experience premium floor heights, open-to-sky decks, and
              exclusive corner residences.
            </p>
          </div>

          {/* Mobile Horizontal Scroll Content */}
          <div className="relative">
            {/* Scrollable Content Container - No tab headers */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-scroll scrollbar-hide bg-white rounded-lg shadow-sm"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex">
                {apartmentData.map((apartment, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {/* Tab header inside content */}
                    <div className="bg-[#C36A6A] text-white text-center py-3 font-rasputin text-lg font-medium">
                      {apartment.type}
                    </div>
                    
                    {/* Table content */}
                    <div className="font-helixa text-[#242424] divide-y divide-gray-200">
                      <div className="p-4 flex justify-between items-center">
                        <span className="text-gray-400 font-normal text-sm">
                          Floor-to-Ceiling Height
                        </span>
                        <span className="text-gray-800 text-sm text-right">
                          {apartment.data.floorHeight}
                        </span>
                      </div>

                      <div className="p-4 flex justify-between items-center">
                        <span className="text-gray-400 font-normal text-sm">
                          Residences per Floor
                        </span>
                        <span className="text-gray-800 text-sm">
                          {apartment.data.residences}
                        </span>
                      </div>

                      <div className="p-4 flex justify-between items-center">
                        <span className="text-gray-400 font-normal text-sm">
                          Privacy Factor
                        </span>
                        <span className="text-gray-800 text-sm">
                          {apartment.data.privacy}
                        </span>
                      </div>

                      <div className="p-4 flex justify-between items-center">
                        <span className="text-gray-400 font-normal text-sm">
                          Balcony / Deck
                        </span>
                        <span
                          className="text-gray-400 text-sm"
                          style={{ filter: "blur(2px)" }}
                        >
                          {apartment.data.balcony}
                        </span>
                      </div>

                      <div className="p-4 flex justify-between items-center">
                        <span className="text-gray-400 font-normal text-sm">
                          Luxury Detailing
                        </span>
                        <span
                          className="text-gray-400 text-sm"
                          style={{ filter: "blur(2px)" }}
                        >
                          {apartment.data.luxury}
                        </span>
                      </div>

                      <div className="p-4 flex justify-between items-center border-b-0">
                        <span className="text-gray-400 font-normal text-sm">
                          Carpet Area
                        </span>
                        <span
                          className="text-gray-400 text-sm"
                          style={{ filter: "blur(2px)" }}
                        >
                          {apartment.data.carpetArea}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar - Below the entire table */}
            <div className="mt-2">
              <div className="relative h-1 bg-gray-200 rounded-full">
                <div
                  className="absolute h-full bg-[#A7423E] rounded-full transition-transform duration-300"
                  style={{
                    width: `${100 / apartmentData.length}%`,
                    transform: `translateX(${activeMobileTab * 100}%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-8">
            <button className="w-[161px] h-[32px] bg-[#A7423E] text-white font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#C36A6A] cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto">
              Download Floor Plans
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
            <button className="w-[200px] h-[32px] bg-white border border-[#A7423E] text-[#A7423E] font-host-grotesk text-[12px] py-2 px-2 rounded-md font-medium hover:bg-[#A7423E] hover:text-white cursor-pointer transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto">
              Request Cost Sheet
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
  );
};

export default RitualRetreatComponent;
