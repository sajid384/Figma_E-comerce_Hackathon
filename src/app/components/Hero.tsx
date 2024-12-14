import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-8 py-16 bg-gray-100 rounded-lg shadow-md "
      style={{ height: "970px" }}
    >
      {/* Left Section: Text */}
      <div className="flex flex-col justify-center items-start max-w-md text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to Comforty</h1>
        <h2 className="font-inter text-5xl font-bold leading-[66px] text-navyBlue-600 mb-6">
          Best Furniture Collection For Your Interior.
        </h2>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">
          Shop Now
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center md:justify-end items-center">
        <img src="/Product_im.png" alt="Chair" className="w-80 md:w-auto" />
      </div>
    </section>
  );
};

export default Hero;
