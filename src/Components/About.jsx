import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
  className="relative text-orange-500 py-20 text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      " url('https://wallpapers.com/images/hd/graduation-background-3bvndlklelxz5mc9.jpg')",
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
    Empowering learners with high-quality, accessible education for a brighter tomorrow.
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
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To make quality education accessible to everyone through technology-driven solutions,
              engaging content, and continuous innovation. We strive to inspire curiosity, promote
              collaboration, and support learners at every stage of their journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-xl p-8 border-l-4 border-orange-500"
          >
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading educational platform that nurtures innovation, creativity, and
              lifelong learning — empowering individuals to thrive in a digital-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-orange-600 mb-8"
        >
          Our Journey
        </motion.h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-4">
          Founded with the belief that learning should be accessible to all, our portal began as a
          small initiative to support students in rural and urban areas alike.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Today, we’ve grown into a trusted digital education platform, offering structured courses,
          mentorship programs, and community-driven learning experiences for thousands of learners.
        </p>
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
                <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
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
          Be part of a global movement shaping the future of learning. Whether you're a student or
          an educator — your journey begins here.
        </p>
        <Link
          to="/contact"
          className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;
