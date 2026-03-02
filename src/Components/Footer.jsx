// import React from "react";
// // import {
// //   FaFacebookF,
// //   FaXTwitter,
// //   FaLinkedinIn,
// //   FaYoutube,
// //   FaInstagram,
// // } from "react-icons/fa6";
// import { FaFacebook, FaInstagram, FaLinkedin,  FaYoutube } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     // <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12">
//     //   <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//     //     {/* Logo & Description */}
//     //     <div>
//     //       <div className="flex items-center space-x-3 mb-4">
//     //         <img
//     //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/T-Hub_logo.png/800px-T-Hub_logo.png"
//     //           alt="Brain Serve"
//     //           className="h-10"
//     //         />
//     //         <img
//     //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Telangana_Rising_logo.png/800px-Telangana_Rising_logo.png"
//     //           alt="Telangana Rising"
//     //           className="h-10"
//     //         />
//     //       </div>
//     //       <p className="text-sm leading-relaxed">
//     //        Brain Serve is a premier innovation hub and ecosystem enabler based out of
//     //         Hyderabad, India.
//     //       </p>
//     //       {/* Social Icons */}
//     //       <div className="flex space-x-4 mt-5">
//     //         <a href="#" className="hover:text-orange-500 transition">
//     //           <FaFacebookF />
//     //         </a>
//     //         <a href="#" className="hover:text-orange-500 transition">
//     //           <FaXTwitter />
//     //         </a>
//     //         <a href="#" className="hover:text-orange-500 transition">
//     //           <FaLinkedinIn />
//     //         </a>
//     //         <a href="#" className="hover:text-orange-500 transition">
//     //           <FaYoutube />
//     //         </a>
//     //         <a href="#" className="hover:text-orange-500 transition">
//     //           <FaInstagram />
//     //         </a>
//     //       </div>
//     //     </div>

//     //     {/* About Section */}
//     //     <div>
//     //       <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-2">
//     //         About Brain Serve
//     //       </h3>
//     //       <ul className="space-y-2 text-sm">
//     //         <li><a href="#" className="hover:text-orange-400">About Us</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Awards</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Careers</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Startups</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Corporates</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Programs</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
//     //       </ul>
//     //     </div>

//     //     {/* Innovation Ecosystem */}
//     //     <div>
//     //       <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-2">
//     //         Innovation Ecosystem
//     //       </h3>
//     //       <ul className="space-y-2 text-sm">
//     //         <li><a href="#" className="hover:text-orange-400">Government</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Academia</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Investors</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Mentors</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Value Partners</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Partnerships</a></li>
//     //       </ul>
//     //     </div>

//     //     {/* Quick Links */}
//     //     <div>
//     //       <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-2">
//     //         Quick Links
//     //       </h3>
//     //       <ul className="space-y-2 text-sm">
//     //         <li><a href="#" className="hover:text-orange-400">Single Window</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Grievance Policy</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Corporate Notices</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Privacy & Cookies Policy</a></li>
//     //         <li><a href="#" className="hover:text-orange-400">Media Kit</a></li>
//     //       </ul>
//     //     </div>
//     //   </div>

//     //   {/* Bottom Bar */}
//     //   <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-10 pt-6">
//     //     © {new Date().getFullYear()} Brain Serve. All Rights Reserved.
//     //   </div>
//     // </footer>
//      <motion.footer
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   className="bg-orange-600 dark:bg-gray-900 text-white dark:text-white py-10 mt-10 p-6 rounded-xl shadow"
// >

//       <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left px-6  ">
//         {/* ===== Brand Info ===== */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-3">Brain Serve</h3>
//           <p className="text-orange-100 text-sm leading-relaxed">
//             Empowering students through training, counselling, and skill-building. 
//             Together, we create tomorrow’s leaders by shaping skills, attitude, and confidence.
//           </p>

//           {/* Social Media Icons */}
        //   <div className="flex justify-center md:justify-start gap-4 mt-5">
        //     {[
        //       { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61583427783242&sk=about" },
        //       { icon: <FaInstagram />, link: "https://www.instagram.com/operationyuvasankalp2025/" },
        //       { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/brain-serve-33376b380/" },
              
        //       { icon: <FaYoutube />, link: "https://www.youtube.com/@OperationYuvaSankalp" },
        //     ].map((social, i) => (
        //       <motion.a
        //         key={i}
        //         href={social.link}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         whileHover={{ scale: 1.2, rotate: 5 }}
        //         whileTap={{ scale: 0.9 }}
        //         className="text-white bg-orange-500/30 p-3 rounded-full hover:bg-white hover:text-orange-600 transition duration-300"
        //       >
        //         {social.icon}
        //       </motion.a>
        //     ))}
        //   </div>
        // </div>

        // {/* ===== Quick Links ===== */}
        // <div>
        //   <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
        //   <ul className="space-y-2 text-orange-100">
        //     <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/about'>About Us</Link></li>
        //     <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/gallery'>Gallery</Link></li>
        //     <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/services/e-c3'>C3 Arena</Link></li>
        //     <li className="hover:text-white transition duration-300 cursor-pointer"><Link to='/contact'>Contact Us</Link></li>
        //   </ul>
        // </div>

// {/* ===== Services ===== */}
//         <div>
//           <h4 className="text-xl  font-semibold mb-3">Services</h4>
//           <ul className="space-y-2 text-orange-100">
//             <li className="hover:text-white transition duration-300 cursor-pointer">
//               <Link to="/services/resume">Resume</Link>
//             </li>
//             <li className="hover:text-white transition duration-300 cursor-pointer">
//               <Link to="/services/career-counseling">Career Counseling</Link>
//             </li>
//             <li className="hover:text-white transition duration-300 cursor-pointer">
//               <Link to="/services/crash-courses">Crash Courses</Link>
//             </li>
//             <li className="hover:text-white transition duration-300 cursor-pointer">
//               <Link to="/services/e-materials">E-Materials</Link>
//             </li>
//             <li className="hover:text-white transition duration-300 cursor-pointer">
//               <Link to="/services/e-calendar">E-Calendar</Link>
//             </li>
//             <li className="hover:text-white transition duration-300 cursor-pointer">
//               <Link to="/services/e-access">E-Access Card</Link>
//             </li>
//           </ul>
//         </div>


//         {/* ===== Contact Info ===== */}
//         <div>
//           <h4 className="text-xl font-semibold mb-3">Contact</h4>
//           <p>Email: <span className="text-orange-100">support@brainserve.com</span></p>
//           <p>Phone: <span className="text-orange-100">+91 98765 43210</span></p>
//           <p>Location: <span className="text-orange-100">Hyderabad, India</span></p>
//         </div>
//       </div>

//       {/* ===== Bottom Text ===== */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="text-center mt-8 text-orange-100 text-sm"
//       >
//         © {new Date().getFullYear()} <span className="font-semibold">Brain Serve</span>. All rights reserved.
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const fade = {
  hidden: { opacity: 0, y: 25 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 }
  })
};

export default function PortalFooter() {
  return (
    <footer className="bg-orange-500 text-white pt-16">

      <div className="max-w-7xl mx-auto px-6">

{/* ================= ROW 1 ================= */}
<div className="grid lg:grid-cols-[1.2fr_1fr_1.8fr] gap-12 border-b border-orange-500 pb-14 items-start">

{/* BRAND */}
<motion.div variants={fade} initial="hidden" whileInView="show" custom={1}>
<h2 className="text-2xl font-bold mt-10 mb-3">Brain Serve</h2>

<p className="text-sm leading-relaxed mb-6">
Empowering students through training, counselling, and skill-building.
We shape skills, attitude, and confidence to create tomorrow’s leaders.
</p>

<div className="flex gap-4">

<a href="#install-android" className="flex items-center gap-2 bg-white text-orange-700 px-4 py-2 rounded-md font-semibold text-sm hover:scale-105 transition">
<FaGooglePlay/> Android
</a>

<a href="#install-ios" className="flex items-center gap-2 bg-white text-orange-700 px-4 py-2 rounded-md font-semibold text-sm hover:scale-105 transition">
<FaApple/> iOS
</a>

</div>
</motion.div>


{/* COMPANY */}
<motion.div variants={fade} initial="hidden" whileInView="show" custom={2}>
<h3 className="font-semibold text-lg mt-10 mb-4">Company</h3>
<ul className="space-y-2 text-sm">

<li><a href="#about">About Us</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#contact">Contact Us</a></li>
<li><a href="#career-mapping">Career Mapping</a></li>

</ul>
</motion.div>


<motion.div
  variants={fade}
  initial="hidden"
  whileInView="show"
  custom={3}
>
  <h3 className="font-semibold text-lg mb-6 text-center text-white">Services</h3>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6 text-sm">

    {/* Resume */}
    <div>
      <p className="font-semibold text-white">Resume</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <Link to="/resume" className="block hover:text-white">Resume Builder</Link>
        <a href="#video-resume" className="block hover:text-white">Video Resume</a>
      </div>
    </div>

    {/* Crash Courses */}
    <div>
      <p className="font-semibold text-white">Crash Courses</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <a href="#top-courses" className="block hover:text-white">Top Courses</a>
        <a href="#trending-courses" className="block hover:text-white">Trending Courses</a>
      </div>
    </div>

    {/* Career Counselling */}
    <div>
      <p className="font-semibold text-white">Career Counselling</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <a href="#book-session" className="block hover:text-white">Book Session</a>
        <a href="#career-guidance" className="block hover:text-white">Guidance</a>
      </div>
    </div>

    {/* E-Library */}
    <div>
      <p className="font-semibold text-white">E-Library</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <a href="#materials" className="block hover:text-white">Popular Materials</a>
        <a href="#notes" className="block hover:text-white">Notes</a>
      </div>
    </div>

    {/* Calendar */}
    <div>
      <p className="font-semibold text-white">E-Calendar</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <a href="#events" className="block hover:text-white">Latest Events</a>
        <a href="#schedule" className="block hover:text-white">Schedule</a>
      </div>
    </div>

    {/* Preparation */}
    <div>
      <p className="font-semibold text-white">E-Preparation</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <a href="#mock-tests" className="block hover:text-white">Top Mock Tests</a>
        <a href="#practice" className="block hover:text-white">Practice</a>
      </div>
    </div>

    {/* Access */}
    <div className="sm:col-span-2">
      <p className="font-semibold text-white">E-Access</p>
      <div className="mt-2 grid grid-cols-2 gap-x-6 text-orange-100">
        <a href="#card" className="hover:text-white">Access Card</a>
        <a href="#institutes" className="hover:text-white">Institutes</a>
        <a href="#incubation" className="hover:text-white">Incubation Centers</a>
        <a href="#universities" className="hover:text-white">Universities</a>
      </div>
    </div>

 {/* C3 Arena */}
    <div>
      <p className="font-semibold text-white">C3 Arena</p>
      <div className="mt-2 space-y-1 text-orange-100">
        <a href="#mock-tests" className="block hover:text-white">About</a>
        <a href="#practice" className="block hover:text-white">Registration</a>
      </div>
    </div>

 
   </div>
</motion.div>

</div>

<div className="border-t border-gray-500 "></div>

{/* ================= ROW 2 ================= */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-14 items-start text-left">

{/* CONTACT */}
<motion.div variants={fade} initial="hidden" whileInView="show" custom={1}>
<h3 className="font-semibold mb-4 text-lg">Contact</h3>
<ul className="space-y-2 text-sm">
<li>support@brainserve.com</li>
<li>91+ 98765 43210</li>
<li>Hyderabad, India</li>
<li className="pt-2">
  <div className="flex flex-wrap gap-4">

    <a href="https://www.instagram.com/operationyuvasankalp2025/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition">
      <FaInstagram/> Instagram
    </a>

    <a href="#twitter" className="flex items-center gap-1 hover:text-white transition">
      <FaTwitter/> Twitter
    </a>

    <a href="https://www.youtube.com/@OperationYuvaSankalp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition">
      <FaYoutube/> YouTube
    </a>

    <a href="https://www.facebook.com/profile.php?id=61583427783242" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition">
      <FaFacebook/> Facebook
    </a>

  </div>
</li>

</ul>
</motion.div>


{/* CAREER */}
<motion.div variants={fade} initial="hidden" whileInView="show" custom={2}>
<h3 className="font-semibold mb-4 text-lg">Career</h3>
<ul className="space-y-2 text-sm">
<li><a href="#jobs">Jobs</a></li>
<li><a href="#higher-studies">Higher Studies</a></li>
<li><a href="#roadmaps">Roadmaps</a></li>
<li><a href="#assessments">Assessments</a></li>
<li><a href="#mentorship">Mentorship</a></li>
</ul>
</motion.div>


{/* QUICK ACCESS */}
<motion.div variants={fade} initial="hidden" whileInView="show" custom={3}>
<h3 className="font-semibold mb-4 text-lg">Quick Access</h3>
<ul className="space-y-2 text-sm">
<li><a href="#dashboard">Dashboard</a></li>
<li><a href="#results">Results</a></li>
<li><a href="#certificates">Certificates</a></li>
<li><a href="#leaderboard">Leaderboard</a></li>
<li><a href="#announcements">Announcements</a></li>
</ul>
</motion.div>


{/* HELP */}
<motion.div variants={fade} initial="hidden" whileInView="show" custom={4}>
<h3 className="font-semibold mb-4 text-lg">Help & Support</h3>
<ul className="space-y-2 text-sm">
<li><a href="#faqs">FAQs</a></li>
<li><a href="#support">Contact Support</a></li>
<li><a href="#report">Report Issue</a></li>
<li><a href="#technical">Technical Help</a></li>
<li><a href="#privacy">Privacy Policy</a></li>
<li><a href="#terms">Terms & Conditions</a></li>
</ul>
</motion.div>

</div>


{/* ================= ROW 3 ================= */}
<div className="border-t border-orange-500 pt-6 pb-6 text-center text-sm text-orange-100">

<div className="flex flex-wrap justify-center gap-6 mb-4">

<a href="#resume">Resume Builder</a>
<a href="#mock-tests">Mock Tests</a>
<a href="#career-test">Career Test</a>
<a href="#study-abroad">Study Abroad</a>
<a href="#internships">Internships</a>
<a href="#scholarships">Scholarships</a>

</div>

<p>© 2026 Brain Serve — All Rights Reserved</p>

</div>

      </div>
    </footer>
  );
}