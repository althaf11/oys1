// import React, { useEffect, useState } from "react";

// const materialsData = {
//   cse: [
//     { title: "Data Structures in C", link: "#" },
//     { title: "Algorithms Made Easy", link: "#" },
//     { title: "Database Management Systems", link: "#" },
//     { title: "Operating Systems", link: "#" },
//     { title: "Computer Networks", link: "#" },
//     { title: "Artificial Intelligence", link: "#" },
//     { title: "Machine Learning Basics", link: "#" },
//     { title: "Web Development with React", link: "#" },
//     { title: "Compiler Design", link: "#" },
//     { title: "Software Engineering", link: "#" },
//   ],
//   civil: [
//     { title: "Engineering Mechanics", link: "#" },
//     { title: "Structural Analysis", link: "#" },
//     { title: "Concrete Technology", link: "#" },
//     { title: "Geotechnical Engineering", link: "#" },
//     { title: "Environmental Engineering", link: "#" },
//     { title: "Surveying", link: "#" },
//     { title: "Transportation Engineering", link: "#" },
//     { title: "Hydrology", link: "#" },
//     { title: "Irrigation Engineering", link: "#" },
//     { title: "Building Materials", link: "#" },
//   ],
//   mechanical: [
//     { title: "Thermodynamics", link: "#" },
//     { title: "Fluid Mechanics", link: "#" },
//     { title: "Heat Transfer", link: "#" },
//     { title: "Dynamics of Machinery", link: "#" },
//     { title: "Strength of Materials", link: "#" },
//     { title: "Engineering Drawing", link: "#" },
//     { title: "Manufacturing Technology", link: "#" },
//     { title: "Machine Design", link: "#" },
//     { title: "Refrigeration & Air Conditioning", link: "#" },
//     { title: "Robotics", link: "#" },
//   ],
//   eee: [
//     { title: "Circuit Theory", link: "#" },
//     { title: "Control Systems", link: "#" },
//     { title: "Electrical Machines", link: "#" },
//     { title: "Power Electronics", link: "#" },
//     { title: "Signals and Systems", link: "#" },
//     { title: "Microprocessors", link: "#" },
//     { title: "High Voltage Engineering", link: "#" },
//     { title: "Power Systems", link: "#" },
//     { title: "Renewable Energy", link: "#" },
//     { title: "Electrical Measurements", link: "#" },
//   ],
//   ece: [
//     { title: "Digital Electronics", link: "#" },
//     { title: "Analog Circuits", link: "#" },
//     { title: "VLSI Design", link: "#" },
//     { title: "Microcontrollers", link: "#" },
//     { title: "Electromagnetic Theory", link: "#" },
//     { title: "Communication Systems", link: "#" },
//     { title: "Digital Signal Processing", link: "#" },
//     { title: "Embedded Systems", link: "#" },
//     { title: "Microwave Engineering", link: "#" },
//     { title: "Antenna & Wave Propagation", link: "#" },
//   ],
// };

// const Materials = () => {
//   const [branch, setBranch] = useState("cse");
// const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate initial page load
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
//         <div className="loader"></div>
//         <p className="mt-4 text-orange-600 font-semibold">Loading Materials Page...</p>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-orange-50 to-orange-50 p-6">
//       <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">
//         📚 E-Library Materials
//       </h1>

//       {/* Branch Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {Object.keys(materialsData).map((b) => (
//           <button
//             key={b}
//             onClick={() => setBranch(b)}
//             className={`px-6 py-2 rounded-full font-semibold capitalize shadow-md transition-all duration-300 
//               ${branch === b ? "text-orange-600 text-white scale-105" : "bg-white text-orange-600 border border-orange-300 hover:text-orange-100"}`}
//           >
//             {b}
//           </button>
//         ))}
//       </div>

//       {/* Materials List */}
//       <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {materialsData[branch].map((book, index) => (
//           <a
//             key={index}
//             href={book.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-100"
//           >
//             <div className="flex items-center justify-center w-14 h-14 rounded-full text-orange-100 text-orange-600 text-2xl mb-4 group-hover:text-orange-600 group-hover:text-white transition">
//               📙
//             </div>
//             <h2 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
//               {book.title}
//             </h2>
//             <p className="text-sm text-gray-500 mt-2">Click to open</p>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Materials;








// import React, { useEffect, useState } from "react";

// const materialsData = {
//   cse: [
//     { title: "Data Structures in C", link: "#" },
//     { title: "Algorithms Made Easy", link: "#" },
//     { title: "Database Management Systems", link: "#" },
//     { title: "Operating Systems", link: "#" },
//     { title: "Computer Networks", link: "#" },
//     { title: "Artificial Intelligence", link: "#" },
//     { title: "Machine Learning Basics", link: "#" },
//     { title: "Web Development with React", link: "#" },
//     { title: "Compiler Design", link: "#" },
//     { title: "Software Engineering", link: "#" },
//   ],
//   civil: [
//     { title: "Engineering Mechanics", link: "#" },
//     { title: "Structural Analysis", link: "#" },
//     { title: "Concrete Technology", link: "#" },
//     { title: "Geotechnical Engineering", link: "#" },
//     { title: "Environmental Engineering", link: "#" },
//     { title: "Surveying", link: "#" },
//     { title: "Transportation Engineering", link: "#" },
//     { title: "Hydrology", link: "#" },
//     { title: "Irrigation Engineering", link: "#" },
//     { title: "Building Materials", link: "#" },
//   ],
//   mechanical: [
//     { title: "Thermodynamics", link: "#" },
//     { title: "Fluid Mechanics", link: "#" },
//     { title: "Heat Transfer", link: "#" },
//     { title: "Dynamics of Machinery", link: "#" },
//     { title: "Strength of Materials", link: "#" },
//     { title: "Engineering Drawing", link: "#" },
//     { title: "Manufacturing Technology", link: "#" },
//     { title: "Machine Design", link: "#" },
//     { title: "Refrigeration & Air Conditioning", link: "#" },
//     { title: "Robotics", link: "#" },
//   ],
//   eee: [
//     { title: "Circuit Theory", link: "#" },
//     { title: "Control Systems", link: "#" },
//     { title: "Electrical Machines", link: "#" },
//     { title: "Power Electronics", link: "#" },
//     { title: "Signals and Systems", link: "#" },
//     { title: "Microprocessors", link: "#" },
//     { title: "High Voltage Engineering", link: "#" },
//     { title: "Power Systems", link: "#" },
//     { title: "Renewable Energy", link: "#" },
//     { title: "Electrical Measurements", link: "#" },
//   ],
//   ece: [
//     { title: "Digital Electronics", link: "#" },
//     { title: "Analog Circuits", link: "#" },
//     { title: "VLSI Design", link: "#" },
//     { title: "Microcontrollers", link: "#" },
//     { title: "Electromagnetic Theory", link: "#" },
//     { title: "Communication Systems", link: "#" },
//     { title: "Digital Signal Processing", link: "#" },
//     { title: "Embedded Systems", link: "#" },
//     { title: "Microwave Engineering", link: "#" },
//     { title: "Antenna & Wave Propagation", link: "#" },
//   ],
// };

// const branchIcons = {
//   cse: "💻",
//   civil: "🏗️",
//   mechanical: "🔧",
//   eee: "⚡",
//   ece: "📡",
// };

// const Materials = () => {
//   const [branch, setBranch] = useState("cse");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredMaterials = materialsData[branch].filter((book) =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 z-50">
//         <div className="loader w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//         <p className="mt-4 text-orange-600 font-semibold">Loading E-Library...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             📚 E-Library Hub
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 opacity-90">
//             Your Gateway to Engineering Excellence
//           </p>
//           <p className="text-orange-100 max-w-3xl mx-auto">
//             Discover curated resources, notes, and study materials tailored for your branch. Elevate your learning journey today!
//           </p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Branch Selector */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Select Your Branch</h2>
//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {Object.keys(materialsData).map((b) => (
//               <button
//                 key={b}
//                 onClick={() => setBranch(b)}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
//                   branch === b
//                     ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25"
//                     : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-orange-600"
//                 }`}
//               >
//                 {branchIcons[b]} {b.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* Search Bar */}
//           <div className="max-w-md mx-auto">
//             <input
//               type="text"
//               placeholder="Search materials..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-sm transition-colors"
//             />
//           </div>
//         </div>

//         {/* Materials Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {filteredMaterials.map((book, index) => (
//             <a
//               key={index}
//               href={book.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-orange-600 text-2xl mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
//                   📖
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
//                   {book.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-4">Essential reading for your studies</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
//                     PDF
//                   </span>
//                   <button className="text-orange-600 hover:text-orange-800 font-semibold text-sm transition-colors">
//                     Open →
//                   </button>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//         {filteredMaterials.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No materials found. Try adjusting your search.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Materials;







// import React, { useState } from 'react';

// const Materials = () => {
//   const [activeHigherTab, setActiveHigherTab] = useState('GATE');
//   const [activeJobsTab, setActiveJobsTab] = useState('Aptitude & Reasoning');
//   const [activeGovTab, setActiveGovTab] = useState('PSU through GATE');
//   const [activeSkillTab, setActiveSkillTab] = useState('Coding Practice');

//   const higherTabs = {
//     'GATE': [
//       { title: 'GATE ECE Complete Notes 2025', desc: 'Comprehensive notes covering all topics for Electronics & Communication', type: 'Notes', downloads: '12.4k' },
//       { title: 'GATE Previous Year Papers (2010-2024)', desc: 'Solved question papers with detailed explanations', type: 'PDF', downloads: '18.9k' },
//       { title: 'GATE Mechanical Engineering Video Lectures', desc: '200+ hours in-depth video tutorials', type: 'Video', downloads: '8.4k' }
//     ],
//     'GRE/TOEFL': [
//       { title: 'GRE Quantitative Guide', desc: 'Complete coverage of math sections with practice problems', type: 'PDF', downloads: '15.2k' },
//       { title: 'TOEFL Speaking Tips Video', desc: 'Expert strategies for improving speaking scores', type: 'Video', downloads: '9.7k' },
//       { title: 'GRE Vocabulary Builder Notes', desc: '500 essential words with examples and quizzes', type: 'Notes', downloads: '11.3k' }
//     ],
//     'CAT/GMAT': [
//       { title: 'CAT Quantitative Aptitude Mock Tests', desc: '50 full-length practice tests for quant section', type: 'Mock Test', downloads: '14.5k' },
//       { title: 'GMAT Critical Reasoning Guide', desc: 'Detailed strategies for argument analysis', type: 'PDF', downloads: '12.8k' },
//       { title: 'CAT Verbal Ability Videos', desc: '30+ hours on reading comprehension and RC', type: 'Video', downloads: '10.1k' }
//     ],
//     'Study Abroad Guide': [
//       { title: 'University Application Checklist', desc: 'Step-by-step guide for top universities', type: 'PDF', downloads: '16.6k' },
//       { title: 'Visa Process Overview Video', desc: 'Complete walkthrough for student visas', type: 'Video', downloads: '13.4k' },
//       { title: 'Scholarship Finder Notes', desc: 'List of 200+ scholarships with eligibility', type: 'Notes', downloads: '19.2k' }
//     ]
//   };

//   const jobsTabs = {
//     'Aptitude & Reasoning': [
//       { title: 'Quantitative Aptitude - Complete Guide', desc: 'All topics with 1000+ practice questions', type: 'PDF', downloads: '23.1k' },
//       { title: 'Logical Reasoning Video Series', desc: '50+ hours covering puzzles, seating, blood relations', type: 'Video', downloads: '15.6k' },
//       { title: 'Placement Aptitude Mock Tests', desc: '100 full-length tests simulating company patterns', type: 'Mock Test', downloads: '18.4k' }
//     ],
//     'Technical Interview Prep': [
//       { title: 'Core Java Interview Questions PDF', desc: 'Top 200 questions with code snippets', type: 'PDF', downloads: '21.7k' },
//       { title: 'DSA Revision Videos', desc: 'Quick recap of data structures and algorithms', type: 'Video', downloads: '17.9k' },
//       { title: 'System Design Mock Interviews', desc: 'Practice sessions for scalable systems', type: 'Mock Test', downloads: '12.3k' }
//     ],
//     'Resume & HR Prep': [
//       { title: 'Resume Building Templates', desc: 'ATS-friendly templates for engineers', type: 'PDF', downloads: '25.8k' },
//       { title: 'HR Interview Do\'s and Don\'ts Video', desc: 'Common pitfalls and success stories', type: 'Video', downloads: '14.2k' },
//       { title: 'Behavioral Questions Guide', desc: 'STAR method with examples', type: 'Notes', downloads: '16.5k' }
//     ],
//     'Company-wise Prep': [
//       { title: 'TCS NQT Prep Kit', desc: 'Company-specific aptitude and coding', type: 'PDF', downloads: '20.4k' },
//       { title: 'Infosys Puzzle Solving Videos', desc: 'Targeted practice for Infy puzzles', type: 'Video', downloads: '13.8k' },
//       { title: 'Wipro Mock Tests', desc: 'Full simulation of Wipro hiring process', type: 'Mock Test', downloads: '11.9k' }
//     ]
//   };

//   const govTabs = {
//     'PSU through GATE': [
//       { title: 'PSU Recruitment 2025 Complete Guide', desc: 'Eligibility, cutoffs, preparation strategy', type: 'PDF', downloads: '17.8k' },
//       { title: 'ONGC, NTPC, BHEL Previous Papers', desc: 'Technical questions asked in PSU interviews', type: 'PDF', downloads: '13.4k' },
//       { title: 'PSU Interview Preparation Videos', desc: 'Expert guidance on technical and HR rounds', type: 'Video', downloads: '9.8k' }
//     ],
//     'UPSC/SSC/RRB E-books & Courses': [
//       { title: 'UPSC Prelims GS Paper 1 E-book', desc: 'Comprehensive coverage of general studies', type: 'PDF', downloads: '22.1k' },
//       { title: 'SSC CGL Tier 1 Course Videos', desc: 'Full syllabus with 100+ lectures', type: 'Video', downloads: '18.3k' },
//       { title: 'RRB NTPC Reasoning Notes', desc: 'Key topics with solved examples', type: 'Notes', downloads: '14.7k' }
//     ],
//     'Previous Year Papers': [
//       { title: 'UPSC Mains PYQ 2015-2024', desc: 'Topic-wise compilation with model answers', type: 'PDF', downloads: '19.6k' },
//       { title: 'SSC CHSL Previous Papers', desc: 'Last 10 years solved papers', type: 'PDF', downloads: '16.2k' },
//       { title: 'RRB Group D Mock Tests', desc: 'Based on previous patterns', type: 'Mock Test', downloads: '12.9k' }
//     ]
//   };

//   const skillTabs = {
//     'Coding Practice': [
//       { title: 'LeetCode Top 150 Problems', desc: 'Curated list with detailed solutions', type: 'Notes', downloads: '26.7k' },
//       { title: 'HackerRank Interview Preparation Kit', desc: 'Complete guide to ace coding interviews', type: 'PDF', downloads: '19.4k' },
//       { title: 'Competitive Programming Video Course', desc: 'From basics to advanced algorithms', type: 'Video', downloads: '14.3k' }
//     ],
//     'Free Tech Courses': [
//       { title: 'Python for Beginners Course', desc: 'Free 40-hour video series', type: 'Video', downloads: '28.5k' },
//       { title: 'Web Development Bootcamp Notes', desc: 'HTML, CSS, JS essentials', type: 'Notes', downloads: '24.1k' },
//       { title: 'Machine Learning Basics PDF', desc: 'Intro to ML algorithms', type: 'PDF', downloads: '20.8k' }
//     ],
//     'Soft Skills': [
//       { title: 'Communication Skills Guide', desc: 'Tips for professional interactions', type: 'PDF', downloads: '17.2k' },
//       { title: 'Time Management Videos', desc: 'Techniques for productivity', type: 'Video', downloads: '13.6k' },
//       { title: 'Leadership Qualities Notes', desc: 'Key traits with examples', type: 'Notes', downloads: '11.4k' }
//     ],
//     'LinkedIn Profile Building': [
//       { title: 'LinkedIn Optimization Checklist', desc: 'Step-by-step profile enhancement', type: 'PDF', downloads: '15.9k' },
//       { title: 'Networking Strategies Video', desc: 'How to connect effectively', type: 'Video', downloads: '10.7k' },
//       { title: 'Personal Branding Guide', desc: 'Building your online presence', type: 'Notes', downloads: '12.3k' }
//     ]
//   };

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case 'Notes': return '📄';
//       case 'PDF': return '📄';
//       case 'Video': return '📹';
//       case 'Mock Test': return '🧪';
//       default: return '📄';
//     }
//   };

//   const renderCards = (data) => (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {data.map((item, index) => (
//         <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm">
//           <h4 className="font-medium text-orange-800 mb-2">{item.title}</h4>
//           <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
//           <div className="flex items-center justify-between mb-3">
//             <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs">{getTypeIcon(item.type)} {item.type}</span>
//             <span className="text-xs text-gray-500">{item.downloads} downloads</span>
//           </div>
//           <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
//             ⬇ Download
//           </button>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-orange-300 to-white text-black">
//       {/* Navigation Bar */}
      

//       {/* Header Section */}
//       <div className="p-8 text-center">
//         <h1 className="text-5xl font-bold mb-4">Your Gateway to Success</h1>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           Find everything you need — from placement prep to higher studies and government exams
//         </p>
//         {/* Search Bar */}
//         <div className="flex justify-center max-w-md mx-auto">
//           <input
//             type="text"
//             placeholder="Search resources (e.g. GATE ECE Notes / TCS interview)"
//             className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
//           />
//           <button className="bg-white text-orange-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="bg-white text-gray-800 -mt-8 rounded-t-3xl p-8">
//         {/* Explore by Category Title */}
//         <h2 className="text-3xl font-bold text-center mb-8">Explore by Category</h2>

//         {/* Category Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           {/* Higher Studies Card */}
//           <div className="text-center p-4 border border-orange-200 rounded-lg hover:shadow-md transition cursor-pointer">
//             <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l3.879 3.879" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-orange-700 mb-1">Higher Studies</h3>
//             <p className="text-xs text-gray-600">GRE, CAT, and study abroad preparation</p>
//           </div>

//           {/* Jobs & Placements Card */}
//           <div className="text-center p-4 border border-orange-200 rounded-lg hover:shadow-md transition cursor-pointer">
//             <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-orange-700 mb-1">Jobs & Placements</h3>
//             <p className="text-xs text-gray-600">Complete preparation for campus and off-campus placements</p>
//           </div>

//           {/* Government Exams Card */}
//           <div className="text-center p-4 border border-orange-200 rounded-lg hover:shadow-md transition cursor-pointer">
//             <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-orange-700 mb-1">Government Exams</h3>
//             <p className="text-xs text-gray-600">Prepare for PSU, UPSC, SSC, and other government positions</p>
//           </div>

//           {/* Skill Development Card */}
//           <div className="text-center p-4 border border-orange-200 rounded-lg hover:shadow-md transition cursor-pointer">
//             <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//               </svg>
//             </div>
//             <h3 className="font-semibold text-orange-700 mb-1">Skill Development</h3>
//             <p className="text-xs text-gray-600">Bridge gap between academics and employability</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row justify-center items-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
//           <div className="relative">
//             <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-300">
//               <option>▼ Filters: Exam Type</option>
//               <option>GATE</option>
//               <option>PSU</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//           <div className="relative">
//             <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-300">
//               <option>Resource Type</option>
//               <option>Notes</option>
//               <option>PDF</option>
//               <option>Video</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//           <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
//             Clear Filters
//           </button>
//         </div>

//         {/* Higher Studies Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-semibold text-orange-600 mb-6">Higher Studies</h3>
//           {/* Sub-tabs */}
//           <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
//             {['GATE', 'GRE/TOEFL', 'CAT/GMAT', 'Study Abroad Guide'].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveHigherTab(tab)}
//                 className={`px-4 py-2 rounded text-sm whitespace-nowrap transition ${activeHigherTab === tab ? 'text-orange-600 border-b-2 border-orange-500' : 'text-orange-600'}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           {renderCards(higherTabs[activeHigherTab])}
//         </section>

//         {/* Jobs & Placements Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-semibold text-orange-600 mb-6">Jobs & Placements</h3>
//           {/* Sub-tabs */}
//           <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
//             {Object.keys(jobsTabs).map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveJobsTab(tab)}
//                 className={`px-4 py-2 rounded text-sm whitespace-nowrap transition ${activeJobsTab === tab ? 'text-orange-600 border-b-2 border-orange-500' : 'text-orange-600'}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           {renderCards(jobsTabs[activeJobsTab])}
//         </section>

//         {/* Government Exams Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-semibold text-orange-600 mb-6">Government Exams</h3>
//           {/* Sub-tabs */}
//           <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
//             {Object.keys(govTabs).map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveGovTab(tab)}
//                 className={`px-4 py-2 rounded text-sm whitespace-nowrap transition ${activeGovTab === tab ? 'text-orange-600 border-b-2 border-orange-500' : 'text-orange-600'}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           {renderCards(govTabs[activeGovTab])}
//         </section>

//         {/* Skill Development Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-semibold text-orange-600 mb-6">Skill Development</h3>
//           {/* Sub-tabs */}
//           <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
//             {Object.keys(skillTabs).map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveSkillTab(tab)}
//                 className={`px-4 py-2 rounded text-sm whitespace-nowrap transition ${activeSkillTab === tab ? 'text-orange-600 border-b-2 border-orange-500' : 'text-orange-600'}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           {renderCards(skillTabs[activeSkillTab])}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Materials;





import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Materials = () => {
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  // 🌐 Complete stream data
  const streams = [
    {
      id: 1,
      title: "Computer Science Engineering (CSE)",
      image: "https://tse1.mm.bing.net/th/id/OIP.aVZYyNC8o1Gdkrh8CtE0ggHaEv?pid=Api&P=0&h=180",
      materials: [
        { id: 1, title: "Operating Systems Notes", image: "https://www.creativefabrica.com/wp-content/uploads/2021/09/15/OS-logo-design-vector-Graphics-17338971-1-1-580x386.jpg" },
        { id: 2, title: "Database Management Systems (DBMS)", image: "https://www.shutterstock.com/shutterstock/photos/1858108441/display_1500/stock-vector-dbms-mean-database-management-system-computer-and-internet-acronyms-letters-and-icons-vector-1858108441.jpg" },
        { id: 3, title: "Data Structures & Algorithms", image: "https://miro.medium.com/1*J38nYZU7gzu-4lQmtjlSUw.jpeg" },
        { id: 4, title: "Computer Networks", image: "https://tse1.mm.bing.net/th/id/OIP.3sn9bapPDmp_Hj-KjiSUZAHaE8?pid=Api&P=0&h=180" },
        { id: 5, title: "Software Engineering", image: "https://tse2.mm.bing.net/th/id/OIP.IZuyGumYk3Ra8SWy1NCnEQHaGL?pid=Api&P=0&h=180" },
      ],
    },
    {
      id: 2,
      title: "Electronics and Communication Engineering (ECE)",
      image: "https://tse1.mm.bing.net/th/id/OIP.VktyrV7hx61PXeFksA4bhwHaFj?pid=Api&P=0&h=180",
      materials: [
        { id: 1, title: "Digital Electronics", image: "https://tse4.mm.bing.net/th/id/OIP.WhpKNx0-3B6xHeaS_DvP9QHaEO?pid=Api&P=0&h=180" },
        { id: 2, title: "Analog Communication", image: "https://tse4.mm.bing.net/th/id/OIP.Z73sP4pWbAMkQ8zLhhrsGQAAAA?pid=Api&P=0&h=180" },
        { id: 3, title: "Microprocessors & Microcontrollers", image: "https://tse2.mm.bing.net/th/id/OIP.juGVLfaS0TZTMx49DvkQHQHaHa?pid=Api&P=0&h=180" },
        { id: 4, title: "Signal Processing", image: "https://tse4.mm.bing.net/th/id/OIP.FjRH0YYFoI8DHIUo_vEFrAHaEK?pid=Api&P=0&h=180" },
        { id: 5, title: "VLSI Design", image: "https://tse1.mm.bing.net/th/id/OIP.AWwKEH88XfP0QwFfVhyp0wHaJv?pid=Api&P=0&h=180" },
      ],
    },
    {
      id: 3,
      title: "Electrical and Electronics Engineering (EEE)",
      image: "https://img.brainkart.com/menu/2.jpg",
      materials: [
        { id: 1, title: "Electrical Machines", image: "https://tse4.mm.bing.net/th/id/OIP.AaPIC75XTrlTJSWfIy0XIAHaFj?pid=Api&P=0&h=180" },
        { id: 2, title: "Power Systems", image: "https://tse3.mm.bing.net/th/id/OIP.qDiDRUb4qCq1-gX90ctOTQHaFB?pid=Api&P=0&h=180" },
        { id: 3, title: "Control Systems", image: "https://tse1.mm.bing.net/th/id/OIP.Y2yATCgiJ5ZgImAEu3ugegHaE8?pid=Api&P=0&h=180" },
        { id: 4, title: "Power Electronics", image: "https://tse4.mm.bing.net/th/id/OIP.E-MWI1cLR-V6tetpUWfERAHaE6?pid=Api&P=0&h=180" },
        { id: 5, title: "Electrical Measurements", image: "https://tse3.mm.bing.net/th/id/OIP.XQ2tdl0VckooFOaN0443fQHaFh?pid=Api&P=0&h=180" },
      ],
    },
    {
      id: 4,
      title: "Mechanical Engineering (ME)",
      image: "https://tse3.mm.bing.net/th/id/OIP._xEgTyMDv1EhDmdfnTmhmQHaDt?pid=Api&P=0&h=180",
      materials: [
        { id: 1, title: "Engineering Thermodynamics", image: "https://tse2.mm.bing.net/th/id/OIP.syjF_HELeXjJb9pDjSjF8AHaJ4?pid=Api&P=0&h=180" },
        { id: 2, title: "Machine Design", image: "https://tse2.mm.bing.net/th/id/OIP.0fyHY_BZEQWk0XQeQztvqgHaDt?pid=Api&P=0&h=180" },
        { id: 3, title: "Fluid Mechanics", image: "https://tse1.mm.bing.net/th/id/OIP.SkrJuNXZtpGFbgLNyDS9zgHaJl?pid=Api&P=0&h=180" },
        { id: 4, title: "Theory of Machines", image: "https://tse4.mm.bing.net/th/id/OIP.gquCYcCMHRSb__wDoTZ80AHaEO?pid=Api&P=0&h=180" },
        { id: 5, title: "Heat Transfer", image: "https://tse3.mm.bing.net/th/id/OIP.M-BwFUNNEFGKH7-61SGedgHaEv?pid=Api&P=0&h=180" },
      ],
    },
    {
      id: 5,
      title: "Civil Engineering (CE)",
      image: "https://tse4.mm.bing.net/th/id/OIP.QyRkBiz9asFTJQB5O93YrwHaEK?pid=Api&P=0&h=180",
      materials: [
        { id: 1, title: "Surveying", image: "https://tse4.mm.bing.net/th/id/OIP.TJv2JrrASyI9RzcAqaBgaQHaE7?pid=Api&P=0&h=180" },
        { id: 2, title: "Structural Analysis", image: "https://tse1.mm.bing.net/th/id/OIP.1JiS_8Rck_CdbnNlQAtDgwHaHa?pid=Api&P=0&h=180" },
        { id: 3, title: "Building Materials & Construction", image: "https://tse4.mm.bing.net/th/id/OIP.-b17EitcKaVw1IXl7oKZ5wHaDt?pid=Api&P=0&h=180" },
        { id: 4, title: "Environmental Engineering", image: "https://tse3.mm.bing.net/th/id/OIP.-8BOUWXzr_n6d47cvrL7EQHaEJ?pid=Api&P=0&h=180" },
        { id: 5, title: "Transportation Engineering", image: "https://tse1.mm.bing.net/th/id/OIP.Rj6aEAJDkhJtsE25BfcLXwHaEK?pid=Api&P=0&h=180" },
      ],
    },
    {
      id: 6,
      title: "Information Technology (IT)",
      image: "https://tse3.mm.bing.net/th/id/OIP.c8KgxrsmWoPrFo0aykiyXwHaE8?pid=Api&P=0&h=180",
      materials: [
        { id: 1, title: "Web Technologies", image: "https://tse3.mm.bing.net/th/id/OIP.CrgaSNvvFh36TLg6PaEyiQHaFj?pid=Api&P=0&h=180" },
        { id: 2, title: "Computer Networks", image: "https://tse2.mm.bing.net/th/id/OIP.un9dqxqwMLYTQyD9ZObTOwHaF-?pid=Api&P=0&h=180" },
        { id: 3, title: "Cloud Computing", image: "https://tse2.mm.bing.net/th/id/OIP.ncM4WPU8WkprabtZO--4PgHaEJ?pid=Api&P=0&h=180" },
        { id: 4, title: "Cyber Security", image: "https://tse2.mm.bing.net/th/id/OIP.hTzN4ROP3ZhY5Js3hjDQBQHaEK?pid=Api&P=0&h=180" },
        { id: 5, title: "Software Testing", image: "https://tse2.mm.bing.net/th/id/OIP.wHOwJRYG-ADERSbAhDvR5QHaFB?pid=Api&P=0&h=180" },
      ],
    },
    {
      id: 7,
      title: "Artificial Intelligence & Data Science (AI & DS)",
      image: "https://tse2.mm.bing.net/th/id/OIP.WCqK6XavZC3o_vWbiDsfxQHaE8?pid=Api&P=0&h=180",
      materials: [
        { id: 1, title: "Machine Learning", image: "https://tse3.mm.bing.net/th/id/OIP.MdYkefg1lvKbFAIW6aGRxwHaEo?pid=Api&P=0&h=180" },
        { id: 2, title: "Deep Learning", image: "https://tse4.mm.bing.net/th/id/OIP.cOCKezZ1M8RBPv3dToU2UQHaEK?pid=Api&P=0&h=180" },
        { id: 3, title: "Data Analytics", image: "https://tse4.mm.bing.net/th/id/OIP.kohz3VnCw7zvdI6Qybwq2gHaDt?pid=Api&P=0&h=180" },
        { id: 4, title: "AI Algorithms", image: "https://tse2.mm.bing.net/th/id/OIP.FYQsmK1nDoLs23d2B605SwHaEI?pid=Api&P=0&h=180" },
        { id: 5, title: "Natural Language Processing", image: "https://tse2.mm.bing.net/th/id/OIP.k6kNeuKVPukQtXJP70vs1QHaEK?pid=Api&P=0&h=180" },
      ],
    },
  ];

  // ⬆ Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStreamClick = (stream) => {
    setSelectedStream(stream);
    setSelectedMaterial(null);
    scrollToTop();
  };

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
    scrollToTop();
  };

  const handleBack = () => {
    if (selectedMaterial) setSelectedMaterial(null);
    else setSelectedStream(null);
    scrollToTop();
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-6 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
        <div className="max-w-7xl mx-auto">
          {/* 🏫 Intro Section */}
          {!selectedStream && !selectedMaterial && (
            <motion.div
              className="text-center mb-12 "
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl font-bold text-orange-600 mb-4 ">
                🎓 Study Materials & Resources
              </h1>
              <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                Welcome to the <b>Knowledge Resource Center</b> — your one-stop
                digital library for all branches of engineering. Access
                comprehensive study materials, handwritten notes, previous
                question papers, lab manuals, and reference PDFs to strengthen
                your academic foundation.
              </p>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                🌟 Start exploring your department to unlock structured
                materials semester-wise and prepare effectively for exams and
                interviews.
              </p>
            </motion.div>
          )}

          {/* Back Button */}
          {(selectedStream || selectedMaterial) && (
            <button
              onClick={handleBack}
              className="mb-6 text-orange-600 font-semibold hover:underline"
            >
              ← Back
            </button>
          )}

          {/* 🎯 Main Stream Grid */}
          {!selectedStream && (
            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              {streams.map((stream) => (
                <motion.div
                  key={stream.id}
                  onClick={() => handleStreamClick(stream)}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 transition transform cursor-pointer "
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="w-full h-64 object-contain"
                  />
                  <div className="p-5 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {stream.title}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* 📘 Stream Materials */}
          {selectedStream && !selectedMaterial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
                {selectedStream.title} Materials
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {selectedStream.materials.map((mat) => (
                  <motion.div
                    key={mat.id}
                    onClick={() => handleMaterialClick(mat)}
                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={mat.image}
                      alt={mat.title}
                      className="w-full h-64 object-contain"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {mat.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Click to view details
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 📄 Material Detail */}
          {selectedMaterial && (
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedMaterial.title}
              </h2>
              <div className="space-y-4">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.title}
                  className="w-full max-h-80 rounded-lg object-contain"
                />
                <div className="flex justify-center gap-4">
                  <button className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                    View Material
                  </button>
                  <button className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                    Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Materials;
