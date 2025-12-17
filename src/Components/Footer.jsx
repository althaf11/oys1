import React from "react";
// import {
//   FaFacebookF,
//   FaXTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin,  FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12">
    //   <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
    //     {/* Logo & Description */}
    //     <div>
    //       <div className="flex items-center space-x-3 mb-4">
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/T-Hub_logo.png/800px-T-Hub_logo.png"
    //           alt="Brain Serve"
    //           className="h-10"
    //         />
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Telangana_Rising_logo.png/800px-Telangana_Rising_logo.png"
    //           alt="Telangana Rising"
    //           className="h-10"
    //         />
    //       </div>
    //       <p className="text-sm leading-relaxed">
    //        Brain Serve is a premier innovation hub and ecosystem enabler based out of
    //         Hyderabad, India.
    //       </p>
    //       {/* Social Icons */}
    //       <div className="flex space-x-4 mt-5">
    //         <a href="#" className="hover:text-orange-500 transition">
    //           <FaFacebookF />
    //         </a>
    //         <a href="#" className="hover:text-orange-500 transition">
    //           <FaXTwitter />
    //         </a>
    //         <a href="#" className="hover:text-orange-500 transition">
    //           <FaLinkedinIn />
    //         </a>
    //         <a href="#" className="hover:text-orange-500 transition">
    //           <FaYoutube />
    //         </a>
    //         <a href="#" className="hover:text-orange-500 transition">
    //           <FaInstagram />
    //         </a>
    //       </div>
    //     </div>

    //     {/* About Section */}
    //     <div>
    //       <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-2">
    //         About Brain Serve
    //       </h3>
    //       <ul className="space-y-2 text-sm">
    //         <li><a href="#" className="hover:text-orange-400">About Us</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Awards</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Careers</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Startups</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Corporates</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Programs</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
    //       </ul>
    //     </div>

    //     {/* Innovation Ecosystem */}
    //     <div>
    //       <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-2">
    //         Innovation Ecosystem
    //       </h3>
    //       <ul className="space-y-2 text-sm">
    //         <li><a href="#" className="hover:text-orange-400">Government</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Academia</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Investors</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Mentors</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Value Partners</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Partnerships</a></li>
    //       </ul>
    //     </div>

    //     {/* Quick Links */}
    //     <div>
    //       <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-2">
    //         Quick Links
    //       </h3>
    //       <ul className="space-y-2 text-sm">
    //         <li><a href="#" className="hover:text-orange-400">Single Window</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Grievance Policy</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Corporate Notices</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Privacy & Cookies Policy</a></li>
    //         <li><a href="#" className="hover:text-orange-400">Media Kit</a></li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Bottom Bar */}
    //   <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-10 pt-6">
    //     © {new Date().getFullYear()} Brain Serve. All Rights Reserved.
    //   </div>
    // </footer>
     <motion.footer
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-orange-600 dark:bg-gray-900 text-white dark:text-white py-10 mt-10 p-6 rounded-xl shadow"
>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left px-6  ">
        {/* ===== Brand Info ===== */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Brain Serve</h3>
          <p className="text-orange-100 text-sm leading-relaxed">
            Empowering students through training, counselling, and skill-building. 
            Together, we create tomorrow’s leaders by shaping skills, attitude, and confidence.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            {[
              { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61583427783242&sk=about" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/operationyuvasankalp2025/" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/brain-serve-33376b380/" },
              
              { icon: <FaYoutube />, link: "https://www.youtube.com/@OperationYuvaSankalp" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white bg-orange-500/30 p-3 rounded-full hover:bg-white hover:text-orange-600 transition duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-orange-100">
            <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/about'>About Us</Link></li>
            <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/gallery'>Gallery</Link></li>
            <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/services/e-c3'>C3 Arena</Link></li>
            <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

{/* ===== Services ===== */}
        <div>
          <h4 className="text-xl  font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-orange-100">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/services/resume">Resume</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/services/career-counseling">Career Counseling</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/services/crash-courses">Crash Courses</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/services/e-materials">E-Materials</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/services/e-calendar">E-Calendar</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/services/e-access">E-Access Card</Link>
            </li>
          </ul>
        </div>


        {/* ===== Contact Info ===== */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <p>Email: <span className="text-orange-100">support@brainserve.com</span></p>
          <p>Phone: <span className="text-orange-100">+91 98765 43210</span></p>
          <p>Location: <span className="text-orange-100">Hyderabad, India</span></p>
        </div>
      </div>

      {/* ===== Bottom Text ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mt-8 text-orange-100 text-sm"
      >
        © {new Date().getFullYear()} <span className="font-semibold">Brain Serve</span>. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
