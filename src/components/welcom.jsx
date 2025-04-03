import React from 'react';

const WelcomeMessage = ({ userName }) => {
  return (
    <div className="bg-gradient-to-r from-[#FF7A00] via-[#FFB700] to-[#FFD700] text-white text-center p-8 rounded-xl shadow-xl transform transition-all hover:scale-105">
      <h1 className="text-3xl font-extrabold mb-4 text-shadow-lg">
        Welcome to Our Shop!
      </h1>
      <p className="text-lg font-medium">
        {userName 
          ? `Hello, ${userName}! Start shopping for the best deals.` 
          : 'Browse through our amazing collection of products and find what you love!'}
      </p>
      <div className="mt-4">
        <button className="bg-white text-[#FF7A00] font-semibold py-2 px-6 rounded-full shadow-lg transform transition-all hover:bg-[#FFB700] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF7A00]">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
