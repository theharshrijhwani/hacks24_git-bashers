import React from "react";

import { client_history } from "../data/clientHist.js";

import HorizontalCard from "../components/OngoingCard.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

const HistCard = ({ client }) => (
  <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg m-4 max-w-md w-full">
    <div className="p-6 flex flex-col justify-center items-center">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {client.project_name}
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
            {client.type_of_apartment}
          </p>
        </div>
        <div className="w-1/2 px-2 mb-2">
          <p className="text-gray-600">
            <span className="font-semibold">
              Style:
              <br />
            </span>{" "}
            {client.preferred_style}
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
            {client.include_furniture ? "Yes" : "No"}
          </p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">
        Requirements: <br />
        <ul className="list-disc">
          {client.requirements.map((req) => (
            <li>{req}</li>
          ))}
        </ul>
      </p>
      <ProgressBar progress={60} />
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Remove
      </button>
    </div>
  </div>
);

const ClientHistory = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {client_history.map((client) => (
        <HistCard client={client} />
      ))}
    </div>
  );
};

export default ClientHistory;
