export default function AboutSection() {
  return (
    <section id="about" className="pt-[200px] pb-20 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-[24px] lg:text-[40px] font-rasputin font-light mb-8 text-[#C36A6A] leading-tight">
          A Ritual of Grandeur
        </h2>
        <p className="text-[16px] text-[#242424] lg:text-[20px] font-helixa font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          At ANP Privado, grandeur is a lifestyle. A 50,000 sq. ft. clubhouse
          and unique
          <br className="hidden md:block" />
          indulgences inspire awe, creating an address that celebrates elegance.
        </p>

        {/* Tower Information */}
        <div className="text-[16px] lg:text-[20px] text-[#242424] mb-16 font-light tracking-wide">
          TOWERS 01 - 08{" "}
          <span className="text-[#C36A6A]">( 33 RESIDENTIAL FLOORS )</span> |
          TOWERS 09{" "}
          <span className="text-[#C36A6A]">( 34 RESIDENTIAL FLOORS )</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-16 max-w-4xl mx-auto"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-4 sm:px-0">
          {/* Club House */}
          <div className="flex flex-col items-start justify-self-start font-raflesia">
            <img
              src="/logos/Buildings1.svg"
              alt="Buildings"
              className="w-[48px] h-[48px] mb-5 text-[#C36A6A]"
            />
            <div className="mb-3 flex items-baseline">
              <span className="text-[40px] lg:text-[80px] font-light text-[#C36A6A] leading-none">
                50,000
              </span>
              <span className="text-xs font-light text-black ml-1">
                SQ. FT.
              </span>
            </div>
            <p className="text-[20px] lg:text-[40px] font-light text-[#C36A6A] mb-4">
              Club House
            </p>
            <div className="w-6 h-px bg-[#C36A6A] opacity-40"></div>
          </div>

          {/* Tower Gaps */}
          <div className="flex flex-col items-start justify-self-end font-raflesia">
            <img
              src="/logos/Buildings3.svg"
              alt="Buildings"
              className="w-[48px] h-[48px] mb-5 text-[#C36A6A]"
            />
            <div className="mb-3 flex items-baseline">
              <span className="text-[40px] lg:text-[80px] font-light text-[#C36A6A] leading-none">
                200
              </span>
              <span className="text-xs font-light text-black ml-1">FT.</span>
            </div>
            <p className="text-[20px] lg:text-[40px] font-light text-[#C36A6A] mb-4">
              Tower Gaps
            </p>
            <div className="w-6 h-px bg-[#C36A6A] opacity-40"></div>
          </div>

          {/* Rare Amenities */}
          <div className="flex flex-col items-start justify-self-start font-raflesia">
            <img
              src="/logos/twr.svg"
              alt="Buildings"
              className="w-[48px] h-[48px] mb-5 text-[#C36A6A]"
            />

            <div className="mb-3 flex items-baseline">
              <span className="text-[40px] lg:text-[80px] font-light text-[#C36A6A] leading-none">
                65
              </span>
              <span className="text-2xl font-light text-[#C36A6A] ml-1">+</span>
            </div>

            <p className="text-[20px] lg:text-[40px] font-light text-[#C36A6A] mb-4">
              Rare Amenities
            </p>

            <div className="w-6 h-px bg-[#C36A6A] opacity-40"></div>
          </div>

          {/* Open Spaces */}
          <div className="flex flex-col items-start justify-self-end font-raflesia">
            <img
              src="/logos/sun.svg"
              alt="Buildings"
              className="w-[48px] h-[48px] mb-5 text-[#C36A6A]"
            />
            <div className="mb-3">
              <span className="text-[40px] lg:text-[80px] font-light text-[#C36A6A] leading-none">
                80
              </span>
              <span className="text-2xl font-light text-black ml-1">%</span>
            </div>
            <p className="text-[20px] lg:text-[40px] font-light text-[#C36A6A] mb-4">
              Open Spaces
            </p>
            <div className="w-6 h-px bg-[#C36A6A] opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
