import React from 'react';

const CartPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Cart Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bag Section */}
          <section className="lg:col-span-2 bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Bag</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="images/image (2).png" 
                  alt="Library Stool Chair"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Library Stool Chair</h3>
                  <p className="text-gray-500">Ashen Steel/Coast Bias</p>
                  <p className="text-gray-500">Size: L</p>
                  <p className="text-gray-500">Quantity: 1</p>
                </div>
                <p className="text-gray-800 font-semibold ml-auto">MRP: $99</p>
              </div>
            </div>

            <div className="border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="images/image (4).png"
                  alt="Library Thool Chair"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Library Thool Chair</h3>
                  <p className="text-gray-500">Ashen Steel/Coast Bias</p>
                  <p className="text-gray-500">Size: M</p>
                  <p className="text-gray-500">Quantity: 1</p>
                </div>
                <p className="text-gray-800 font-semibold ml-auto">MRP: $99</p>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Summary</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between text-gray-700">
                <p>Subtotal</p>
                <p>$198</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
            </div>
            <div className="flex justify-between text-gray-800 font-bold text-lg mb-6">
              <p>Total</p>
              <p>$198</p>
            </div>
            <button className="bg-teal-500 text-white w-full py-3 rounded-md font-bold hover:bg-teal-600">
              Member Checkout
            </button>
          </section>
        </div>
      </main>

     
    </div>
  );
};

export default CartPage;
