// Body.jsx
import React from "react";

import home from "../assets/home.png";
import apartment1 from "../assets/apartment1.png";
import apartment2 from "../assets/apartment2.png";
import apartment3 from "../assets/apartment3.png";
import cafe1 from "../assets/cafe1.png";
import cafe2 from "../assets/cafe2.png";
import cafe3 from "../assets/cafe3.png";
import classroom1 from "../assets/classroom1.png";
import classroom2 from "../assets/classroom2.png";
import classroom3 from "../assets/classroom3.png";
import kitchen1 from "../assets/kitchen1.png";
import kitchen2 from "../assets/kitchen2.png";
import kitchen3 from "../assets/kitchen3.png";
import office1 from "../assets/office1.png";
import office2 from "../assets/office2.png";
import office3 from "../assets/office3.png";
import restaurant1 from "../assets/restaurant1.png";
import restaurant2 from "../assets/restaurant2.png";
import restaurant3 from "../assets/restaurant3.png";
import market_place from "../assets/market_place.png";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Body = () => {
  return (
    <>
      <Header />
      <div className="container my-8 mx-auto">
        <div className="text-start flex flex-row justify-around">
          <div className="flex flex-col w-[20%] justify-center mt-8">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
              Transform Your Space
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Elevate your living or working space with our expert interior
              design solutions. From conceptualization to implementation, we
              bring your vision to life.
            </p>
            <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md inline-block hover:bg-blue-600 focus:outline-none width-[20vw]">
              Get Started
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={home}
              alt="Interior Design"
              className="float-left w-[600px] h-[400px] rounded-[12px]"
            />
          </div>
        </div>
        <div>
          <br />
          <br />
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
            What does UrbanSpace do?
          </h2>
          <br />
          <p className="text-xl text-gray-600 mb-8 text-center">
            UrbanSpace is an innovative online platform catering to both clients
            and designers, offering a seamless two-user experience. With
            dedicated dashboards for both clients and designers, UrbanSpace
            facilitates efficient project tracking, ensuring a collaborative and
            transparent design process. Our platform boasts an intuitive
            interface and powerful tools that empower users to plan, design, and
            decorate various spaces, be it apartments, houses, offices, or more.
            What sets UrbanSpace apart is its commitment to delivering
            professional results without the need for specialized skills. We
            prioritize clarity and realism, providing users with the tools they
            need to visualize their projects distinctly and experiment with
            interior designs swiftly. UrbanSpace transforms interior design into
            an accessible and enjoyable endeavor for everyone involved.
          </p>
        </div>
        <div>
          <br />
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
            What can you create with us?
          </h2>
          <br />
          <br />
        </div>
        <div className="flex justify-evenly items-center gap-7 mt-5">
          {/* Add hover effect for each image */}
          <div className="flex-1 items-center justify-center flex flex-col transition-transform transform hover:scale-110">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">Restaurant</h1>
            <img className="mt-3" src={restaurant1} alt="Restaurant" />
          </div>
          <div className="flex-1 items-center justify-center flex flex-col transition-transform transform hover:scale-110">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">Kitchen</h1>
            <img className="mt-3 object-cover w-full h-full" src={kitchen1} alt="Kitchen" />
          </div>
          <div className="flex-1 items-center justify-center flex flex-col transition-transform transform hover:scale-110">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">Cafe</h1>
            <img className="mt-3 object-cover w-full h-full" src={cafe1} alt="Cafe" />
          </div>
        </div>
        <div className="flex justify-evenly items-center mt-5 gap-7">
          {/* Add hover effect for each image */}
          <div className="flex-1 items-center justify-center flex flex-col transition-transform transform hover:scale-110">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">Classrooms</h1>
            <img className="mt-3" src={classroom1} alt="Classrooms" />
          </div>
          <div className="flex-1 items-center justify-center flex flex-col transition-transform transform hover:scale-110">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">Apartments</h1>
            <img className="mt-3 object-cover w-full h-full" src={apartment1} alt="Apartments" />
          </div>
          <div className="flex-1 items-center justify-center flex flex-col transition-transform transform hover:scale-110">
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-[1.2rem]">Office</h1>
            <img className="mt-3" src={office1} alt="Office" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Body;