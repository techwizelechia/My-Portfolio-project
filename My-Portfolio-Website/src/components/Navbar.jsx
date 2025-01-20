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
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-400 transition">About</Link>
            <Link to="/Services" className="hover:text-gray-400 transition">Services</Link>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="/Services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
