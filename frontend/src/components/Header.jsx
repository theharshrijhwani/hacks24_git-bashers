// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold mr-4">
            {/* Add your logo or site name here */}
            UrbanSpaces
          </div>
          <nav className="space-x-4">
            {/* Replace #home, #about, and #contact with the actual URLs or section IDs */}
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex items-center justify-end flex-grow">
          {/* Add your custom styles to these buttons */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            SignUp
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
