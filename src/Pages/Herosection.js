import React from 'react';
import heroImage from '../images/istockphoto-664170374-612x612.webp';

const Hero = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between pt-5 md:pt-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight tracking-tight">
            Ace the <span className="text-red-600">IELTS</span> with Confidence
          </h1>
          <p className="text-gray-600 text-lg mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Join thousands of students achieving 
            <span className="text-red-600 font-semibold"> Band 8+ </span>
            with personalized coaching and real test simulations.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium transition transform hover:scale-105 duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center animate__animated animate__zoomIn">
          <img
            src={heroImage}
            alt="IELTS Preparation"
            className="w-full max-w-md rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
