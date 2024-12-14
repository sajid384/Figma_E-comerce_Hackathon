import React from 'react';
import { FaTwitter, FaFacebook, FaPinterest, FaYoutube, FaInstagram } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 h-10" // Adjusted width for the logo
          />
            <p className="text-sm">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex space-x-4 mt-4">
  <a href="#" className="text-gray-500 hover:text-gray-800">
    <FaTwitter size={24} />
  </a>
  <a href="#" className="text-gray-500 hover:text-gray-800">
    <FaFacebook size={24} />
  </a>
  <a href="#" className="text-gray-500 hover:text-gray-800">
    <FaPinterest size={24} />
  </a>
  <a href="#" className="text-gray-500 hover:text-gray-800">
    <FaYoutube size={24} />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
    <FaInstagram size={24} />
  </a>
</div>


          </div>

          {/* Category Section */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-4">Category</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Sofa</a></li>
              <li><a href="#" className="hover:underline">Armchair</a></li>
              <li><a href="#" className="hover:underline">Wing Chair</a></li>
              <li><a href="#" className="hover:underline">Desk Chair</a></li>
              <li><a href="#" className="hover:underline">Wooden Chair</a></li>
              <li><a href="#" className="hover:underline">Park Bench</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 flex justify-between items-center text-sm">
          <p>@ 2021 - Blogy - Designed & Developed by <a href="#" className="text-blue-500 hover:underline">Zakirsoft</a></p>
          <div className="flex items-center space-x-2">
            
            <img
            src="/images/image (9).png"
            alt="Logo"
            className="w-43 h-10" // Adjusted width for the logo
          />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
