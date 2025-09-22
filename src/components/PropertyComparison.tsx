import React from "react";

const PropertyComparison = () => {
  const features = [
    {
      text: "Where Nature doesn’t knock it simply surrounds",
      image: "/images/img1.png",
      reverse: false, // text left, image right
      fullWidth: false,
    },
    {
      text: "", // no text
      image: "/images/img2.png",
      reverse: false,
      fullWidth: true, // full-width image
    },
    {
      text: "Experience thoughtful living with curated spaces",
      image: "/images/img3.png",
      reverse: true, // text left, image right
      fullWidth: false,
    },
  ];

  return (
    <section className="font-rasputin w-full px-4 md:px-8 lg:px-12 py-10 space-y-16">
      {features.map((item, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto ${
            item.fullWidth
              ? "" // full-width image, no flex
              : `flex flex-col ${
                  item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-6 md:gap-12`
          }`}
        >
          {/* Text + Image (default layout) */}
          {!item.fullWidth && (
            <>
              {/* Text Block */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-[24px] lg:text-[40px] font-light text-[#C36A6A] leading-snug">
                  {item.text}
                </p>
              </div>

              {/* Image Block */}
              <div className="flex-1 w-full rounded-[8px]">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-auto rounded-[8px] shadow-md object-cover"
                />
              </div>
            </>
          )}

          {/* Full-Width Image (for 2nd section) */}
          {item.fullWidth && (
            <img
              src={item.image}
              alt="Property"
              className="w-full h-auto rounded-[8px] shadow-md object-cover"
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default PropertyComparison;
