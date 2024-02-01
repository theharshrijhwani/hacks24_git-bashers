import React, { useState } from "react";

import profile from "../assets/profile.png";
import random from "../assets/random.jpg"
import rating from "../assets/rating.png";
import ServiceCard from "../components/ServiceCard";

import data from "../data/services";
import ApexChart from "../components/Chart";
import Navbar from "../components/navbar/Navbar";
import worker1 from "../assets/worker1.jpeg";
import worker2 from "../assets/worker2.jpeg";
import Modal from "../components/Modal";
import worker3 from "../assets/worker3.jpeg";
import ProgressBar from "../components/ProgressBar";

const DesignerDashboard = () => {
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleWorkerClick = (worker) => {
    setSelectedWorker(worker);
  };

  const handleCloseModal = () => {
    setSelectedWorker(null);
  };

  const workersData = [
    {
      id: 1,
      name: "Ram Verma",
      image: worker1,
      projects: [
        { projectName: "Home", status: "88" },
        { projectName: "Office", status: "77" },
        // Add more projects as needed
      ],
    },
    {
      id: 2,
      name: "Sonu Sharma",
      image: worker2,
      projects: [
        { projectName: "Bunglow", status: "100" },
        { projectName: "Apartment", status: "09" },
        // Add more projects as needed
      ],
    },
    {
      id: 3,
      name: "Abdul Khan",
      image: worker3,
      projects: [
        { projectName: "Home", status: "95" },
        { projectName: "Villa", status: "66" },
        // Add more projects as needed
      ],
    },
    // Add more workers as needed
  ];
  return (
    <>
      <Navbar />
      <div>
        <div className="text-5xl font-extrabold text-gray-800 mt-10 mb-10 text-center">
          Designer
        </div>
        <div className="m-5 p-5 flex justufy-center bg-slate-400 rounded-[12px]">
          <div className="w-[60vw]  items-center m-3 shadow-xl rounded-[12px] bg-white">
            <ApexChart />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <div className="flex flex-col m-4 shadow-xl rounded-[12px] p-8 w-[500px] bg-white ">
                <div className="title flex mb-2">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">
                    Ongoing Projects
                  </h2>
                </div>
                <div className="flex flex-col justify-center">
                  <p>Aditya Shahani - Home</p>
                  <p>Vishal Chelwani - Bunglow</p>
                  <p>Vinay Patil - Home</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center m-4 shadow-xl rounded-[12px] p-8 w-[500px] bg-white">
                <div className="title flex flex-col items-center">
                  <h2 className="text-2xl font-bold m-1">Experience Rating</h2>
                  <img src={rating} alt="" className="p-2" />
                </div>
                <div className="title flex flex-col">
                  <h2 className="text-2xl font-bold m-1">Expertise</h2>
                  <p className="p-2 text-xl">Traditional Style</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <div className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
            Team Members
          </div>

          {/* Modal or Div to display worker details */}
          {/* Worker cards with click event */}
          <div className="team-members flex items-center justify-evenly gap-8 mt-10 mb-10">
            {workersData.map((worker) => (
              <div
                key={worker.id}
                className="team-member-card hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] h-[300px] flex flex-col items-center justify-center"
                onClick={() => handleWorkerClick(worker)}
              >
                <img
                  src={worker.image}
                  alt={`Member-${worker.id}`}
                  className="w-[300px] h-[200px] rounded-[20px]"
                />
                <h3 className="text-xl font-bold text-gray-800 m-4 text-[1.2rem]">
                  {worker.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Modal to display worker details */}
          {selectedWorker && (
        <Modal onClose={handleCloseModal}>
          {/* Display worker details, assigned projects, status, and add project button */}
          <div className="text-center">
            <h2 className="font-bold text-2xl">{selectedWorker.name}</h2>
            <h3 className="font-bold text-2xl">Assigned Projects:</h3>
            <ul>
              {selectedWorker.projects.map((project, index) => (
                <div key={index} className="flex justify-around items-center font-bold text-2xl">
                  <div>{project.projectName}</div>
                  <ProgressBar progress={project.status}/>
                </div>
              ))}
            </ul>
            {/* Add more details as needed */}
            <button className="bg-black text-white p-2 rounded-[12px] text-md">Add Project</button>
          </div>
        </Modal>
      )}
        </div>
        <div className="services-area flex flex-wrap gap-5 p-10 items-center justify-center mt-10 md:gap-[8rem] md:mt-5 shadow-3xl border-solid border-black border-2 rounded-[15px] w-[90vw] m-auto">
        <br />
        <div className="team-members flex items-center justify-evenly gap-8 mt-10">
          {/* Team Member Card 1 */}
          <div className="team-member-card hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] h-[300px] flex flex-col items-center justify-center">
            <img
              src={random}
              alt="Memeber-1"
              className="w-32 h-32 rounded-full"
            />
            <h3 className="text-lg font-semibold mt-2">Ram Verma</h3>
          </div>

          {/* Team Member Card 2 */}
          <div className="team-member-card hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] h-[300px] flex flex-col items-center justify-center">
            <img
              src={random}
              alt="Member-2"
              className="w-32 h-32 rounded-full"
            />
            <h3 className="text-lg font-semibold mt-2">Sonu Sharma</h3>

          </div>

          {/* Team Member Card 3 */}
          <div className="team-member-card hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] h-[300px] flex flex-col items-center justify-center">
            <img
              src={random}
              alt="Member-3"
              className="w-32 h-32 rounded-full"
            />
            <h3 className="text-lg font-semibold mt-2">Abdul Khan</h3>
          </div>
          <div className="team-member-card hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] h-[300px] flex flex-col items-center justify-center">
            <img
              src={random}
              alt="Member-3"
              className="w-32 h-32 rounded-full"
            />
            <h3 className="text-lg font-semibold mt-2">Ramesha Shukla</h3>
          </div>
        </div>
        <div className="services-area flex flex-wrap gap-5 p-10 items-center justify-center mt-1 md:gap-[8rem] md:mt-5 shadow-3xl border-solid border-black border-2 rounded-[15px] w-[90vw] m-auto">
          {data.designer_data.map((service, idx) => (
            <ServiceCard
              name={service.name}
              icon={service.icon}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DesignerDashboard;
