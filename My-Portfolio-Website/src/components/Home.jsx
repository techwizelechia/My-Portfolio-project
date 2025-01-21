import React from 'react';
import pictures from "../assets/Images/elechia.jpg"
function Home() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          {/* Left Column: Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-6 animate__animated animate__fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Hi, I'm a Full-Time Web Developer
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 animate__animated animate__fadeIn animate__delay-1s">
              I specialize in creating responsive, user-friendly websites and applications. Let's build something amazing together.
            </p>
            <p className="text-lg sm:text-xl text-gray-100 animate__animated animate__fadeIn animate__delay-2s">
              With experience in front-end technologies like Javascript, React js, Tailwind css, Css, Figma and Git and GitHub I deliver high-quality software solutions.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                View My Projects
              </a>
            </div>
          </div>

          {/* Right Column: Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate__animated animate__fadeIn animate__delay-3s items-center">
            <img
              src={pictures}
              alt="Developer"
              className="w-64 h-64 rounded-full object-cover animate-pulse hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Background Shape (Responsive and Animated) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 animate__animated animate__fadeIn animate__delay-3s"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1500x1000)' }}
      />
    </section>
  );
}

export default Home;
