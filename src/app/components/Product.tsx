import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Product: React.FC = () => {
  return (
    <div className="max-w-full mx-auto px-8 py-16">
      {/* Featured Products Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Library Stool Chair",
              price: "$20",
              tag: "New",
              image: "images/image.png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              originalPrice: "$30",
              tag: "Sale",
              image: "images/image (1).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              image: "images/image (2).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              image: "images/image (3).png",
            },
          ].map((product, index) => (
            <div key={index} className="rounded-lg shadow-md bg-white p-4">
              <div className="relative h-64 mb-4">
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-lg"
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${
                      product.tag === "New" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold mb-2">{product.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{product.price}</p>
                <FaShoppingCart className="text-blue-500 text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Wing Chair",
              count: "3,654 Products",
              image: "images/image (4).png",
            },
            {
              name: "Wooden Chair",
              count: "157 Products",
              image: "images/image (5).png",
            },
            {
              name: "Desk Chair",
              count: "154 Products",
              image: "images/image (6).png",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="relative text-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={`/${category.image}`}
                alt={category.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-70 text-white">
                <p className="text-sm font-semibold">{category.name}</p>
                <p className="text-xs">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  


      <br /><br />

   {/* Explore New and Popular Styles Section */}
<section className="mb-12">

      <h2 className="text-[34px] font-bold flex justify-center items-center relative">
        Explore New and Popular Styles
      </h2>
   

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center">
    {/* Large Image */}
    <div className="md:col-span-2 relative rounded-lg overflow-hidden shadow-md border-4 w-full h-[620px]">
      <img
        src="/images/image (2).png"
        alt="Large Chair"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Two Smaller Columns */}
    <div className="grid grid-rows-2 gap-6">
      {/* First Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md border-4 w-full h-[300px]">
        <img
          src="/images/image (3).png"
          alt="Chair 1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md border-4 w-full h-[300px]">
        <img
          src="/images/image (7).png"
          alt="Chair 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* New Column with Two Smaller Images */}
    <div className="grid grid-rows-2 gap-6">
      {/* First Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md border-4 w-full h-[300px]">
        <img
          src="/images/image.png"
          alt="Chair 3"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md border-4 w-full h-[300px]">
        <img
          src="/images/image.png"
          alt="Chair 4"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>



  {/* Our Products Section */}
  <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Library Stool Chair",
              price: "$20",
              tag: "New",
              image: "images/image.png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              originalPrice: "$30",
              tag: "Sale",
              image: "images/image (1).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              image: "images/image (2).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              image: "images/image (3).png",
            },
          ].map((product, index) => (
            <div key={index} className="rounded-lg shadow-md bg-white p-4">
              <div className="relative h-64 mb-4">
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-lg"
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${
                      product.tag === "New" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold mb-2">{product.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{product.price}</p>
                <FaShoppingCart className="text-blue-500 text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        <br /><br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Library Stool Chair",
              price: "$20",
              tag: "New",
              image: "images/image (4).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              originalPrice: "$30",
              tag: "Sale",
              image: "images/image (7).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              image: "images/image (8).png",
            },
            {
              name: "Library Stool Chair",
              price: "$20",
              image: "images/image.png",
            },
          ].map((product, index) => (
            <div key={index} className="rounded-lg shadow-md bg-white p-4">
              <div className="relative h-64 mb-4">
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-lg"
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${
                      product.tag === "New" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold mb-2">{product.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{product.price}</p>
                <FaShoppingCart className="text-blue-500 text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Product;
