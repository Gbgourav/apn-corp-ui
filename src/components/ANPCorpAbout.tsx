export default function ANPCorpAbout() {
  return (
    <div className="bg-gray-50 p-6 lg:p-16 relative">
      {/* Decorative corner ribbon with gap */}
      <div className="absolute top-0 right-0">
        <div className="w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-red-500"></div>
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-white"></div>
      </div>


      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="order-1 lg:order-2">
            <h1 className="font-rasputin text-[24px] lg:text-[40px] font-light text-[#C36A6A] mb-[24px]">
              About ANP Corp
            </h1>

            <div className="font-helixa opacity-50 space-y-4 lg:space-y-6 text-[#242424] text-[16px] lg:text-[20px] leading-relaxed">
              <p>
                With 29 years of experience and the pride of delivering 26
                completed projects, along with 9 ongoing projects, ANP Corp has
                become synonymous with refined living in the real estate industry. It
                is now known for bringing architectural brilliance to every
                development. Each project by ANP Corp, such as the ANP
                Autograph at Aundh — Ravet BRTS Road, is meticulously crafted
                with careful planning to ensure a home that perfectly aligns with
                your dreams.
              </p>

              <p>
                The primary goal of ANP Corp has always been to provide
                customers with an experience, not just spaces. Their portfolio
                includes retail and residential projects, like the distinctive 4 BHK, 3
                BHK & 2 BHK flats at Aundh — Ravet BRTS Road, as well as
                commercial spaces of top-notch standards that rival the best!
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            {/* Logo */}
            <div className="hidden lg:flex justify-start mb-8">
              <div className="text-left">
                <img
                  src="/logos/bglogo.png"
                  alt="ANP Corp Logo"
                  className="max-w-[200px] h-auto"
                />
              </div>
            </div>


            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Over 25+ Projects Delivered */}
              <div className="font-rasputin text-center lg:text-left border-r border-gray-300 lg:border-r-0 lg:border-b lg:border-gray-300 pb-4 lg:pb-6">
                <div className="font-rasputin text-[56px] font-light text-[#C95F5F] mb-0">
                  Over 25+
                </div>
                <div className="font-helixa text-[#242424] text-[12px] font-medium">
                  Projects Delivered
                </div>
              </div>

              {/* 3500+ Happy Clients */}
              <div className="font-rasputin text-center lg:text-left lg:border-b lg:border-gray-300 pb-4 lg:pb-6">
                <div className="font-rasputin text-[56px] font-light text-[#C95F5F] mb-0">
                  3500+
                </div>
                <div className="font-helixa text-[#242424] text-[12px] font-medium">
                  Happy Clients
                </div>
              </div>

              {/* Over 09+ Projects Ongoing */}
              <div className="font-rasputin text-center lg:text-left border-r border-gray-300 lg:border-r-0 pt-4 lg:pt-6">
                <div className="font-rasputin text-[56px] font-light text-[#C95F5F] mb-0">
                  Over 09+
                </div>
                <div className="font-helixa text-[#242424] text-[12px] font-medium">
                  Projects Ongoing
                </div>
              </div>

              {/* 29 Years in the Industry */}
              <div className="font-rasputin text-center lg:text-left pt-4 lg:pt-6">
                <div className="font-rasputin text-[56px] font-light text-[#C95F5F] mb-0">
                  29 Years
                </div>
                <div className="font-helixa text-[#242424] text-[12px] font-medium">
                  In the Industry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}