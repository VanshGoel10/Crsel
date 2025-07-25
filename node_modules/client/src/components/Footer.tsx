import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  'Zoho CRM Implementation',
  'Zoho Books',
  'Zoho People',
  'Zoho Projects',
  'Zoho Analytics',
  'Custom Integration',
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & About */}
        <div>
          <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Crsel</span>
          <p className="text-xs text-blue-300 mt-1">Cloud Ready Solution for Enterprise Logic</p>
          <p className="mt-4 text-gray-400 text-sm">
            Crsel provides Zoho solutions, offering expert consulting, seamless integrations, and ongoing support to help your business thrive in the digital age.
          </p>
          {/* Zoho Authorized Partner Logo */}
          {/* Removed Zoho Authorized Partner logo and placeholder */}
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/career" className="hover:text-blue-400 transition-colors">Career</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li key={idx} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">{service}</li>
            ))}
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="text-sm text-gray-400 space-y-2 mb-4">
            <li>Email: <a href="mailto:crselofficial@gmail.com" className="hover:text-blue-400 transition-colors">crselofficial@gmail.com</a></li>
            <li>Phone: <a href="tel:+919355410026" className="hover:text-blue-400 transition-colors">9355410026</a></li>
            <li>Phone: <a href="tel:+919050919222" className="hover:text-blue-400 transition-colors">9050919222</a></li>
            <li>Address: Sec 17, Huda Yamunanagar, India</li>
          </ul>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"> 
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Crsel. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer; 