import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import profile from "../../assets/profile.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <FaRegUserCircle size={25} className="mr-4" />, text: "Dashboard" },
    { icon: <FaClipboardList size={25} className="mr-4" />, text: "Orders" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">
          UrbanSpace
        </h1>
      </div>
      <button className="md:flex items-center py-2 rounded-full border border-black px-5 hover:bg-blue-500 hover:text-white">
        <img
          width={30}
          height={30}
          src={profile}
          alt="profile-icon"
          className="mr-2"
        />
        Profile
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold">UrbanSpace</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className="text-xl flex cursor-pointer  w-[80%] rounded-full mx-auto p-2 hover:text-white hover:bg-black flex items-center">
                    <div>{icon}</div>
                    <div>{text}</div>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
