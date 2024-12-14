import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     

      {/* About Section */}
      <main className="container mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-teal-500 text-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
            <p>
              At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
            </p>
            <button className="mt-4 bg-white text-teal-500 px-4 py-2 rounded-md font-bold">
              View Collection
            </button>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="images/image.png"
              alt="Chair"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Brand Highlights Section */}
        <section className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">What Makes Our Brand Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white shadow-sm p-4 rounded-md">
                <div className="text-teal-500 text-3xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Our Popular Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-sm p-4 rounded-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-49 object-cover mb-4 rounded-md"
                />
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h4>
                <p className="text-teal-500 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

     
    </div>
  );
};

const highlights = [
  {
    icon: "🚚",
    title: "Next day as standard",
    description: "Order before 2pm and get your order the next day as standard."
  },
  {
    icon: "🎨",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship."
  },
  {
    icon: "💰",
    title: "Unbeatable prices",
    description: "For our materials and quality you won’t find better prices anywhere."
  },
  {
    icon: "♻️",
    title: "Recycled packaging",
    description: "We use 100% recycled materials to ensure furniture is more manageable."
  }
];

const products = [
  {
    name: "The Poplar suede sofa",
    image: "/images/image (10).png", // Replace with actual image URL
    price: "99.00"
  },
  {
    name: "The Dandy chair",
    image: "images/image (11).png", // Replace with actual image URL
    price: "99.00"
  },
  {
    name: "The Dandy chair",
    image: "images/image (12).png", // Replace with actual image URL
    price: "99.00"
  }
];

export default AboutPage;
