export default function ANPPrivadoFooter() {
  return (
    <footer className="bg-slate-700 text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back to top - Desktop only, positioned in top right */}
        <div className="hidden lg:block absolute top-6 right-6">
          <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
            Back to top
          </a>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="text-white text-2xl font-light tracking-wide">
              <span className="font-normal">ANP</span>
              <br className="lg:hidden" />
              <span className="lg:ml-2">PRIVADO</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-2 mb-12 w-fit">
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors block">
              Overview
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors block">
              Location
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors block">
              Amenities
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors block">
              About
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors block">
              Gallery
            </a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors block">
              Rera Details
            </a>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end space-y-8 lg:space-y-0">
            {/* Left: Company Info */}
            <div className="space-y-4">
              <div className="text-sm text-gray-300 space-y-1">
                <div>Official Website of ANP CORP™</div>
                <div>ANP PRIVADO. All Rights Reserved.</div>
              </div>
              
              {/* Footer Links */}
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Disclaimer
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Right: QR Code, RERA Badge and Info */}
            <div className="flex flex-col lg:items-end space-y-4">
              {/* QR and RERA badges */}
              <div className="flex items-center space-x-4">
                {/* QR Code */}
                <div className="w-20 h-20">
                  <img 
                    src="/logos/qr.png" 
                    alt="QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* RERA Badge */}
                <div className="w-20 h-20">
                  <img 
                    src="/logos/mr.png" 
                    alt="MahaRERA Badge" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* RERA info */}
              <div className="text-sm text-gray-300 lg:text-right space-y-1">
                <div>MahaRERA Registration Number: P52100051641</div>
                <div>
                  <a 
                    href="https://maharera.mahaonline.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    https://maharera.mahaonline.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Back to top */}
          <div className="hidden lg:block border-t border-white/10 my-8"></div>
          
        </div>
      </div>
    </footer>
  );
}