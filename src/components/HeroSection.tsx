export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-start">
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 w-full hidden md:block"
        style={{
          height: "calc(100% - 100px)",
          backgroundImage: "url('/images/bannerbg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
      >
      </div>
      
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 w-full h-full block md:hidden"
        style={{
          backgroundImage: "url('/images/mobilebnner.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
      >
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-14 w-full flex items-center h-full">
        <div className="max-w-2xl -mt-16 md:-mt-20">
          <h1 className="font-helixa text-3xl md:text-5xl lg:text-6xl leading-tight text-black mb-8">
            At <span className="font-raflesia text-red-600">Baner's</span> most exclusive address, designed for both
            your Privacy & <span className="font-rafulsion text-red-600">luxury.</span>
          </h1>
        </div>
      </div>        

      {/* Bottom Info Cards - Desktop */}
      <div className="absolute bottom-[100px] left-0 right-0 z-20 hidden md:block transform translate-y-1/2">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-[8px] border border-gray-200/30">
            <div className="px-8 py-6">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="flex items-center space-x-4 gap-[24px]">
                    <img src="/logos/Map.svg" alt="Map" className="w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-raflesia text-[32px] text-[#242424] mb-1">10 Acres</h3>
                    <p className="font-raflesia text-[32px] text-[#242424] mb-1">of Wonders</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center space-x-4 gap-[24px]">
                    <img src="/logos/Buildings.svg" alt="Buildings" className="w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-raflesia text-[32px] text-[#242424] mb-1">09 Meditative</h3>
                    <p className="font-raflesia text-[32px] text-[#242424] mb-1">Towers</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center space-x-4 gap-[24px]">
                    <img src="/logos/Flag.svg" alt="Flag" className="w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-raflesia text-[32px] text-[#242424] mb-1">Pan Card Rd,</h3>
                    <p className="font-raflesia text-[32px] text-[#242424] mb-1">Baner, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Cards - Mobile (Vertical Stack) */}
      <div className="absolute bottom-[50px] left-0 right-0 z-20 block md:hidden transform translate-y-1/2">
        <div className="mx-4">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200/30">
            <div className="px-6 py-5">
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="flex items-center space-x-4 gap-[24px]">
                    <img src="/logos/Map.svg" alt="Map" className="w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-raflesia text-[32px] text-[#242424] mb-0.5">10 Acres</h3>
                    <p className="font-raflesia text-[32px] text-[#242424] mb-0.5">of Wonders</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center space-x-4 gap-[24px]">
                    <img src="/logos/Buildings.svg" alt="Buildings" className="w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-raflesia text-[32px] text-[#242424] mb-0.5">09 Meditative</h3>
                    <p className="font-raflesia text-[32px] text-[#242424] mb-0.5">Towers</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center space-x-4 gap-[24px]">
                    <img src="/logos/Flag.svg" alt="Flag" className="w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-raflesia text-[32px] text-[#242424] mb-0.5">Pan Card Rd,</h3>
                    <p className="font-raflesia text-[32px] text-[#242424] mb-0.5">Baner, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}