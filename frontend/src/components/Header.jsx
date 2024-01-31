// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-xl font-bold mr-4">YourLogo</div>
          {/* Navbar Links */}
          <nav className="space-x-4">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        {/* Buttons */}
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">SignUp</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
