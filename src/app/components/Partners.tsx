import React from "react";

const Partners: React.FC = () => {
  const partnerLogos = [
    "zep.png",
    "pen.png",
    "clib.png",
    "xl.png",
    "bur.png",
    "pand.png",
    "moz.png",
  ];

  return (
    <section className="py-4 bg-white shadow">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 justify-items-center">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={`/${logo}`}
              alt={`Partner ${index}`}
              className="w-8 h-10 sm:w-24 sm:h-28 lg:w-36 lg:h-24 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
