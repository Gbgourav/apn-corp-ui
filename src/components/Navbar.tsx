// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="absolute top-0 w-full z-30 px-12 py-6">
//       <div className="mx-auto flex items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="#">
//             <img src="/logos/ANP_Privado_Logo_White.svg" alt="ANP Privado Logo" className="w-28 h-auto" />
//           </Link>
//         </div>

//         {/* Spacer to push content to right */}
//         <div className="flex-1"></div>

//         {/* Right side content */}
//         <div className="flex items-center space-x-12">
//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <Link href="#overview" className="text-white hover:text-red-600 transition font-host-grotesk text-sm">
//               Overview
//             </Link>
//             <Link href="#amenities" className="text-white hover:text-red-600 transition font-host-grotesk text-sm">
//               Amenities
//             </Link>
//             <Link href="#gallery" className="text-white hover:text-red-600 transition font-host-grotesk text-sm">
//               Gallery
//             </Link>
//             <Link href="#location" className="text-white hover:text-red-600 transition font-host-grotesk text-sm">
//               Location
//             </Link>
//             <Link href="#about" className="text-white hover:text-red-600 transition font-host-grotesk text-sm">
//               About
//             </Link>
//             <Link href="#rera" className="text-white hover:text-red-600 transition font-host-grotesk text-sm">
//               Rera Details
//             </Link>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center space-x-12">
//             <button className="px-5 py-2 border border-gray-400 text-white rounded-lg hover:bg-gray-100 hover:text-black transition font-host-grotesk text-sm">
//               Schedule Site Visit
//             </button>
//             <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-host-grotesk flex items-center text-sm">
//               Enquire Now
//               <span className="ml-2">→</span>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-white ml-4"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div className="w-6 h-6 flex flex-col justify-around">
//             <span className="w-full h-0.5 bg-white"></span>
//             <span className="w-full h-0.5 bg-white"></span>
//             <span className="w-full h-0.5 bg-white"></span>
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden mt-4 pb-4 bg-white/90 backdrop-blur-md rounded-lg mx-6">
//           <div className="px-4 py-2 space-y-3">
//             <Link href="#overview" className="block text-black py-2 hover:text-red-600 font-helixa">Overview</Link>
//             <Link href="#amenities" className="block text-black py-2 hover:text-red-600 font-helixa">Amenities</Link>
//             <Link href="#gallery" className="block text-black py-2 hover:text-red-600 font-helixa">Gallery</Link>
//             <Link href="#location" className="block text-black py-2 hover:text-red-600 font-helixa">Location</Link>
//             <Link href="#about" className="block text-black py-2 hover:text-red-600 font-helixa">About</Link>
//             <Link href="#rera" className="block text-black py-2 hover:text-red-600 font-helixa">Rera Details</Link>
//             <div className="pt-4 space-y-2">
//               <button className="w-full px-4 py-2 border border-gray-400 text-black rounded-lg font-helixa">
//                 Schedule Site Visit
//               </button>
//               <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-helixa">
//                 Enquire Now →
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }





'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 w-full z-30 px-4 lg:px-12 py-6 lg:bg-transparent bg-black">
      <div className="mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="#">
            <img 
              src="/logos/ANP_Privado_Logo_White.svg" 
              alt="ANP Privado Logo" 
              className="w-28 h-auto lg:block hidden" 
            />
            <img 
              src="/logos/whitelogo.svg" 
              alt="ANP Privado Logo" 
              className="w-28 h-auto lg:hidden block" 
            />
          </Link>
        </div>

        {/* Spacer to push content to right */}
        <div className="flex-1"></div>

        {/* Right side content */}
        <div className="flex items-center space-x-12">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="#overview" className="text-white hover:text-[#A7423E] transition font-host-grotesk text-sm">
              Overview
            </Link>
            <Link href="#amenities" className="text-white hover:text-[#A7423E] transition font-host-grotesk text-sm">
              Amenities
            </Link>
            <Link href="#gallery" className="text-white hover:text-[#A7423E] transition font-host-grotesk text-sm">
              Gallery
            </Link>
            <Link href="#location" className="text-white hover:text-[#A7423E] transition font-host-grotesk text-sm">
              Location
            </Link>
            <Link href="#about" className="text-white hover:text-[#A7423E] transition font-host-grotesk text-sm">
              About
            </Link>
            <Link href="#rera" className="text-white hover:text-[#A7423E] transition font-host-grotesk text-sm">
              Rera Details
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-[8px]">
            <button className="font-host-grotesk px-5 py-2 border border-white text-white rounded-lg hover:bg-gray-100 hover:text-black transition font-medium text-[12px] cursor-pointer">
              Schedule Site Visit
            </button>
            <button className="font-host-grotesk px-5 py-2 bg-[#A7423E] text-white rounded-lg hover:bg-red-700 transition-colors duration-500 font-medium flex items-center text-[12px] cursor-pointer">
              Enquire Now
              <span className="ml-1 transition-transform duration-500 rotate-60">↑</span>
            </button>
          </div>    

        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-white ml-4 relative z-50 transition-opacity duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-end space-y-1">
            <span className="block h-0.5 bg-white w-6"></span>
            <span className="block h-0.5 bg-white w-4"></span>
            <span className="block h-0.5 bg-white w-6"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Full Screen */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-800 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with logo and close */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <img src="/logos/whitelogo.svg" alt="ANP Privado Logo" className="w-24 h-auto" />
          <button
            className="text-white hover:text-red-600 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items - Center of screen */}
        <div className="flex flex-col justify-center flex-1 px-4 py-12">
          <div className="space-y-2">
            {[
              { href: '#overview', label: 'Overview' },
              { href: '#amenities', label: 'Amenities' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#location', label: 'Location' },
              { href: '#about', label: 'About' },
              { href: '#rera', label: 'Rera Details' }
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`font-rasputin block text-white py-6 px-4 hover:text-red-600 hover:bg-slate-700/50 transition-all duration-200 text-[24px] rounded-lg transform gap-[40px] ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 80}ms` : '0ms'
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons - Bottom of screen */}
        <div className={`flex p-4 space-y-4 transform transition-all duration-300 gap-[24px] ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          transitionDelay: isOpen ? '400ms' : '0ms'
        }}>
          <button 
            className="h-[32px] px-2 py-1 border border-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-host-grotesk text-[12px]"
            onClick={() => setIsOpen(false)}
          >
            Schedule Site Visit
          </button>
          <button 
            className="h-[32px] px-2 py-1 bg-[#A7423E] text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-host-grotesk flex items-center justify-center text-base"
            onClick={() => setIsOpen(false)}
          >
            Enquire Now
            <span className="ml-1 transition-transform duration-200 rotate-60">↑</span>
          </button>
        </div>
      </div>
    </nav>
  )
}