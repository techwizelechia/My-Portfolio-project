import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wide">
              <Link to="/">Elechia</Link>
            </h1>
          </div>

          {/* Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-400 transition">About</Link>
            <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
            <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6 transition-all duration-300"
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-gray-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-gray-400 transition"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-gray-400 transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-gray-400 transition"
          >
            Contact
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 text-sm text-gray-400 hover:text-white"
          >
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
