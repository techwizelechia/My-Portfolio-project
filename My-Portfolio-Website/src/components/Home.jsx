import React from "react";
import pictures from "../assets/Images/elechia.jpg";

function Home() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 h-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
          {/* Left Column: Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Hi, I'm Elechia <br /> A Full-Time Web Developer
            </h1>
            <p className="text-lg sm:text-xl text-gray-100">
              I specialize in creating responsive, user-friendly websites and
              applications. Let's build something amazing together.
            </p>
            <p className="text-lg sm:text-xl text-gray-100">
              With experience in front-end technologies like JavaScript, React
              JS, Tailwind CSS, Figma, and Git, I deliver high-quality software
              solutions.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                View My Projects
              </a>
            </div>
          </div>

          {/* Right Column: Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
            <img
              src={pictures || "https://via.placeholder.com/300"}
              alt="A smiling software developer"
              className="w-64 h-64 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-20"
        style={{
          clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0% 100%)",
        }}
      ></div>
    </section>
  );
}

export default Home;
