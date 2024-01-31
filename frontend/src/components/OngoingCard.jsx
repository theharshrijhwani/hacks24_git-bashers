import React from "react";
import ProgressBar from "./ProgressBar";

const clientData = [
  {
    clientName: "John Doe",
    projectName: "Modern Residence",
    address: "123 Main St, City",
    budget: "$500,000",
    apartmentType: "2 BHK",
    preferredStyle: "Modern",
    deadline: "2022-12-31",
    includeFurniture: true,
    requirements: "Budget: Rs.500,000",
  },
  {
    clientName: "John Smith",
    projectName: "Modern Residence",
    address: "123 Main St, City",
    budget: "$500,000",
    apartmentType: "2 BHK",
    preferredStyle: "Modern",
    deadline: "2022-12-31",
    includeFurniture: true,
    requirements: "Modern Style , Furniture Included",
  },{
    clientName: "Harshad Mehta",
    projectName: "Modern Residence",
    address: "123 Main St, City",
    budget: "$500,000",
    apartmentType: "2 BHK",
    preferredStyle: "Modern",
    deadline: "2022-12-31",
    includeFurniture: true,
    requirements: "Furniture Included , Budget: Rs.500,000, Modern Style",
  }
  // Add more client data as needed
];

const HorizontalCard = ({ client }) => (
  <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg m-4 max-w-md w-full">
    <div className="p-6 flex flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {client.clientName}
        </h2>
        <p className="text-gray-600 mb-2">{client.projectName}</p>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Address:
              <br />
            </span>{" "}
            {client.address}
          </p>
        </div>
        <div className="w-1/4 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Budget:
              <br />
            </span>{" "}
            {client.budget}
          </p>
        </div>
        <div className="w-1/4 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Type:
              <br />
            </span>{" "}
            {client.apartmentType}
          </p>
        </div>
        <div className="w-1/2 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Style:
              <br />
            </span>{" "}
            {client.preferredStyle}
          </p>
        </div>
        <div className="w-1/4 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Deadline:
              <br />
            </span>{" "}
            {client.deadline}
          </p>
        </div>
        <div className="w-1/4 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Furniture:
              <br />
            </span>{" "}
            {client.includeFurniture ? "Yes" : "No"}
          </p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">
        Requirements: <br />
        {client.requirements}
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        View Details
      </button>
    </div>
  </div>
);

export default function ClientList() {
  return (
    <div className="flex flex-wrap justify-center">
      {clientData.map((client, index) => (
        <div className="flex flex-wrap justify-center">
          {/* <ProgressBar key={index} bgcolor={'red'} progress={80} height={20} /> */}
          <HorizontalCard key={index} client={client} />
        </div>
      ))}
    </div>
  );
}
