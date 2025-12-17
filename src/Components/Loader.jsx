// import React from "react";

// export default function Loader() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );
// }



import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Boy Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1738449258749-b469ee3ee269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxjYXJ0b29uJTIwYm95fGVufDB8fDB8fHww" // ✅ cartoon boy with graduation
        alt="Graduate Boy"
        className="w-40 md:w-48"
      />

      {/* Hat Animation */}
      <motion.img
        src="https://images.template.net/495677/Graduation-Cap-Clipart-edit-online.png" // ✅ hat image
        alt="Graduation Hat"
        className="absolute w-20 md:w-24"
        initial={{ y: 0 }}
        animate={{
          y: [0, -140, 0],
          rotate: [0, -360, -720],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.8,
          ease: ["easeOut", "easeIn"],
        }}
        style={{ top: "42%", left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Loading Text */}
      <motion.p
        className="absolute bottom-10 text-pink-600 font-semibold text-lg"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
