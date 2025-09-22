
const ElevatedLivingSection = () => {
    return (
      <section className="relative w-full p-4 pb-20">
        {/* Desktop Version */}
        <div className="hidden md:block relative w-full h-[600px] overflow-hidden rounded-[8px]">
          {/* Background Image - Desktop */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/banner2.png')",
            }}
          />
  
          {/* Red ribbon/accent in top right corner */}
          <div className="absolute top-0 right-0">
            <div className="w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-red-500"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-gray-400"></div>
          </div>
  
          {/* Content Container */}
          <div className="relative z-10 h-full">
            {/* Left side - Main heading (positioned at top) */}
            <div className="absolute top-10 left-16 right-1/2 pr-8">
              <h1 className="font-rasputin text-[40px] font-light text-white leading-[1.1] tracking-wide">
                A Ritual of elevated living
              </h1>
            </div>
  
            {/* Right side - Description (positioned at bottom) */}
            <div className="absolute bottom-50 right-16 w-96">
              <div className="border-t border-white/50 pt-6">
                <p className="font-rasputin text-white text-[16px] leading-relaxed font-light">
                  Infused with a ballet of rituals, ANP Privado is designed for
                  those who crave privacy, balance, and thoughtful living...
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Mobile Version */}
        <div className="md:hidden relative w-full h-[600px] overflow-hidden rounded-[8px]">
          {/* Background Image - Mobile */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/banner2_mobile.png')",
            }}
          />
  
          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Top section - Heading and description */}
            <div className="mt-8">
              <h1 className="font-rasputin text-[24px] font-light text-white leading-tight mb-8">
                A Ritual of elevated living
              </h1>
              
              <div className="border-t border-white/50 pt-4 max-w-sm">
                <p className="font-rasputin text-white text-[12px] leading-relaxed font-light">
                  Infused with a ballet of rituals, ANP Privado is designed for those who crave
                  privacy, balance, and thoughtful living...
                </p>
              </div>
            </div>
  
            {/* Bottom spacing for woman figure */}
            <div className="h-32"></div>
          </div>
        </div>
      </section>
    );
  };

  export default ElevatedLivingSection;
