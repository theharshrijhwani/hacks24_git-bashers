import React from "react";

import profile from "../assets/profile.png";
import ServiceCard from "../components/ServiceCard";
import ApexChart from "../components/Chart";

import data from "../data/services";
import Navbar from "../components/navbar/Navbar";

const ClientDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="role font-bold text-4xl p-4 md:text-5xl">Client</div>
      <div className="m-5 p-5 flex justufy-center bg-gradient-to-r from-indigo-500 rounded-[12px]">
        <div className="w-[40vw]  items-center m-3 shadow-xl rounded-[10px] bg-white">
          <ApexChart />
        </div>
        <div className="flex flex-col items-center justify-center bg-white m-3 shadow-xl rounded-[10px]">
          <div className="font-bold text-2xl">Family Members</div>
          <div className="flex flex-wrap items-center justify-center ">
            <div className="m-4 shadow-xl rounded-[5px]  p-8 bg-white mb-4">
              <h2 className="text-2xl font-bold">Ongoing Projects</h2>
            </div>

            <div className="m-4 shadow-xl rounded-[5px]  p-8 bg-white mb-4">
              <h2 className="text-2xl font-bold">Ongoing Projects</h2>
            </div>

            <div className="m-4 shadow-xl rounded-[5px]  p-8 bg-white mb-4">
              <h2 className="text-2xl font-bold">Ongoing Projects</h2>
            </div>

            <div className="m-4 shadow-xl rounded-[5px] p-8 bg-white mb-4">
              <h2 className="text-2xl font-bold">Ongoing Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-1 flex-col justify-center items-around shadow-2xl rounded-[15px] w-max p-10 m-5">
          <div className="font-bold text-center text-2xl mb-5">
            Current Status
          </div>
          <div className="flex justify-around">
            <div>
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={300}
                height={300}
                className="rounded-[15px]"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={300}
                height={300}
                className="rounded-[15px]"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={300}
                height={300}
                className="rounded-[15px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[300px] h-auto bg-white shadow-2xl items-around justify-around rounded-[15px] p-10 m-5">
          <div className="font-bold text-2xl p-1 py-5 rounded-[10px] shadow-xl">Budget: <span className="bg-black text-white p-1 rounded-[10px]">$100000</span></div>
          <div className="font-bold text-2xl p-1 py-5 rounded-[10px] shadow-xl">Expense: <span className="bg-black text-white p-1 rounded-[10px]">$100000</span></div>
        </div>
      </div>

      <div className="services-area flex flex-wrap gap-5 p-10 items-center justify-center mt-1 md:gap-[8rem] md:mt-5 shadow-3xl border-solid border-black border-2 rounded-[15px] w-[90vw] m-auto">
        {data.services_data.map((service, idx) => (
          <ServiceCard name={service.name} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
