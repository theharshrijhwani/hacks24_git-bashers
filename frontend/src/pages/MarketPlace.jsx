// Marketplace.jsx

import React, { useEffect, useState } from "react";
import MarketCard from "../components/MarketCard"; // Adjust the import path based on your project structure
import axios from "axios";

const Marketplace = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/projects/all")
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Sample data for demonstration
  const marketplaceData = [
    {
      id: 1,
      project_name: "John Doe",
      address: "Apartment A",
      budget: 5000,
      client_name: "Harshvardhan Rijhwani",
    },
    {
      id: 2,
      project_name: "Jane Smith",
      address: "address B",
      budget: 8000,
      client_name: "Ishita Hardasmalani",
    },
    {
      id: 3,
      project_name: "Bob Johnson",
      address: "Apartment C",
      budget: 6000,
      client_name: "Ishita Hardasmalani",
    },
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
            project_name={item.project_name}
            apartment={item.apartment}
            budget={item.budget}
            client_name={item.client_name}
            onSendQuotation={() => sendQuotation(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
