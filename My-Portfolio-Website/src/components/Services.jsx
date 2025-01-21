import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using HTML, CSS, JavaScript, and Tailwind CSS to create seamless user experiences.",
      icon: "🌐",
    },
    {
      title: "Version Control",
      description:
        "Efficiently managing code repositories using Git and GitHub, ensuring collaboration and version tracking for smooth project workflows.",
      icon: "🔧",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces with Figma to craft visually appealing and functional prototypes.",
      icon: "🎨",
    },
    {
      title: "Frontend Optimization",
      description:
        "Optimizing web performance by implementing best practices, clean code, and interactive elements for enhanced usability.",
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 md:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight animate-fade-in-up">
            My Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 animate-fade-in-up delay-200">
            I provide a range of services to help bring your ideas to life with
            innovative web solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-indigo-400 animate-fade-in-up delay-300">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-purple-400 animate-fade-in-up delay-400">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 leading-relaxed animate-fade-in-up delay-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
