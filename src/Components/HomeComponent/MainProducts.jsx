import React from 'react';
import agri from '../../assets/outdoor.jpg';
import amusement from '../../assets/okplay.jpg';
import graining from '../../assets/parkout.png';
import forklift from '../../assets/school2.jpg';

const MainProducts = () => {
  const products = [
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative  for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen mt-5">
      {/* Major Products Header */}
      <h2 className="text-4xl font-bold mb-8 text-green-500">Major Products</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-xl w-80 border border-green-500"
          >
            <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
              <img 
                src={product.image} 
                alt={product.title} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2 w-full">{product.description}</p>
            </div>
            {/* Button Centered */}
            <div className="flex justify-center p-4">
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600">
                More items...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
