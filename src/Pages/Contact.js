import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-red-600 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          We’d love to hear from you. Get in touch!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left: Contact Form */}
        <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="space-y-10 text-gray-700">
          <div className="flex items-start gap-5">
            <FaMapMarkerAlt className="text-red-600 text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg mb-1">Address</h4>
              <p className="text-gray-600 max-w-xs">
                123 IELTSPro Lane, Anna Nagar, Chennai, TN - 600040
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaPhoneAlt className="text-red-600 text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg mb-1">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaEnvelope className="text-red-600 text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
              <p className="text-gray-600">support@ieltspro.com</p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="IELTSPro Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.13025521758!2d80.22097707487044!3d13.085395312472787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e13f25e4b3%3A0x8f3e4cb9dfdcbfbb!2sAnna%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1695904567890"
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
