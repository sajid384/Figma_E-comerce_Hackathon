import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const ProductPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    

      {/* Product Section */}
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>
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

               <br />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   {
                     name: "Library Stool Chair",
                     price: "$20",
                     tag: "New",
                     image: "images/image (5).png",
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

               <br />

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
                     image: "images/image (6).png",
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
        
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-300 py-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Or Subscribe To The Newsletter</h2>
        <form className="flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded border border-black"
          >
            SUBMIT
          </button>
        </form>
      </section>

      {/* Instagram Section */}
      <section className="py-8 bg-gray-300">
        <h2 className="text-center text-xl font-semibold mb-6">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
                 {[
                   {
                     name: "Library Stool Chair",
                     price: "$20",
                    
                     image: "images/image (5).png",
                   },
                   {
                     name: "Library Stool Chair",
                     price: "$20",
                     originalPrice: "$30",
                    
                     image: "images/image (7).png",
                   },
                   {
                     name: "Library Stool Chair",
                     price: "$20",
                     image: "images/image (1).png",
                   },
                   {
                     name: "Library Stool Chair",
                     price: "$20",
                     image: "images/image.png",
                   },
                   {
                    name: "Library Stool Chair",
                    price: "$20",
                    originalPrice: "$30",
                   
                    image: "images/image (2).png",
                  },
                  {
                    name: "Library Stool Chair",
                    price: "$20",
                    image: "images/image (6).png",
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
                     
                   </div>
                 ))}
               </div>
       
      </section>

    
    </div>
  );
};

export default ProductPage;
