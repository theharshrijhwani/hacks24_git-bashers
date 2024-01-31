// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-bold mr-4">
            {/* Add your logo or site name here */}
            <Link to="/" className="text-white hover:text-white focus:text-white focus:outline-none">
              UrbanSpaces
            </Link>
          </div>
          <nav className="space-x-4">
            {/* Replace #home, #about, and #contact with the actual URLs or section IDs */}
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div className="flex items-center justify-end flex-grow">
          {/* Add your custom styles to these buttons */}
          <Link to="/signin">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
