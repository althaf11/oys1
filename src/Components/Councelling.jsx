// // import React, { useEffect, useState } from "react";
// // import CouncellingDetail from "./CouncellingDetail";
// // import CouncellingReviews from "./CouncellingReviews";
// // import CouncellingPeople from "./CouncellingPeople";

// // export default function Councelling() {
// //  const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Simulate a page load delay
// //     const timer = setTimeout(() => setLoading(false), 1000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z50">
// //         <div className="loader"></div>
// //         <p className="mt-4 text-orange-600 font-semibold">Loading Councelling Page...</p>
// //       </div>
// //     );
// //   }
// //     return (
// //         <>
// //         <section className="bg-orange text-white py-16 px-6 md:px-20">
// //             <div className="grid md:grid-cols-2 gap-10 items-center">-
// //                 {/* Left Content */}
// //                 <div>
// //                     <h2 className="text-4xl font-bold mb-3">Discuss Your Dream Career</h2>
// //                     <div className="w-24 h-1 bg-red-600 mb-6"></div>
// //                     <p className="text-gray-300 leading-relaxed mb-8">
// //                         At BrainServe, we believe that every student deserves the opportunity to pursue their dream career. Our "Discuss Your Dream Career" service is designed to provide you with expert guidance, valuable insights, and a clear roadmap to help you transform your career aspirations into reality. We understand that the path to your ideal profession can be complex and challenging, which is why our team of experienced career counsellors is here to support you at every step of the way. With our personalized approach, we'll help you bridge the gap between your current skills and the requirements of your dream job, ensuring you're well-prepared for the exciting journey ahead.
// //                     </p>
// //                     <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold">
// //                         Talk With Our Experts
// //                     </button>
// //                 </div>

// //                 {/* Right Images */}
// //                 <div className="grid grid-cols-2 gap-10">
// //                     <img
// //                         src="/images/boy.png"
// //                         alt="Graduate"
// //                         className="rounded-lg object-cover w-36 h-36"
// //                     />
// //                     <img
// //                         src="/images/girl.png"
// //                           alt="Woman professional"
// //                         className="rounded-lg object-cover w-36 h-36"
// //                     />
// //                     <img
// //                         src="/images/man.png"
// //                         alt="Professional man"
// //                         className="rounded-lg object-cover w-36 h-36"
// //                     />
// //                     <img
// //                         src="/images/resume.png"
// //                         alt="Councelling"
// //                         className="rounded-lg object-cover w-36 h-36"
// //                     />
// //                 </div>
// //             </div>

// //         </section>
// // <CouncellingDetail/>
// // <CouncellingReviews/>
// // <CouncellingPeople/>
// //         </>
// //     );
// // }



// import React, { useEffect, useState } from "react";
// import CouncellingDetail from "./CouncellingDetail";
// import CouncellingReviews from "./CouncellingReviews";
// import CouncellingPeople from "./CouncellingPeople";
// import Footer from "./Footer";
// export default function Councelling() {
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   // Simulate a page load delay
//   //   const timer = setTimeout(() => setLoading(false), 1000);
//   //   return () => clearTimeout(timer);
//   // }, []);

//   // if (loading) {
//   //   return (
//   //     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z50">
//   //       <div className="loader"></div>
//   //       <p className="mt-4 text-orange-600 font-semibold">Loading Councelling Page...</p>
//   //     </div>
//   //   );
//   // }
//   return (
//     <>
//       <section className="bg-orange-100  text-black py-16 px-6 md:px-20">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* Left Content */}
//           <div>
//             <h2 className="text-4xl font-bold mb-3 text-orange-600">Councelling </h2>
//             <div className="w-24 h-1 bg-orange-600 mb-6"></div>
//             <p className=" text-black  leading-relaxed mb-8">
//               In today’s competitive world, the right guidance can make all the difference in shaping your career. At Yuva Sankalp Guidance, our Counselling services are designed to provide you with personalized support that aligns with your goals and aspirations. Whether you are a student exploring higher studies, a job seeker preparing for interviews, or a professional looking to upgrade your skills, our expert team is here to help. We focus on understanding your strengths, identifying opportunities, and guiding you with the right strategies so you can confidently take the next step in your career journey.
//             </p>
//             <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md font-semibold">
//               Talk With Our Experts
//             </button>
//           </div>

//           {/* Right Images */}
//           <div className="grid grid-cols-2 gap-10">
//             <img
//               src="/images/boy.png"
//               alt="Graduate"
//               className="rounded-lg object-cover w-36 h-36"
//             />
//             <img
//               src="/images/girl.png"
//               alt="Woman professional"
//               className="rounded-lg object-cover w-36 h-36"
//             />
//             <img
//               src="/images/man.png"
//               alt="Professional man"
//               className="rounded-lg object-cover w-36 h-36"
//             />
//             <img
//               src="/images/resume.png"
//               alt="CV"
//               className="rounded-lg object-cover w-36 h-36"
//             />
//           </div>
//         </div>
//       </section>
//       <CouncellingDetail />
//       <CouncellingReviews />
//       <CouncellingPeople />
//       <Footer/>
//     </>
//   );
// }




// import React from 'react';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const Councelling = () => {
//   return (
//      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
//       {/* Hero Section */}
//       <div
//         style={{
//           backgroundImage:
//             "url('https://www.verywellmind.com/thmb/uUYgTWCH5CvEUR8LZUQWMMZ_t5s=/3754x0/filters:no_upscale():max_bytes(150000):strip_icc()/career-counseling-56a0f2ae5f9b58eba4b575ac.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           height: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '60px',
//           color: '#EA580C',
//           textAlign: 'center',
//         }}className="mobile-extra-bottom"
//       >
//         <div
//           style={{
//             backgroundColor: 'rgba(0, 0, 0, 0.65)',
//             padding: '50px 40px',
//             borderRadius: '20px',
//             maxWidth: '850px',
//               color: '#EA580C',
//             boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
//           }}
//         >
//           <h1
//             style={{
//               fontSize: '40px',
//               fontWeight: '700',
//               marginBottom: '25px',
//               lineHeight: '1.3',
//               color: '#EA580C',
//             }}
//           >
//             Discover the Right Career Path with Expert Guidance
//           </h1>

//           <p
//             style={{
//               fontSize: '18px',
//               lineHeight: '1.8',
//               marginBottom: '15px',
//               color: '#f0f0f0',
//             }}
//           >
//             Choosing your career is more than just picking a job — it’s about
//             understanding your skills, strengths, and ambitions. Career counselling
//             helps students and professionals make informed choices for a bright future.
//           </p>

//           <p
//             style={{
//               fontSize: '18px',
//               lineHeight: '1.8',
//               marginBottom: '15px',
//               color: '#e0e0e0',
//             }}
//           >
//             Our experts guide you in exploring various career paths, identifying
//             opportunities, and setting realistic goals. With the right direction,
//             you can unlock your potential and build a successful career.
//           </p>

//           <p
//             style={{
//               fontSize: '18px',
//               fontStyle: 'italic',
//               marginTop: '20px',
//               color: '#FFD700',
//             }}
//           >
//             “Your career is your story — make it worth remembering.”
//           </p>
//         </div>
//       </div>

//       {/* Section Heading */}
//       <div
//         style={{
//           textAlign: 'center',
//           backgroundColor: '#ffffff',
//           padding: '70px 10% 30px 10%',
         
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '38px',
//             fontWeight: '700',
//               color: '#EA580C',
//             marginBottom: '15px',
//           }}
//         >
//           Personalized Career Guidance for Your Future
//         </h1>
//         <p
//           style={{
//             fontSize: '18px',
//             color: '#555',
//             maxWidth: '800px',
//             margin: '0 auto',
//             lineHeight: '1.8',
//           }}
//         >
//           At Brain Serve, we understand that every student’s journey is unique.
//           That’s why we offer tailored counselling services to help you choose
//           the right academic path and career direction with confidence.
//         </p>
//       </div>

//       {/* One-on-One Counselling Section */}
//       <section
//         style={{
//           backgroundColor: '#f8f9fc',
//           padding: '80px 10%',
//           display: 'flex',
//           flexWrap: 'wrap',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           textAlign: 'left',
//         color: '#EA580C',
//         }}
//       >
//         {/* Left Side Text */}
//         <div style={{ flex: '1 1 45%' }}>
//           <h2
//             style={{
//               fontSize: '34px',
//               fontWeight: '700',
//               marginBottom: '20px',
//                 color: '#EA580C',
//             }}
//           >
//             One-on-One Counselling Sessions
//           </h2>
//           <p
//             style={{
//               fontSize: '17px',
//               lineHeight: '1.8',
//               color: '#555',
//               marginBottom: '15px',
//             }}
//           >
//             Get personalized guidance through our one-on-one counselling sessions.
//             These private sessions help you understand your interests, strengths,
//             and potential career paths tailored to your unique goals.
//           </p>
//           <p
//             style={{
//               fontSize: '17px',
//               lineHeight: '1.8',
//               color: '#555',
//               marginBottom:'25px'
//             }}
//           >
//             Our experienced counsellors listen carefully, provide career assessments,
//             and help you make confident decisions about your education and professional
//             growth. Take control of your future — start your journey today!
//           </p>
//           <Link to='/contact'
//             style={{
//               marginTop: '45px',
//               background:'#ff8c00',
//                color: 'white',
//               // color: 'white',
//               padding: '12px 28px',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '16px',
//               cursor: 'pointer',
//               transition: '0.3s',
//             }}
            
            
//           >
//             Book a Session
//           </Link>
//         </div>

//         {/* Right Side Video */}
//         <div
//           style={{
//             flex: '1 1 45%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/8aDFvvjC6XM?si=Cp_1ktGzEH2-Dmbi"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//             style={{
//               borderRadius: '15px',
//               boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
//               width: '100%',
//               maxWidth: '500px',
//               height: '315px',
//             }}
//           ></iframe>
//         </div>
//       </section>




    




//           <section
//       style={{
//         background: "linear-gradient(135deg, #e6f3ff, #f9fcff)",
//         padding: "80px 5%",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* Header Section */}
//       <div
//         style={{
//           textAlign: "center",
//           marginBottom: "50px",
//           animation: "fadeInDown 1.5s ease",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "36px",
//               color: '#EA580C',
//             fontWeight: "700",
//             marginBottom: "15px",
//           }}
//         >
//           Get Personalized Career Guidance
//         </h1>
//         <p
//           style={{
//             fontSize: "18px",
//             color: "#333",
//             maxWidth: "800px",
//             margin: "0 auto",
//             lineHeight: "1.8",
//           }}
//         >
//           Discover your true potential with personalized counselling sessions. 
//           Connect with certified experts who guide you through career paths, 
//           skill-building, and the right industry choices tailored to your strengths and interests.
//         </p>
//       </div>

//       {/* Content Layout */}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: "40px",
//           animation: "fadeInUp 1.8s ease",
//         }}
//       >
//         {/* Left Side - Text & Image */}
//         <div
//           style={{
//             flex: "1 1 45%",
//             textAlign: "left",
//             animation: "zoomIn 1.5s ease",
//           }}
//         >
//           <img
//             src="https://media.istockphoto.com/id/1162102801/photo/young-businessman-cooperating-with-experienced-colleague-in-the-office.jpg?s=612x612&w=0&k=20&c=tTC9UlTFhEJtvaVALrBtFrzjzjkCsqjF1XiepbxrSSA="
//             alt="Career Guidance"
//             style={{
//               width: "100%",
//               borderRadius: "15px",
//               boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//               marginBottom: "25px",
//             }}
//           />
//           <p style={{ fontSize: "17px", color: "#333", lineHeight: "1.8" }}>
//             Personalized career guidance helps you explore job roles that fit your 
//             personality, values, and strengths. Expert mentors use assessments and 
//             one-on-one sessions to design a unique roadmap for your growth. 
//             Whether you’re aiming for higher studies or your first job, proper guidance 
//             can make your journey smooth and successful.
//           </p>
//         </div>

//         {/* Right Side - Videos */}
//         <div
//           style={{
//             flex: "1 1 50%",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {[
//             "dQw4w9WgXcQ", // Example working video
//   "5Peo-ivmupE",
//   "iik25wqIuFo",
//           ].map((videoId, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "15px",
//                 boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 animation: `fadeIn 1s ease ${index * 0.3}s`,
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.transform = "translateY(-8px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 10px 20px rgba(0,0,0,0.2)";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 18px rgba(0,0,0,0.1)";
//               }}
//             >
//               <iframe
//                 width="100%"
//                 height="200"
//                 src={`https://www.youtube.com/embed/${videoId}`}
//                 title={`Career Guidance Video ${index + 1}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//               ></iframe>
//               <div
//                 style={{
//                   padding: "12px",
//                   fontWeight: "600",
//                     color: '#EA580C',
//                 }}
//               >
//                 Career Guidance Session #{index + 1}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeInDown {
//             from { opacity: 0; transform: translateY(-30px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(30px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes zoomIn {
//             from { opacity: 0; transform: scale(0.8); }
//             to { opacity: 1; transform: scale(1); }
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//         `}
//       </style>
//     </section>


 
//     <section
//       style={{
//         background:
//           "linear-gradient(135deg, #f3f7ff, #e8f1ff, #f0f9ff, #dce9ff)",
//         padding: "100px 6%",
//         fontFamily: "Poppins, sans-serif",
//         textAlign: "center",
//         overflow: "hidden",
//         animation: "bgMove 10s ease-in-out infinite alternate",
//         transition: "all 0.5s ease-in-out",
//       }}
//     >
//       {/* Heading */}
//       <h1
//         style={{
//           fontSize: "42px",
//           fontWeight: "800",
//             color: '#EA580C',
//           marginBottom: "25px",
//           letterSpacing: "1px",
//           textShadow: "2px 3px 8px rgba(0,0,0,0.1)",
//           animation: "fadeSlideDown 1.5s ease",
//         }}
//       >
//         Mock HR Interviews & Preparation Support
//       </h1>

//       {/* Description */}
//       <p
//         style={{
//           fontSize: "18px",
//           color: "#333",
//           lineHeight: "1.8",
//           maxWidth: "850px",
//           margin: "0 auto 60px",
//           animation: "fadeIn 2s ease",
//           transition: "color 0.3s ease",
//         }}
//       >
//         Step into your dream job interviews with confidence! Our mock HR sessions
//         give you real-world exposure — helping you improve communication,
//         strengthen your answers, and enhance your overall personality. Watch these
//         handpicked HR interview simulations to boost your preparation and
//         performance.
//       </p>

//       {/* Video Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           gap: "35px",
//           justifyContent: "center",
//           alignItems: "stretch",
//           animation: "fadeInUp 2s ease",
//         }}
//       >
//         {[
//           "mpFv2_wz4Wk",
//           "GJOj4f20_Zg",
//           "vo-E__zJ-vY",
//           "55VasuxhzBk",
//         ].map((videoId, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#ffffff",
//               borderRadius: "20px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//               overflow: "hidden",
//               transition: "all 0.4s ease",
//               transform: "translateY(0)",
//               animation: `zoomIn 1s ease ${index * 0.3}s both`,
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
//               e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "translateY(0) scale(1)";
//               e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
//             }}
//           >
//             <iframe
//               width="100%"
//               height="230"
//               src={`https://www.youtube.com/embed/${videoId}`}
//               title={`HR Interview Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//               style={{
//                 border: "none",
//                 transition: "transform 0.4s ease",
//               }}
//             ></iframe>
//             <div
//               style={{
//                 padding: "15px 10px 20px",
//                 color: '#EA580C',
//                 fontWeight: "600",
//                 fontSize: "17px",
//                 transition: "color 0.3s ease",
//               }}
//             >
//               HR Interview Training #{index + 1}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Section */}
//       <div
//         style={{
//           marginTop: "90px",
//           background: "#EA580C",
//           color: "white",
//           padding: "50px",
//           borderRadius: "25px",
//           animation: "fadeInUp 2s ease",
//           transition: "background 0.5s ease",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "30px",
//             fontWeight: "700",
//             marginBottom: "15px",
//           }}
//         >
//           🚀 Ready to Ace Your Next HR Interview?
//         </h2>
//         <p
//           style={{
//             fontSize: "18px",
//             lineHeight: "1.8",
//             maxWidth: "700px",
//             margin: "0 auto",
//           }}
//         >
//           Book a live HR mock interview with our experts, receive personalized
//           feedback, and sharpen your answers for success. The more you practice,
//           the more confident you become!
//         </p>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeSlideDown {
//             from { opacity: 0; transform: translateY(-50px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(60px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }

//           @keyframes zoomIn {
//             from { opacity: 0; transform: scale(0.8); }
//             to { opacity: 1; transform: scale(1); }
//           }

//           @keyframes bgMove {
//             0% { background-position: 0% 50%; }
//             100% { background-position: 100% 50%; }
//           }
//         `}
//       </style>
//     </section>

     

 
//     <section
//       style={{
//         background: "linear-gradient(135deg, #fff5f7, #e6f0ff)",
//         padding: "80px 5%",
//         fontFamily: "Poppins, sans-serif",
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Heading */}
//       <h1
//         style={{
//           fontSize: "38px",
//           fontWeight: "700",
//           color: "#EA580C",
//           marginBottom: "20px",
//           animation: "fadeInDown 1.2s ease",
//         }}
//       >
//         Career Planning & Goal Setting
//       </h1>

//       <h2
//         style={{
//           fontSize: "26px",
//           fontWeight: "600",
//             color: '#EA580C',
//           marginBottom: "40px",
//           animation: "fadeIn 1.8s ease",
//         }}
//       >
//         Continuous Expert Support Throughout Your Journey
//       </h2>

//       <p
//         style={{
//           fontSize: "18px",
//           color: "#333",
//           lineHeight: "1.8",
//           maxWidth: "850px",
//           margin: "0 auto 60px",
//           animation: "fadeInUp 1.5s ease",
//         }}
//       >
//         Build your dream career with a clear vision and achievable milestones. 
//         Our mentors help you plan every step — from identifying your strengths 
//         and setting smart goals to staying on track through personalized support 
//         and continuous guidance.
//       </p>

//       {/* Content Cards Section */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "25px",
//           justifyContent: "center",
//           alignItems: "stretch",
//           animation: "fadeInUp 2s ease",
//         }}
//       >
//         {[
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/5538/5538105.png",
//             title: "🎯 Define Your Goals",
//             desc: "Set short-term and long-term career goals with guidance from top mentors who understand your aspirations.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
//             title: "🧭 Personalized Roadmaps",
//             desc: "Get customized career orangeprints designed to help you navigate education, internships, and job roles effectively.",
//           },
//           {
//             img: "https://cdn-icons-png.flaticon.com/512/4892/4892929.png",
//             title: "🤝 Ongoing Expert Support",
//             desc: "Connect regularly with experts to track your growth, refine your path, and stay motivated throughout your journey.",
//           },
//         ].map((card, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "white",
//               borderRadius: "15px",
//               boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//               overflow: "hidden",
//               padding: "30px 20px",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               animation: `zoomIn 1s ease ${index * 0.2}s`,
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "translateY(-10px)";
//               e.currentTarget.style.boxShadow =
//                 "0 10px 25px rgba(0,0,0,0.2)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 18px rgba(0,0,0,0.1)";
//             }}
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 objectFit: "contain",
//                 marginBottom: "20px",
//                 marginLeft:'100px',
//                 animation: "float 3s ease-in-out infinite",
//               }}
//             />
//             <h3
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "700",
//                  color: '#EA580C',
//                 marginBottom: "10px",
//               }}
//             >
//               {card.title}
//             </h3>
//             <p
//               style={{
//                 color: "#555",
//                 fontSize: "16px",
//                 lineHeight: "1.6",
//               }}
//             >
//               {card.desc}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Motivational End Section */}
//       <div
//         style={{
//           marginTop: "70px",
//           background: "#e6e6fa",
//           color: "black",
//           padding: "40px",
//           borderRadius: "20px",
//           animation: "fadeInUp 2s ease",
//         }}
//       >
//         <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
//           🌟 Start Building Your Future Today!
//         </h2>
//         <p
//           style={{
//             fontSize: "17px",
//             lineHeight: "1.8",
//             maxWidth: "700px",
//             margin: "0 auto",
//           }}
//         >
//           With consistent expert support and clear career goals, you can turn your 
//           ambitions into achievements. Let’s walk this journey together — 
//           from planning to success!
//         </p>
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeInDown {
//             from { opacity: 0; transform: translateY(-30px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(40px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           @keyframes zoomIn {
//             from { opacity: 0; transform: scale(0.8); }
//             to { opacity: 1; transform: scale(1); }
//           }
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//           }
//         `}
//       </style>
//     </section>
// <Footer/>

//     </div>
//   );
// };

// export default Councelling;



import React, { useState } from "react";
import { Star, Users, Briefcase, Mic, Award, FileText } from "lucide-react";
import Footer from'./Footer'
export default function CareerCounselling() {
  const [openModal, setOpenModal] = useState(false);

  const cards = [
    {
      title: "Personality Development",
      desc: "Boost confidence, body language & personal branding.",
      rating: "4.8",
      icon: <Users className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Career Guidance",
      desc: "Choose the right career path with expert mentors.",
      rating: "4.7",
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews + HR & technical training.",
      rating: "4.9",
      icon: <Mic className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Communication Skills",
      desc: "Improve speaking & presentation skills.",
      rating: "4.6",
      icon: <Award className="w-8 h-8 text-pink-600" />,
    },
    {
      title: "Leadership Skills",
      desc: "Build leadership mindset & decision making.",
      rating: "4.7",
      icon: <Users className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Resume Building",
      desc: "Create ATS-friendly resumes for top companies.",
      rating: "4.9",
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Transform Your Career 🚀
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Personalized counselling to help you achieve your dream career.
        </p>
      </section>

      {/* SEARCH */}
      <div className="flex justify-center -mt-10 px-4">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full max-w-xl p-4 rounded-2xl shadow-lg border border-gray-200 focus:outline-none"
        />
      </div>

      {/* CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-4">
              {card.icon}
              <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                <Star size={16} /> {card.rating}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition">
              {card.title}
            </h3>

            <p className="text-gray-600 text-sm mb-5">{card.desc}</p>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => setOpenModal(true)}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl text-sm"
              >
                Virtual
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="flex-1 bg-gray-900 hover:bg-black text-white py-2 rounded-xl text-sm"
              >
                On Call
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-orange-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Students Say 💬
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Rahul Kumar",
              role: "B.Tech Student",
              text: "This platform completely changed my confidence level. The mentorship was amazing!",
            },
            {
              name: "Ayesha Khan",
              role: "MBA Aspirant",
              text: "Career guidance helped me choose the right path. Highly recommended!",
            },
            {
              name: "Suresh Reddy",
              role: "Job Seeker",
              text: "Interview preparation sessions were super useful. Got placed within a month!",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-4 bg-orange-600 text-white p-2 rounded-full text-sm shadow">
                “
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-3 mt-4">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
              </div>

              <p className="text-gray-600 italic mb-5">{review.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-indigo-500 text-white flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">
              Book a Session
            </h2>

            <form className="space-y-3">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
              <input type="text" placeholder="College Name" className="w-full p-2 border rounded" />
              <input type="tel" placeholder="Mobile Number" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />

              <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-lg mt-2">
                Submit
              </button>
            </form>

            <button onClick={() => setOpenModal(false)} className="mt-4 w-full text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
