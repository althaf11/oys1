import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const categories = {
  Events: [
    { id: 1, src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df", caption: "Cultural Festival Highlights" },
    { id: 2, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", caption: "Technology Expo" },
    { id: 3, src: "https://images.unsplash.com/photo-1532619675605-1ede6e7f0a0c", caption: "Coding Marathon" },
    { id: 4, src: "https://images.unsplash.com/photo-1532634896-26909d0d4b2b", caption: "Annual Celebration" },
    { id: 5, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0", caption: "Cultural Night" },
    { id: 6, src: "https://images.unsplash.com/photo-1542744095-291d1f67b221", caption: "Tech Fest Opening Ceremony" },
    { id: 7, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", caption: "Team Workshops" },
    { id: 8, src: "https://images.unsplash.com/photo-1515169067865-5387ec356754", caption: "Student Meet & Greet" },
  ],
  Achievements: [
    { id: 9, src: "https://images.unsplash.com/photo-1603570417030-650c5d77b0c8", caption: "Top Performer Award" },
    { id: 10, src: "https://images.unsplash.com/photo-1558684483-5274956f0c84", caption: "Innovation Challenge Winners" },
    { id: 11, src: "https://images.unsplash.com/photo-1603570417030-650c5d77b0c8", caption: "Research Recognition" },
    { id: 12, src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61", caption: "Best Team Collaboration" },
    { id: 13, src: "https://images.unsplash.com/photo-1544717305-2782549b5136", caption: "Sports Champions" },
    { id: 14, src: "https://images.unsplash.com/photo-1581092334494-44b41b5f8d5c", caption: "Social Impact Awards" },
    { id: 15, src: "https://images.unsplash.com/photo-1581091870639-97dfc0f763b4", caption: "Academic Excellence" },
    { id: 16, src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c", caption: "Outstanding Leadership" },
  ],
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Events");

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 py-12 px-6">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-6 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-4xl mx-auto text-center text-gray-600 mb-12 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to the <span className="text-orange-600 font-semibold">Operation Yuva Sankalp Gallery</span> — a vivid showcase of our
          remarkable <span className="font-semibold text-orange-600">events and achievements</span>.  
          Here, we capture the essence of our journey — from the energy of cultural festivals and tech expos  
          to the pride of awards and recognitions that celebrate excellence, teamwork, and growth.
        </motion.p>

        {/* Category Buttons */}
        <div className="flex justify-center mb-10 flex-wrap gap-4">
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1, backgroundColor: "#ea580c", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-orange-100 text-orange-600 hover:bg-orange-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, duration: 0.5 },
            },
          }}
        >
          {categories[activeCategory].map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-lg font-semibold text-center px-4">{image.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extended Description */}
        <motion.div
          className="max-w-5xl mx-auto mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Celebrating Our Journey of Success
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Each photograph represents more than a moment — it tells a story of hard work, dedication,  
            and the vibrant community spirit that defines <span className="text-orange-600 font-semibold">Operation Yuva Sankalp</span>.  
            From grand cultural events to proud achievements, these memories remind us of our shared goals  
            and inspire us to reach new heights together.
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
