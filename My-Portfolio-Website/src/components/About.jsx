import React from "react";
import myProfile from "../assets/Images/elechia.jpg"
const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 md:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight animate-fade-in-up">
            About Me
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 animate-fade-in-up delay-200">
            A passionate Junior Software Developer building creative and scalable web solutions.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-1 shadow-xl transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-6">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={myProfile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gray-900 bg-opacity-50 hidden group-hover:flex items-center justify-center text-white font-medium text-sm transition-all duration-300 p-2">
              "Transforming ideas into beautiful and functional web solutions!"
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-purple-400">
              Hi, I'm Elechia!
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              As a Junior Software Developer, I specialize in crafting dynamic and responsive web applications using modern technologies. My focus is on delivering visually appealing and efficient solutions that enhance user experiences.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am skilled in building clean, maintainable codebases and thrive in collaborative environments where creativity meets functionality.
            </p>

            {/* Skill Section */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-indigo-400">
                Skills & Tools
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                  "Figma",
                  "React js",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 text-sm font-medium bg-gray-800 rounded-md cursor-pointer text-center hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
