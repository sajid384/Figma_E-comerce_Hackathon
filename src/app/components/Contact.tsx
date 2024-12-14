import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Contact Us Section */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-8">
          For more information about our products & services, please feel free to drop us <br /> <span>an email. Our staff is always here to help you out.</span>
        </p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
          <div className="mb-6 flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.12 11.41A5 5 0 0012 3a5 5 0 00-4.12 8.41m8.24 0A5.37 5.37 0 0112 13.5a5.37 5.37 0 01-4.12-2.09m8.24 0L21 21m-8.24-7.59l-6.76 6.76"></path></svg>
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-gray-600">299 SE St Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="mb-6 flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-gray-600">Mobile: +1 856-676-6789</p>
                <p className="text-gray-600">Hotline: +1 849-676-6798</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-2 2m10 8h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2m2 6h-2a2 2 0 01-2-2V7a2 2 0 012-2h2"></path></svg>
              <div>
                <h3 className="text-lg font-bold">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 20:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-white shadow-md rounded-md p-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject (optional)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                  rows=4"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>

          
        </div>
      </main>

     
    </div>
  );
};

export default ContactUsPage;
