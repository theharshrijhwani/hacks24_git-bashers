import React from "react";

import profile from "../assets/profile.png";
import ServiceCard from "../components/ServiceCard";

import data from "../data/services";
import Navbar from "../components/navbar/Navbar";

const ClientDashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className="role font-bold text-4xl p-4 md:text-5xl">Client</div>
      <div className="services-area flex flex-wrap gap-5 p-3 items-center justify-center mt-1 w-full md:gap-[8rem] md:mt-5">
        {data.services_data.map((service, idx) => (
          <ServiceCard name={service.name} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;