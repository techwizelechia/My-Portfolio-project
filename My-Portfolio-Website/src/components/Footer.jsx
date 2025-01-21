import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      {/* Container */}
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in-up">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Techwiz Designs</h2>
          <p className="text-gray-400">
            Building modern, responsive websites and web applications with
            cutting-edge technologies.
          </p>
          <p className="mt-4 text-gray-400">&copy; 2025 Elechia Creations</p>
        </div>

        {/* Quick Links to Navigate page */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to stay updated with the latest news and offers.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 mb-2 sm:mb-0 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-1 py-1 rounded-md text-white transition transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <p className="text-center text-gray-400 text-sm">
          Made with <span className="text-red-800">&hearts;</span>  Elechia Juma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
