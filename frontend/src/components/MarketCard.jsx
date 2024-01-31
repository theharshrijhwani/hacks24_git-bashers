import React from 'react';
// import { Button } from 'tailwind-styled-components';

const MarketCard = ({ clientName, apartment, budget }) => {
  const sendQuotation = () => {
    // Add your send quotation logic here
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 flex w-[1200px] justify-around items-center">
      <h2 className="text-2xl font-semibold m-1 text-gray-800">{clientName}</h2>
      <p className="text-gray-600 m-4">{apartment}</p>
      <p className="text-xl font-semibold mb-4 text-gray-800">Budget: <br /><span className='bg-black text-white my-10 p-1 rounded-[5px]'>${budget}</span></p>
      <button
        className="bg-blue-500 hover:bg-blue-600 font-bold text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={sendQuotation}
      >
        Send Quotation
      </button>
    </div>
  );
};

export default MarketCard;