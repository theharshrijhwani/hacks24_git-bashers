import React from "react";

import profile from "../assets/profile.png";
import ServiceCard from "../components/ServiceCard";

import data from "../data/services";
import ApexChart from "../components/Chart";

const DesignerDashboard = () => {
  return (
    <div>
      <div className="role font-bold text-4xl p-4 md:text-5xl">Designer</div>
      <div className="container m-auto p-5 flex justufy-center">
        <div className="w-[500px] m-5 shadow-xl rounded-[5px]">
          <ApexChart />
        </div>
        <div>
          <div>
            <div className="flex flex-col m-3 shadow-xl rounded-[5px] p-8 w-[500px]">
              <div className="title flex mb-2">
                <h2 className="text-2xl font-bold">Ongoing Projects</h2>
              </div>
              <div className="flex flex-col justify-center">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-area flex flex-wrap gap-5 p-3 items-center justify-center mt-1 w-full md:gap-[8rem] md:mt-5">
        {data.designer_data.map((service, idx) => (
          <ServiceCard name={service.name} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default DesignerDashboard;
