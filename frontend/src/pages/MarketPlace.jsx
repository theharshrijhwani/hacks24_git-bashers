// Marketplace.jsx

import React from 'react';
import MarketCard from '../components/MarketCard'; // Adjust the import path based on your project structure

const Marketplace = () => {
  // Sample data for demonstration
  const marketplaceData = [
    { id: 1, clientName: 'John Doe', apartment: 'Apartment A', budget: 5000 },
    { id: 2, clientName: 'Jane Smith', apartment: 'Apartment B', budget: 8000 },
    { id: 3, clientName: 'Bob Johnson', apartment: 'Apartment C', budget: 6000 },
  ];

  const sendQuotation = (clientId) => {
    // Add your logic for sending quotation based on the client ID
    console.log(`Quotation sent for client with ID: ${clientId}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Marketplace</h1>
      <div className="space-y-6">
        {marketplaceData.map((item) => (
          <MarketCard
            key={item.id}
            clientName={item.clientName}
            apartment={item.apartment}
            budget={item.budget}
            onSendQuotation={() => sendQuotation(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
