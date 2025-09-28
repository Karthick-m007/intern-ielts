import React from 'react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    feedback: 'The speaking practice sessions were amazing. I felt very confident on the actual exam day!',
    band: 'Band 7.5',
  },
  {
    name: 'Rahul Mehta',
    feedback: 'Thanks to IELTSPro, I scored Band 8! The mock tests and trainer support were on point.',
    band: 'Band 8',
  },
  {
    name: 'Emily Rose',
    feedback: 'Great tips and strategies! I improved my writing score from 6 to 8.5.',
    band: 'Band 8.5',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 animate__animated animate__fadeInDown">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105 duration-300 text-left animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'both' }}
            >
              <p className="text-gray-700 italic mb-6 text-lg">"{t.feedback}"</p>
              <div className="font-semibold text-red-600 text-lg">{t.name}</div>
              <div className="text-sm text-gray-500 mt-1">{t.band}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
