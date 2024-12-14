'use client'; // Make sure this is at the top to mark the component as a Client Component

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <header className="bg-white shadow-md">
      
      {/* Bottom Section: Additional Row */}
      <div className="flex justify-between items-center py-3 px-6 bg-[#272343]">
        {/* Left Section: Language Dropdown */}
        <div className="flex items-center gap-4">
          {/* Add any left content here */}
        </div>

        {/* Center Section: Free Shipping Info */}
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm text-white">FREE SHIPPING ON ALL ORDERS OVER $50</p>
        </div>

        {/* Right Section: FAQs & Need Help */}
        <div className="flex items-center gap-6">
          <select
            id="language"
            className="bg-white text-gray-700 text-sm p-1 rounded"
          >
            <option value="en">Eng</option>
            <option value="fr">Fre</option>
            <option value="es">Span</option>
            <option value="de">Ger</option>
          </select>

          <a href="/pages" className="text-white text-sm hover:underline">
            FAQs
          </a>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.257 3.099c.765-1.36 2.62-1.36 3.385 0l4.665 8.307c.726 1.29-.179 2.908-1.693 2.908H5.285c-1.514 0-2.42-1.618-1.694-2.908l4.666-8.307z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
            </svg>
            <p className="text-sm text-white">Need Help</p>
          </div>
        </div>
      </div>

      {/* Top Section: Logo and Cart */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-300">
        <div className="flex items-center gap-10 ml-20">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 h-10" // Adjusted width for the logo
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border rounded bg-white-600 text-blue hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M16 19a2 2 0 100-4 2 2 0 000 4zM8 19a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <a href="/cart" className="text-white text-sm hover:underline">
            Cart
          </a>
        </button>
      </div>

 {/* Middle Section: Navigation Links */}
<nav className="p-6 py-4 border-t border-gray-200 px-8">
  {/* Mobile Menu Toggle */}
  <div className="sm:hidden flex justify-between items-center">
    <button onClick={handleMenuToggle} className="text-black text-xl">
      ☰
    </button>
  </div>

  {/* Navigation Links and Contact Number */}
  <div className="flex justify-between items-center sm:ml-20">
    <ul
      className={`${
        isMenuOpen ? "block" : "hidden"
      } sm:flex sm:gap-10 sm:items-center`}
    >
      <li>
        <a href="/" className="block py-2 sm:inline hover:text-gray-600">
          Home
        </a>
      </li>
      <li>
        <a href="/shop" className="block py-2 sm:inline hover:text-gray-600">
          Shop
        </a>
      </li>
      <li>
        <a href="/product" className="block py-2 sm:inline hover:text-gray-600">
          Product
        </a>
      </li>
      <li>
        <a href="/pages" className="block py-2 sm:inline hover:text-gray-600">
          Pages
        </a>
      </li>
      <li>
        <a href="/about" className="block py-2 sm:inline hover:text-gray-600">
          About
        </a>
      </li>
    </ul>

    {/* Desktop Contact Number */}
    <div className="hidden sm:block text-gray-800 font-semibold text-sm">
    <a href="/contact" className="text-black text-sm hover:underline">
            Contact Us:
          </a> <span className="font-bold">+1 (800) 123-4567</span>
    </div>
  </div>
</nav>


    </header>
  );
};

export default Navbar;
