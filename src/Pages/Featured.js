import React from 'react';
import { FaMicrophone, FaClipboardCheck, FaChartLine, FaUserTie } from 'react-icons/fa';

const features = [
  {
    icon: <FaMicrophone className="text-red-600 text-3xl" />,
    title: 'Speaking Practice',
    desc: 'Improve your speaking skills with real-time mock interviews and feedback.',
  },
  {
    icon: <FaClipboardCheck className="text-red-600 text-3xl" />,
    title: 'Mock Tests',
    desc: 'Simulate real IELTS test environments with our full-length mock exams.',
  },
  {
    icon: <FaChartLine className="text-red-600 text-3xl" />,
    title: 'Band Score Tracker',
    desc: 'Track your progress and identify areas of improvement in all 4 modules.',
  },
  {
    icon: <FaUserTie className="text-red-600 text-3xl" />,
    title: 'Expert Guidance',
    desc: 'Learn from certified trainers with years of IELTS coaching experience.',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 animate__animated animate__fadeInDown">
          Our Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-red-100 p-4 rounded-full inline-block">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
