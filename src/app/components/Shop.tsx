import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Shop: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans">
    

      {/* Main Product Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img height={500} width={500}
              src="images/image (1).png/"
              alt="Library Stool Chair"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Library Stool Chair</h1>
            <p className="text-teal-600 text-lg font-semibold">$20.00 USD</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt erat enim. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-teal-600 text-white px-9 py-3 rounded-md shadow hover:bg-teal-700">
                <FaShoppingCart className="text-white text-2xl cursor-pointer" />
                Add To Cart
            </button>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Featured Products</h2>
            <a href="#" className="text-teal-600 hover:text-gray-600">View all</a>
          </div>
          <br /><br />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                           {[
                             {
                               name: "Library Stool Chair",
                               price: "$20",
                               tag: "New",
                               image: "images/image (8).png",
                             },
                             {
                               name: "Library Stool Chair",
                               price: "$20",
                               originalPrice: "$30",
                               tag: "Sale",
                               image: "images/image.png",
                             },
                             {
                               name: "Library Stool Chair",
                               price: "$20",
                               image: "images/image (6).png",
                             },
                             {
                               name: "Library Stool Chair",
                               price: "$20",
                               image: "images/image (2).png",
                             },
                             {
                                name: "Library Stool Chair",
                                price: "$20",
                                image: "images/image (4).png",
                              },
                           ].map((product, index) => (
                             <div key={index} className="rounded-lg shadow-md bg-white p-4">
                               <div className="relative h-64 mb-4">
                                 <img
                                   src={`/${product.image}`}
                                   alt={product.name}
                                   className="h-full w-full object-cover rounded-lg"
                                 />
                                 
                               </div>
                              
                               <div className="flex justify-between items-center">
                               <p className="text-sm font-semibold mb-2">{product.name}</p>
                                 <p className="text-lg font-bold">{product.price}</p>
                                
                               </div>
                             </div>
                           ))}
                         </div>
        </section>
      </main>

    
    </div>
  );
};

export default Shop;
