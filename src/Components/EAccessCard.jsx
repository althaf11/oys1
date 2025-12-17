// import React from "react";
// import { motion } from "framer-motion";
// import { Gift, GraduationCap, Briefcase, RefreshCw, Clock } from "lucide-react";
// import Footer from "./Footer";
// // import eaccescard from "./"; // adjust the path if needed

// const EAccessCard = () => {
//   return (
//     <>
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex flex-col items-center justify-center p-6">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-bold text-orange-700 mb-8 text-center"
//       >
//         E-Access Card
//       </motion.h1>

//       {/* Card Display */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative shadow-2xl rounded-2xl overflow-hidden bg-white p-3"
//       >
//         <img
//           src='eaccesscard.png'
//           alt="E-Access Card"
//           className="rounded-xl w-full  object-cover shadow-lg"
//         />
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-orange-100 opacity-10"></div>
//       </motion.div>

//       {/* Card Info */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.2, duration: 0.6 }}
    //     className="mt-6 text-center max-w-4xl"
    //   >
    //     <p className="text-gray-700 text-base md:text-2xl leading-relaxed">
    //       The <span className="font-semibold text-orange-700">E-Access Card</span> gives
    //       students special privileges — including discounts on institute courses,
    //       support for higher education and loans, and the opportunity to attend{" "}
    //       <span className="font-semibold text-orange-700">20+ interviews</span> with
    //       partnered companies.
    //     </p>
    //     <div className="mt-4 text-lg text-gray-600">
    //       <Clock className="inline w-5 h-5 text-orange-600 mr-1" />
    //       Validity: <span className="font-medium">1 Year</span> — Physical card also provided.
    //       After one year, renewal is required to continue benefits.
    //     </div>
    //   </motion.div>

    //   {/* Benefits Section */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 w-full max-w-4xl">
    //     <motion.div
    //       whileHover={{ scale: 1.05 }}
    //       className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all"
    //     >
    //       <Gift className="text-orange-600 w-8 h-8" />
    //       <div>
    //         <h4 className="font-bold text-2xl text-orange-700">Exclusive Discounts</h4>
    //         <p className="text-gray-600 text-lg">
    //           Get discounts on institute courses and premium educational programs.
    //         </p>
    //       </div>
    //     </motion.div>

    //     <motion.div
    //       whileHover={{ scale: 1.05 }}
    //       className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all"
    //     >
    //       <GraduationCap className="text-orange-600 w-8 h-8" />
    //       <div>
    //         <h4 className="font-bold text-2xl text-orange-700">Education Loans</h4>
    //         <p className="text-gray-600 text-lg">
    //           Avail student-friendly loans from partnered financial institutions.
    //         </p>
    //       </div>
    //     </motion.div>

    //     <motion.div
    //       whileHover={{ scale: 1.05 }}
    //       className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all"
    //     >
    //       <Briefcase className="text-orange-600 w-8 h-8" />
    //       <div>
    //         <h4 className="font-bold text-2xl text-orange-700">Career Opportunities</h4>
    //         <p className="text-gray-600 text-lg">
    //           Attend 20+ interviews with selected companies through our exclusive network.
    //         </p>
    //       </div>
    //     </motion.div>

    //     <motion.div
    //       whileHover={{ scale: 1.05 }}
    //       className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all"
    //     >
    //       <RefreshCw className="text-orange-600 w-8 h-8" />
    //       <div>
    //         <h4 className="font-bold text-2xl text-orange-700">Easy Renewal</h4>
    //         <p className="text-gray-600 text-lg">
    //           After one year, easily renew your card online to extend all benefits.
    //         </p>
    //       </div>
    //     </motion.div>
    //   </div>

    //   {/* Footer */}
      
    // </div>
    // <Footer/>
//     </>
//   );
// };

// export default EAccessCard;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift, GraduationCap, Briefcase, RefreshCw, Clock, Monitor } from "lucide-react";
import Footer from "./Footer";

const InfoSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="mt-6 text-center max-w-4xl "
  >
    <p className="text-gray-700 text-base md:text-2xl leading-relaxed bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
      The{" "}
      <span className="font-semibold text-orange-700 ">E-Access Card</span>{" "}
      gives students special privileges — including discounts on institute
      courses, support for higher education and loans, and the opportunity
      to attend{" "}
      <span className="font-semibold text-orange-700">20+ interviews</span>{" "}
      with partnered companies.
    </p>
    <div className="mt-4 text-lg text-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
      <Clock className="inline w-5 h-5 text-orange-600 mr-1 " />
      Validity: <span className="font-medium">1 Year</span> — Physical card
      also provided. After one year, renewal is required to continue benefits.
    </div>
  </motion.div>
);

export default function EAccessCard() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !photo) {
      alert("Please enter your name and upload a photo before generating the card!");
      return;
    }
    setShowCard(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
        {/* --- Info Section --- */}
        <InfoSection />

        {/* --- Form + Card Side by Side --- */}
        <div className="flex flex-wrap justify-center items-start gap-6 mt-8 w-full max-w-5xl ">
          {/* --- Form --- */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-[400px] bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
              Operation Yuva Sankalp – Card Generator
            </h2>

            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="w-full border p-2 rounded-lg mb-4 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
            />

            <label className="block mb-2 font-medium">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mb-4 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
            >
              Generate Card
            </button>
          </form>

          {/* --- Generated Card Beside Form --- */}
          {showCard && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4"
            >
              {/* Left Card (User) */}
              <div className="bg-white shadow-lg rounded-xl w-[380px] p-5 flex flex-col justify-between border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgIdhQh82B9GSWBv4bKPkIjn30IhEg32fuQ&s"
                      alt="OYS Logo"
                      className="w-12 h-12 mr-2"
                    />
                    <div>
                      <p className="text-orange-600 font-semibold text-lg">OYS</p>
                      <p className="text-gray-600 text-sm">Operation Yuva Sankalp</p>
                    </div>
                  </div>
                  <p className="text-xs text-orange-600 font-semibold">2025</p>
                </div>

                <hr className="my-3 border-orange-200" />

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-700 font-medium text-sm mb-1">
                      CARD HOLDER
                    </p>
                    <p className="text-black font-semibold text-lg mb-2">
                      {name}
                    </p>

                    <p className="text-gray-700 font-medium text-sm">CARD ID</p>
                    <p className="text-black font-semibold text-md">
                      OYS-2025-0001
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src={photo}
                      alt="Uploaded"
                      className="w-24 h-28 rounded-lg object-cover border shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Right Card (Static Info) */}
              <div className="bg-white shadow-lg rounded-xl w-[380px] p-5 flex flex-col justify-between border border-gray-200">
                <div>
                  <p className="text-orange-600 text-xs font-semibold mb-1">
                    ADDRESS
                  </p>
                  <p className="text-black font-semibold text-sm mb-4">
                    Madhapur, Hyderabad
                  </p>

                  <p className="text-orange-600 text-xs font-semibold mb-1">
                    EMAIL
                  </p>
                  <p className="text-black font-semibold text-sm mb-4">
                    brainserve@gmail.com
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://www.operationyuvasankalp.com"
                        alt="QR Code"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-semibold">WEBSITE</p>
                      <a
                        href="https://www.operationyuvasankalp.com"
                        className="text-blue-600 text-sm font-medium"
                      >
                        www.operationyuvasankalp.com
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-right text-orange-600 text-xs font-semibold mt-4">
                  Valid Till: Dec 2026
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* --- Benefits Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-full max-w-6xl  ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
          >
            <Gift className="text-orange-600 w-14 h-14" />
            <div className="mt-3">
              <h4 className="font-bold text-xl  text-orange-700">
                Exclusive Discounts
              </h4>
              <p className="text-gray-600 md:text-lg">
                Get discounts on institute courses and premium educational programs.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
          >
            <GraduationCap className="text-orange-600 w-14 h-14" />
            <div className="mt-3">
              <h4 className="font-bold text-xl text-orange-700">Education Loans</h4>
              <p className="text-gray-600 md:text-lg">
                Avail student-friendly loans from partnered financial institutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
          >
            <Briefcase className="text-orange-600 w-14 h-14" />
            <div className="mt-3">
              <h4 className="font-bold text-xl text-orange-700">Career Opportunities</h4>
              <p className="text-gray-600 md:text-lg">
                Attend 20+ interviews with selected companies through our exclusive network.
              </p>
            </div>
          </motion.div>

          
        </div>














        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-full  max-w-6xl lg:ml-96 ">
          
<motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
          >
            <RefreshCw className="text-orange-600 w-14 h-14" />
            <div className="mt-3">
              <h4 className="font-bold text-xl text-orange-700">Easy Renewal</h4>
              <p className="text-gray-600 md:text-lg">
                After one year, easily renew your card online to extend all benefits.
              </p>
            </div>
          </motion.div>


           <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-all bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow"
          >
            <Monitor className="text-orange-600 w-14 h-14" />
            <div className="mt-3">
              <h4 className="font-bold text-xl text-orange-700">Skill Sprint</h4>
              <p className="text-gray-600 md:text-lg">
              Get vendor-specific learning modules with mock tests, coding practice, and interview tips
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  );
}

