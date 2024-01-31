import React from "react";

import profile from "../assets/profile.png";
import ServiceCard from "../components/ServiceCard";

import data from "../data/services";
import ApexChart from "../components/Chart";
import Navbar from "../components/navbar/Navbar";

const DesignerDashboard = () => {
  return (
    <>
      <Navbar/>
    <div >
      <div className="role font-bold text-4xl p-4 md:text-5xl">Designer</div>
      <div className="m-5 p-5 flex justufy-center bg-slate-400 rounded-[12px]">
        <div className="w-[60vw]  items-center m-3 shadow-xl rounded-[12px] bg-white">
          <ApexChart />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <div className="flex flex-col m-4 shadow-xl rounded-[12px] p-8 w-[500px] bg-white ">
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
          <div>
            <div className="flex justify-between items-center m-4 shadow-xl rounded-[12px] p-8 w-[500px] bg-white">
              <div className="title flex flex-col items-center">
                <h2 className="text-2xl font-bold m-1">Experience Rating</h2>
                <p>Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="title flex flex-col">
                <h2 className="text-2xl font-bold m-1">Expertise</h2>
                <p>Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-area flex flex-wrap gap-5 p-10 items-center justify-center mt-1 md:gap-[8rem] md:mt-5 shadow-3xl border-solid border-black border-2 rounded-[15px] w-[90vw] m-auto">
        {data.designer_data.map((service, idx) => (
          <ServiceCard name={service.name} icon={service.icon} />
        ))}
      </div>
    </div>
    </>
  );
};

export default DesignerDashboard;
