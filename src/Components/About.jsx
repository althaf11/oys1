import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  const [openState, setOpenState] = useState(null);
  const [userState, setUserState] = useState(null);

  const statesData = [
    {
      state: "Andhra Pradesh",
      colleges: [
        "Sri Chaitanya College",
        "Narayana Engineering College",
        "Vignan University",
      ],
    },
    {
      state: "Telangana",
      colleges: [
        "Osmania University",
        "CBIT Hyderabad",
        "Vasavi College of Engineering",
      ],
    },
    {
      state: "Tamil Nadu",
      colleges: ["Your location is mismatched"],
    },
    {
      state: "Karnataka",
      colleges: [
        "RV College of Engineering",
        "BMS College of Engineering",
        "PES University",
      ],
    },
    {
      state: "Maharashtra",
      colleges: ["IIT Bombay", "COEP Pune", "VJTI Mumbai"],
    },
  ];

  const [count, setCount] = useState(10000);

  useEffect(() => {
    // Counter animation
    let start = 10000;
    const end = 50000;
    const duration = 2500; // 2.5 seconds
    const incrementTime = 20;
    const increment = (end - start) / (duration / incrementTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    // Detect user state using Geolocation
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const state = data.address.state || data.address.region;
          setUserState(state);
        } catch (err) {
          console.error(err);
        }
      },
      () => {
        console.log("Location access denied");
      }
    );
  }, []);

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="relative text-orange-500 py-20 text-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/hd/graduation-background-3bvndlklelxz5mc9.jpg')",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Our Educational Portal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Empowering learners with high-quality, accessible education for a
            brighter tomorrow.
          </motion.p>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-md rounded-xl p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To make quality education accessible to everyone through
                technology-driven solutions, engaging content, and continuous
                innovation. We strive to inspire curiosity, promote
                collaboration, and support learners at every stage of their
                journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-md rounded-xl p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational platform that nurtures innovation,
                creativity, and lifelong learning — empowering individuals to
                thrive in a digital-first world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* State Presence Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-orange-600 text-center mb-10"
            >
              Our Presence Across States
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {statesData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 border-l-4 border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <button
                    onClick={() => {
                      if (!userState) {
                        alert(
                          "Unable to detect your location. Please allow location access."
                        );
                        return;
                      }
                      if (
                        userState.toLowerCase().includes(item.state.toLowerCase())
                      ) {
                        setOpenState(openState === index ? null : index);
                      } else {
                        alert(
                          `You are currently in ${userState}. Our colleges listed here are for ${item.state}.`
                        );
                      }
                    }}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.state}
                    </h3>
                    <span className="text-orange-600 font-bold text-xl">
                      {openState === index ? "−" : "+"}
                    </span>
                  </button>

                  {openState === index && (
                    <ul className="mt-4 space-y-2 text-gray-700">
                      {item.colleges.map((college, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="font-semibold text-orange-600">
                            {i + 1}.
                          </span>
                          {college}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider & Guidance Journey Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-orange-600 mb-4"
            >
              Our Guidance Journey
            </motion.h2>

            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
              Over the years, OYS has guided thousands of learners through a
              structured and result-oriented learning path — empowering students
              to achieve clarity, confidence, and career success.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "Career Awareness & Counseling",
                  desc: "Helping students identify the right career path through expert guidance and assessments.",
                },
                {
                  title: "Skill-Based Learning Programs",
                  desc: "Delivering industry-relevant skills with practical, hands-on training modules.",
                },
                {
                  title: "Mentorship & Continuous Support",
                  desc: "Providing one-on-one mentorship and doubt-clearing sessions throughout the journey.",
                },
                {
                  title: "Placement & Growth Assistance",
                  desc: "Supporting learners with interview preparation, resume building, and career growth.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-md flex gap-4"
                >
                  <div className="text-orange-600 font-bold text-2xl">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Students Guided Counter Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-orange-600 mb-4"
            >
              Our Impact So Far
            </motion.h2>

            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
              We are proud to have guided thousands of students across multiple
              states, helping them build skills, confidence, and successful
              careers.
            </p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl shadow-md p-10 inline-block"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-orange-600">
                {count.toLocaleString()}+
              </h3>

              <p className="text-gray-600 text-lg mt-2">
                Students Guided Successfully
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-orange-600 mb-10"
            >
              Meet Our Team
            </motion.h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Dr. Ayesha Sharma",
                  role: "Founder & Academic Director",
                  img: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                {
                  name: "Rajesh Kumar",
                  role: "Head of Technology",
                  img: "https://randomuser.me/api/portraits/men/75.jpg",
                },
                {
                  name: "Neha Verma",
                  role: "Learning Experience Designer",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-16 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Join Our Learning Community
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Be part of a global movement shaping the future of learning. Whether
            you're a student or an educator — your journey begins here.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
