import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Column 1: About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">IELTSPro</h2>
          <p className="text-sm text-gray-300">
            At IELTSPro, we empower students to achieve their dream IELTS band scores through expert coaching, mock tests, and personalized feedback.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> 123 IELTS Street, Chennai, India
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> info@ieltspro.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 border-t border-blue-800 pt-6">
        © 2025 IELTSPro Institute. All rights reserved.
      </div>
    </footer>
  );
}
