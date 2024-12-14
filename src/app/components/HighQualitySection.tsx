const HighQualitySection: React.FC = () => {
    return (
      <section className="bg-white py-12 w-full">
        <div className="px-4 text-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High Quality */}
            <div>
              <svg
                className="w-12 h-12 mx-auto text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold mt-4">High Quality</h3>
              <p className="text-gray-600 mt-2">
                We provide products made with premium materials and craftsmanship.
              </p>
            </div>
  
            {/* Warranty Protection */}
            <div>
              <svg
                className="w-12 h-12 mx-auto text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16v4"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold mt-4">Warranty Protection</h3>
              <p className="text-gray-600 mt-2">
                Enjoy a 2-year warranty on all products for peace of mind.
              </p>
            </div>
  
            {/* 24/7 Support */}
            <div>
              <svg
                className="w-12 h-12 mx-auto text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 10l-2 2m2 2l-2-2m2-2l-2-2m2 2h-6m6 2H13"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 6v12"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
              <p className="text-gray-600 mt-2">
                Our team is available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HighQualitySection;
  