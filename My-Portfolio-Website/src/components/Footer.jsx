import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Container */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 animate-fade-in-up">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Techwiz Designs</h2>
          <p className="text-gray-400 leading-relaxed">
            Building modern, responsive websites and web applications with
            cutting-edge technologies.
          </p>
          <p className="mt-4 text-gray-400">&copy; 2025 Elechia Creations</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Contact"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            {[
              { name: "facebook", icon: "fab fa-facebook" },
              { name: "twitter", icon: "fab fa-twitter" },
              { name: "instagram", icon: "fab fa-instagram" },
              { name: "linkedin", icon: "fab fa-linkedin" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110 duration-300"
                aria-label={social.name}
              >
                <i className={`${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to stay updated with the latest news and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transition transform hover:scale-105 duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <p className="text-center text-gray-400 text-sm">
          Made with <span className="text-red-500">&hearts;</span> by Elechia
          Juma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
