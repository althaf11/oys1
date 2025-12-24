// // Home.jsx
// import React, { useState, useEffect } from "react";
// import Hero from "./Hero";
// import Paths from "./Paths";
// import Features from "./Features";
// import Footer from "./Footer";
// import Loader from "./Loader";
// // import "../"; // Make sure your loader CSS is imported

// const Home = () => {
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   // Simulate a page load delay
//   //   const timer = setTimeout(() => setLoading(false), 4000);
//   //   return () => clearTimeout(timer);
//   // }, []);

//   // if (loading) {
//   //   return (
//   //     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
       
//   //       <Loader/>
//   //       <p className="mt-4 text-orange-600 font-semibold">Loading Home Page...</p>
//   //     </div>
//   //   );
//   // }

//   return (
//     <>
//       <Hero />
//       <Paths />
//       <Features />
//       <Footer />
//     </>
//   );
// };

// export default Home;




import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaFileAlt,
  FaComments,
  FaTimes,
} from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CareerMapping from "./CareerMapipng";
import LoginPage from "./LoginPage";

const Home = () => {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  

// Login Page
useEffect(() => {
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (!loggedIn) {
    setShowLogin(true);
  }
}, []);

  // Infinite scroll animation for news feed
  useEffect(() => {
    if (!isVisible) return;
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.6; // adjust speed here

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  }, [isVisible]);

  const scrollItems = [
    "📢 Latest Internship Openings",
    "💻 Upcoming Hackathon - Nov 15",
    "🎯 AI Crash Course Starting Soon",
    "📄 Resume Booster Tips Released",
    "🧠 Mock Test Results Published",
    "🎓 Scholarship Deadline Approaching",
    "💼 Career Fair 2025 - Register Now",
    "🏢 Placement Drive: Infosys & TCS Hiring!",
  ];

  const services = [
    {
      icon: <FaFileAlt size={40} className="text-orange-600 mx-auto mb-4" />,
      title: "CV & Resume Building",
      desc: "Stand out from the crowd with a professionally crafted resume tailored to your career goals.",
      link: "/services/resume",
    },
    {
      icon: <FaUsers size={40} className="text-orange-600 mx-auto mb-4" />,
      title: "Career Counselling",
      desc: "Our experts guide you to the right career path aligned with your skills and aspirations.",
      link: "/services/career-counseling",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-orange-600 mx-auto mb-4" />,
      title: "Interview Training",
      desc: "Build confidence and master interview techniques with HR professionals.",
      link: "/services/interview-training",
    },
    {
      icon: <FaComments size={40} className="text-orange-600 mx-auto mb-4" />,
      title: "Soft Skills Development",
      desc: "Develop essential communication, leadership, and teamwork skills.",
      link: "/services/crash-courses",
    },
    {
      icon: <FaUsers size={40} className="text-orange-600 mx-auto mb-4" />,
      title: "Placement Preparation",
      desc: "Excel in aptitude, GDs, and company-specific interview rounds.",
      link: "/services/e-learning",
    },
    {
      icon: <FaFileAlt size={40} className="text-orange-600 mx-auto mb-4" />,
      title: "Workshops & Webinars",
      desc: "Participate in live sessions with industry leaders and gain valuable insights.",
      link: "/services/e-calendar",
    },
  ];

  const loanAds = [
    {
      id: 1,
      title: "Student Loan up to ₹20 Lakhs",
      desc: "Low interest rates and instant approval for higher education loans. Apply easily online!",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20250423/pngtree-the-weight-of-student-loans-image_17215408.jpg",
      link: "https://yourloanpartner.com",
    },
    {
      id: 2,
      title: "Study Abroad Loan Simplified",
      desc: "No collateral required for top universities abroad. Fast-track approval for your dream studies.",
      img: "https://contentstatic.techgig.com/photo/114856057/want-to-study-abroad-here-are-lesser-known-facts-about-the-uk-us-and-canada.jpg?159739",
      link: "https://yourloanpartner.com/abroad",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col relative">
      {/* Hero Section */}
     <section
  className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(255, 102, 0, 0.7), rgba(255, 69, 0, 0.7)), url('https://wallpapers.com/images/hd/graduation-background-lpl397uvkjua4l06.jpg')",
  }}
>
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg"
  >
    Empowering Youth for a Brighter Tomorrow
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-lg sm:text-xl max-w-2xl drop-shadow-md"
  >
    Operation Yuva Sankalp helps students grow through skill development,
    career counselling, and placement support.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="mt-6"
  >
    <Link
      to="/about"
      className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
    >
      Learn More
    </Link>
  </motion.div>
</section>


      {/* Infinite Scrolling Pop-up News Feed (Right Side) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-24 right-0 w-72 h-[70vh] bg-white shadow-2xl rounded-l-2xl border-l border-orange-500 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-orange-600 text-white p-3">
              <h3 className="text-lg font-semibold">Latest Updates</h3>
              <button onClick={() => setIsVisible(false)}>
                <FaTimes size={18} />
              </button>
            </div>

            {/* Auto-scroll content */}
            <div
              ref={scrollRef}
              className="overflow-y-hidden h-full flex flex-col text-center text-sm font-medium text-gray-800"
            >
              {[...scrollItems, ...scrollItems].map((item, index) => (
                <div
                  key={index}
                  className="py-3 border-b border-gray-100 hover:bg-orange-50 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <section className="py-12 px-6">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center text-gray-800 mb-8"
  >
    Our Services
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2, // delay between each card
        },
      },
    }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {services.map((service, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex justify-center mb-3 text-orange-600 text-4xl">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-center mb-4">{service.desc}</p>
        <div className="text-center">
          <Link
            to={service.link}
            className="text-orange-600 font-medium hover:underline"
          >
            Learn More →
          </Link>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

<CareerMapping/>
      {/* Loan Ads Section */}
     <section className="bg-white py-12 px-6">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center text-gray-800 mb-8"
  >
    Student Loan Offers
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.2 },
      },
    }}
    className="flex flex-wrap justify-center gap-12 sm:gap-16" // ✅ Increased spacing
  >
    {loanAds.map((loan) => (
      <motion.a
        key={loan.id}
        href={loan.link}
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-full sm:w-[340px] md:w-[360px] max-w-sm"
      >
        <img
          src={loan.img}
          alt={loan.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800">
            {loan.title}
          </h3>
          <p className="text-gray-600 mt-2">{loan.desc}</p>
        </div>
      </motion.a>
    ))}
  </motion.div>
</section>

{/* {showLogin && <LoginPage onClose={() => setShowLogin(false)} />} */}

 
   

      <Footer />
    </div>
  );
};

export default Home;















