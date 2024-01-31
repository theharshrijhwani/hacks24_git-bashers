// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890</p>
            <p>info@example.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Popular Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border rounded-l-md w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded-r-md"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; Your Site Name. All Rights Reserved. Designed by HTML Codex</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
