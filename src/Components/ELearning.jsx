// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Footer from "./Footer";

// const ELearningModule = () => {
//   const [selectedTest, setSelectedTest] = useState(null);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [showResult, setShowResult] = useState(false);
//   const [score, setScore] = useState(0);
//   const testsRef = useRef(null);

//   const tests = {
//     Aptitude: [
//       { question: "If A = 1, B = 2, what is A + B?", options: ["1", "2", "3", "4"], correct: 2 },
//       { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], correct: 1 },
//     ],
//     TOEFL: [
//       { question: "Choose the correct synonym for 'Abundant'.", options: ["Scarce", "Plentiful", "Limited", "Short"], correct: 1 },
//       { question: "Select the correct word: 'He ____ to school every day.'", options: ["go", "goes", "gone", "going"], correct: 1 },
//     ],
//     GRE: [
//       { question: "What is the antonym of 'Lucid'?", options: ["Clear", "Obscure", "Bright", "Vivid"], correct: 1 },
//       { question: "Simplify: (3x² - 2x + 1) + (x² + 4x - 3)", options: ["4x² + 2x - 2", "2x² + 2x + 4", "3x² + 2x - 1", "4x² + 2x - 2"], correct: 0 },
//     ],
//     Banking: [
//       { question: "RBI stands for?", options: ["Reserve Bank of India", "Rural Bank of India", "Regional Bank Institute", "Retail Bank of India"], correct: 0 },
//       { question: "What is CRR in banking?", options: ["Cash Reserve Ratio", "Credit Risk Ratio", "Capital Return Ratio", "Customer Retention Rate"], correct: 0 },
//     ],
//     RRB: [
//       { question: "RRB conducts exams for which sector?", options: ["Railways", "Banking", "Defence", "Police"], correct: 0 },
//       { question: "Who is the head of Indian Railways?", options: ["Railway Minister", "President", "Prime Minister", "Finance Minister"], correct: 0 },
//     ],
//     Civils: [
//       { question: "Who appoints the Prime Minister of India?", options: ["Parliament", "President", "Chief Justice", "Governor"], correct: 1 },
//       { question: "Which article of the Constitution deals with Fundamental Rights?", options: ["12-35", "36-51", "52-78", "79-122"], correct: 0 },
//     ],
//   };

//   const topPerformers = [
//     { name: "Aarav Sharma", score: 95 },
//     { name: "Priya Patel", score: 92 },
//     { name: "Rahul Verma", score: 89 },
//     { name: "Sneha Iyer", score: 87 },
//   ];

//   const scrollToTests = () => {
//     testsRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const startTest = (testName) => {
//     setSelectedTest(testName);
//     setAnswers([]);
//     setCurrentQuestion(0);
//     setShowResult(false);
//     setTimeLeft(60);
//   };
// const handleGoBack = () => {
//   setShowResult(false);
//   setSelectedTest(null);
//   setCurrentQuestion(0);
//   setScore(0);
//   setAnswers([]);
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };
//   useEffect(() => {
//     if (selectedTest && !showResult) {
//       if (timeLeft === 0) handleNext();
//       else {
//         const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [timeLeft, selectedTest, showResult]);

//   const handleAnswer = (optionIndex) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[currentQuestion] = optionIndex;
//     setAnswers(updatedAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion < tests[selectedTest].length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setTimeLeft(60);
//     } else handleSubmit();
//   };

//   const handleSubmit = () => {
//     const correctAnswers = tests[selectedTest].filter(
//       (q, i) => q.correct === answers[i]
//     ).length;
//     setScore(correctAnswers);
//     setShowResult(true);
//   };

//   const handleRetake = () => {
//     setSelectedTest(null);
//     setShowResult(false);
//     setTimeLeft(60);
//   };

//   return (
//     <>
//     <div className="bg-gray-50 min-h-screen text-gray-900">
//       {/* HERO SECTION */}
//       <motion.section
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-orange-500 text-white py-14 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between rounded-b-3xl shadow-lg"
//       >
//         <motion.div
//           initial={{ x: -40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-1/2 space-y-5 text-center md:text-left"
//         >
//           <h1 className="text-3xl md:text-3xl font-extrabold leading-tight">
//             Prepare Smarter, Score Higher 💡
//           </h1>
//           <h2 className="text-2xl md:text-2xl font-bold">Learn. Grow. Achieve.</h2>
//           <p className="text-xl opacity-90">
//             Master competitive exams with AI-driven mock tests. Evaluate your performance,
//             identify weak areas, and improve with detailed analytics.
//             <br />
//             At Operation Yuva Sankalp, we empower students and professionals with
//             accessible, high-quality, and industry-relevant online tests.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={scrollToTests}
//             className="mt-4 bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100"
//           >
//             🚀 Start Now
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
//         >
//           <img
//             src="/images/mock.jpg"
//             alt="E-Learning Illustration"
//             className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-2xl shadow-lg object-cover"
//           />
//         </motion.div>
//       </motion.section>

//       {/* TEST CATEGORY SECTION */}
//       <section ref={testsRef} className="py-16 px-6 md:px-20 text-center">
//         <AnimatePresence mode="wait">
//           {!selectedTest && (
//             <motion.div
//               key="test-selection"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl font-bold mb-8 text-orange-600">Choose Your Test</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {Object.keys(tests).map((test) => (
//                   <motion.div
//                     key={test}
//                     whileHover={{ scale: 1.05 }}
//                     className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-transform"
//                   >
//                     <h3 className="text-2xl font-semibold text-orange-600 mb-2">{test}</h3>
//                     <p className="text-gray-600 mb-4">
//                       Test your skills with real-time analytics.
//                     </p>
//                     <button
//                       onClick={() => startTest(test)}
//                       className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//                     >
//                       Take Test
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* TEST SECTION */}
//         <AnimatePresence>
//           {selectedTest && !showResult && (
//             <motion.div
//               key="test"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.6 }}
//               className="mt-12 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
//             >
//               <h3 className="text-2xl font-bold mb-4 text-orange-600">{selectedTest} Test</h3>
//               <div className="text-right text-sm text-gray-500 mb-2">
//                 Time Left: <span className="font-semibold text-orange-600">{timeLeft}s</span>
//               </div>
//               <p className="text-lg font-medium mb-6">
//                 {tests[selectedTest][currentQuestion].question}
//               </p>
//               <div className="space-y-3">
//                 {tests[selectedTest][currentQuestion].options.map((opt, i) => (
//                   <button
//                     key={i}
//                     className={`w-full border rounded-lg p-3 text-left ${
//                       answers[currentQuestion] === i
//                         ? "bg-orange-100 border-orange-600"
//                         : "hover:bg-gray-100"
//                     }`}
//                     onClick={() => handleAnswer(i)}
//                   >
//                     {opt}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-6">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   onClick={handleNext}
//                   className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//                 >
//                   {currentQuestion < tests[selectedTest].length - 1 ? "Next" : "Submit"}
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* RESULT SECTION */}
//        <AnimatePresence>
//   {showResult && (
//     <motion.div
//       key="result"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mt-12 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto text-center"
//     >
//       <h3 className="text-3xl font-bold text-orange-600 mb-4">
//         Result Summary
//       </h3>
//       <p className="text-lg mb-2">
//         You scored <span className="font-bold">{score}</span> out of{" "}
//         {tests[selectedTest].length}
//       </p>
//       <p className="text-lg mb-6">
//         Percentage:{" "}
//         <span className="font-bold">
//           {((score / tests[selectedTest].length) * 100).toFixed(2)}%
//         </span>
//       </p>

//       {/* Retake Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={handleRetake}
//         className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//       >
//         🔁 Retake Test
//       </motion.button>

//       {/* Go Back Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={handleGoBack}
//         className="ml-4 bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition"
//       >
//         🔙 Go Back
//       </motion.button>
//     </motion.div>
//   )}
// </AnimatePresence>

//       </section>

//       {/* TOP PERFORMERS SECTION */}
//       {!selectedTest && (
//         <motion.section
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-orange-100 py-16 px-6 md:px-20 text-center rounded-t-3xl"
//         >
//           <h2 className="text-3xl font-bold text-orange-700 mb-10">
//             🌟 Top Performers of Malineni Perumallu This Week
//           </h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             {topPerformers.map((p, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg w-64 hover:shadow-xl transition"
//               >
//                 <h4 className="text-xl font-semibold text-orange-700">{p.name}</h4>
//                 <p className="text-lg mt-2 text-gray-700">
//                   Score: <span className="font-bold text-orange-600">{p.score}%</span>
//                 </p>
//                 <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: `${p.score}%` }}
//                     transition={{ duration: 1 }}
//                     className="h-3 bg-orange-500"
//                   ></motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       )}
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default ELearningModule;
// ELearning.jsx – FULL SYLLABUS + BIGGER TOPIC CARDS + ANIMATIONS
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= REAL QUESTIONS DATA ================= */
const REAL_QUESTIONS = {
  "Number System": [
    { q: "Which of the following is a prime number?", options: ["571", "517", "533", "559"], answer: 0 },
    { q: "How many prime numbers are there between 1 and 100?", options: ["21", "25", "28", "30"], answer: 1 },
    { q: "The product of two numbers is 2028 and their HCF is 13. How many possible pairs are there?", options: ["1", "2", "3", "4"], answer: 1 },
    { q: "What is the largest 4-digit number divisible by 88?", options: ["9944", "9992", "9988", "9977"], answer: 0 },
    { q: "What is the unit digit in (7^95 - 3^58)?", options: ["0", "4", "6", "8"], answer: 2 }
  ],
  "LCM & HCF": [
    { q: "The HCF of two numbers is 12 and their LCM is 180. If one number is 36, what is the other?", options: ["60", "72", "90", "48"], answer: 0 },
    { q: "Find the greatest number that divides 45, 60 and 75 leaving remainders 3, 4 and 5 respectively.", options: ["6", "7", "8", "14"], answer: 1 },
    { q: "The LCM of two numbers is 48. The numbers are in the ratio 2:3. What is the sum of the numbers?", options: ["14", "28", "32", "40"], answer: 1 },
    { q: "HCF of 96 and 72 is?", options: ["24", "18", "12", "36"], answer: 0 },
    { q: "Three numbers are in the ratio 1:2:3 and their HCF is 12. The numbers are:", options: ["12,24,36", "24,48,72", "36,72,108", "48,96,144"], answer: 0 }
  ],
  "Percentages": [
    { q: "If A is 20% more than B, then B is how much percent less than A?", options: ["16.67%", "20%", "25%", "33.33%"], answer: 0 },
    { q: "If price increases by 25%, by what percent must it be reduced to original?", options: ["20%", "25%", "16.67%", "22%"], answer: 0 },
    { q: "What is 15% of 250?", options: ["35", "37.5", "40", "45"], answer: 1 },
    { q: "20% of a number is 50. What is 40% of it?", options: ["100", "80", "120", "150"], answer: 0 },
    { q: "In an election, A got 60% votes and won by 300 votes. Total votes?", options: ["1500", "1000", "1200", "1800"], answer: 0 }
  ],
  "Profit, Loss & Discount": [
    { q: "An item sold at 20% profit for ₹1200. What is the cost price?", options: ["₹1000", "₹900", "₹1440", "₹960"], answer: 0 },
    { q: "CP = ₹800, SP = ₹920. Profit %?", options: ["10%", "15%", "20%", "25%"], answer: 1 },
    { q: "15% discount on marked price gives SP ₹850. Marked price?", options: ["₹1000", "₹900", "₹950", "₹980"], answer: 0 },
    { q: "Sold at 10% loss for ₹900. For 10% gain, SP should be?", options: ["₹1100", "₹1000", "₹990", "₹1200"], answer: 0 },
    { q: "Two successive discounts: 10% and 20%. Effective discount?", options: ["28%", "30%", "32%", "25%"], answer: 0 }
  ],
  "Time & Work": [
    { q: "A does work in 15 days, B in 20 days. Together?", options: ["8 days", "9 days", "10 days", "12 days"], answer: 3 },
    { q: "A+B finish in 10 days, B alone in 50 days. A alone?", options: ["15 days", "20 days", "25 days", "30 days"], answer: 0 },
    { q: "8 men or 12 women do work in 25 days. 6 men + 8 women?", options: ["15 days", "18 days", "20 days", "24 days"], answer: 1 },
    { q: "Pipe A fills in 6 hrs, B in 8 hrs. Together?", options: ["3.2 hrs", "3.4 hrs", "4.8 hrs", "4 hrs"], answer: 2 },
    { q: "A can do 1/3 work in 10 days. Remaining by B in 15 days. Together?", options: ["12 days", "15 days", "18 days", "20 days"], answer: 1 }
  ],
  "Blood Relations": [
    { q: "Pointing to a man, a woman said: 'His mother is the only daughter of my mother.' How is woman related to man?", options: ["Mother", "Sister", "Daughter", "Aunt"], answer: 0 },
    { q: "A is father of B but B is not A's son. B is?", options: ["Daughter", "Son", "Nephew", "Niece"], answer: 0 },
    { q: "Introducing a boy: 'He is the only son of my mother’s mother.' How is the boy related to speaker?", options: ["Brother", "Uncle", "Nephew", "Cousin"], answer: 0 },
    { q: "P's brother is Q. R is P's father. T is married to Q. How is R related to T?", options: ["Father-in-law", "Brother-in-law", "Uncle", "Father"], answer: 0 },
    { q: "If 'A + B' means A is father of B, 'A × B' means A is mother of B, then in 'P + R × Q', how is P related to Q?", options: ["Father", "Grandfather", "Uncle", "Brother"], answer: 1 }
  ],
  "Coding–Decoding": [
    { q: "If CAT = 24, DOG = ?", options: ["26", "30", "36", "40"], answer: 2 },
    { q: "If APPLE is coded as ZKKOV, how is BANANA coded?", options: ["YZMZMZ", "YZNZMZ", "YZMZNZ", "YZNZNZ"], answer: 0 },
    { q: "In a code, A=1, B=2, ..., Z=26. What is 'CODE'?", options: ["31545", "34154", "35415", "35145"], answer: 0 },
    { q: "If BAT = 46, then BALL = ?", options: ["52", "55", "60", "62"], answer: 1 },
    { q: "If MAN = 28, WOMAN = ?", options: ["46", "50", "52", "56"], answer: 0 }
  ],
  "Arrays": [
    { q: "Arrays store elements of?", options: ["Different types", "Same type", "Any type", "Objects only"], answer: 1 },
    { q: "Time to access array element?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], answer: 0 },
    { q: "Memory allocation in arrays?", options: ["Contiguous", "Scattered", "Linked", "Dynamic"], answer: 0 },
    { q: "Main disadvantage of array?", options: ["Fixed size", "Slow access", "No indexing", "High memory"], answer: 0 },
    { q: "Arrays are passed to functions as?", options: ["Value", "Reference", "Copy", "Pointer"], answer: 3 }
  ],
  "SQL Queries": [
    { q: "TRUNCATE vs DELETE?", options: ["Both same", "TRUNCATE faster & no WHERE", "DELETE can rollback", "Both B & C"], answer: 3 },
    { q: "UNION removes duplicates, UNION ALL?", options: ["Removes", "Keeps duplicates", "Same", "Error"], answer: 1 },
    { q: "Primary key constraint?", options: ["Allows NULL", "Allows duplicates", "Unique + NOT NULL", "Optional"], answer: 2 },
    { q: "Which JOIN returns all rows from both tables?", options: ["INNER", "LEFT", "RIGHT", "FULL OUTER"], answer: 3 },
    { q: "ACID stands for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Query, Table, Row, Column", "None"], answer: 0 }
  ],
  "CPU Scheduling": [
    { q: "Which is preemptive scheduling?", options: ["FCFS", "SJF", "Round Robin", "Priority (non-preemptive)"], answer: 2 },
    { q: "Convoy effect occurs in?", options: ["Round Robin", "FCFS", "SRTF", "Multilevel Queue"], answer: 1 },
    { q: "Shortest Job First is optimal for?", options: ["Minimizing waiting time", "Maximizing throughput", "Both", "None"], answer: 0 },
    { q: "Dispatcher function?", options: ["Long-term scheduling", "Gives CPU to process", "Selects process", "Memory allocation"], answer: 1 },
    { q: "Round Robin avoids?", options: ["Starvation", "Convoy effect", "Deadlock", "Thrashing"], answer: 0 }
  ],
  "OSI Model": [
    { q: "How many layers in OSI model?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "Routing happens at which layer?", options: ["Physical", "Data Link", "Network", "Transport"], answer: 2 },
    { q: "TCP operates at?", options: ["Network", "Transport", "Session", "Application"], answer: 1 },
    { q: "MAC address is used in?", options: ["Network Layer", "Data Link Layer", "Transport Layer", "Physical"], answer: 1 },
    { q: "HTTP works at which layer?", options: ["Transport", "Network", "Application", "Presentation"], answer: 2 }
  ],
};

/* Fallback for topics without real questions */
const genQuestions = (topic) =>
  REAL_QUESTIONS[topic] ||
  Array.from({ length: 5 }, (_, i) => ({
    q: `${topic} - Sample Question ${i + 1}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
  }));

/* ================= DATA STRUCTURE ================= */
const DATA = [
  {
    section: "Quantitative Aptitude",
    topics: ["Number System", "LCM & HCF", "Percentages", "Profit, Loss & Discount", "Simple Interest", "Compound Interest", "Ratio & Proportion", "Averages", "Time & Work", "Pipes & Cisterns", "Time, Speed & Distance", "Problems on Trains", "Boats & Streams", "Mixtures & Alligations", "Permutations & Combinations", "Probability", "Data Interpretation – Tables", "Bar Graphs", "Pie Charts", "Line Graphs"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Logical Reasoning",
    topics: ["Number Series", "Alphabet Series", "Coding–Decoding", "Blood Relations", "Direction Sense", "Analogies", "Classification", "Syllogisms", "Statement & Assumptions", "Statement & Conclusions", "Cause & Effect", "Seating Arrangement – Linear", "Seating Arrangement – Circular", "Puzzles – Floor", "Puzzles – Box", "Data Sufficiency"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Verbal Ability & English",
    topics: ["Reading Comprehension", "Para Jumbles", "Para Completion", "Sentence Correction", "Error Spotting", "Fill in the Blanks", "Active & Passive Voice", "Direct & Indirect Speech", "Synonyms", "Antonyms", "Idioms & Phrases", "One Word Substitution", "Cloze Test", "Subject Verb Agreement"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Programming Fundamentals",
    topics: ["Variables & Data Types", "Conditional Statements", "Loops", "Functions / Methods", "Arrays", "Strings", "Pointers", "OOPS Concepts", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Exception Handling", "File Handling", "Memory Management Basics"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Data Structures & Algorithms",
    topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Binary Search Trees", "Graphs", "Sorting Algorithms", "Searching Algorithms", "Recursion", "Dynamic Programming", "Greedy Algorithms", "Time & Space Complexity"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "DBMS",
    topics: ["Database Concepts", "ER Diagrams", "Normalization", "SQL Queries", "Joins", "Subqueries", "Indexing", "Transactions", "ACID Properties", "Stored Procedures", "Views"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Operating Systems",
    topics: ["Process Management", "Threads", "CPU Scheduling", "Deadlocks", "Memory Management", "Paging", "Segmentation", "Virtual Memory", "File Systems", "Synchronization"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Computer Networks",
    topics: ["Network Types", "OSI Model", "TCP/IP Model", "IP Addressing", "Subnetting", "Routing Protocols", "HTTP vs HTTPS", "DNS", "Firewalls", "Network Security Basics"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "Web Technologies",
    topics: ["HTML Fundamentals", "CSS Flexbox", "CSS Grid", "JavaScript Basics", "DOM Manipulation", "Responsive Design", "React Basics", "Backend Basics", "REST APIs", "Authentication & Authorization"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  },
  {
    section: "General Awareness & Placement",
    topics: ["Static GK", "Current Affairs", "Government Schemes", "Economy & Budget", "Science & Tech Updates", "HR Interview Questions", "Resume Building", "Group Discussion", "Mock Interviews", "Company Preparation"]
      .map(t => ({ title: t, questions: genQuestions(t) }))
  }
];

/* ================= MAIN COMPONENT ================= */
export default function ELearning() {
  const [section, setSection] = useState(null);
  const [topic, setTopic] = useState(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [marked, setMarked] = useState({});
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
  const [running, setRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const questions = topic?.questions ?? [];

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  /* Timer Logic */
  useEffect(() => {
    if (!running || timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [running, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) submitTest();
  }, [timeLeft]);

  /* Start Test */
  const startTest = (t) => {
    setTopic(t);
    setIndex(0);
    setAnswers({});
    setVisited({});
    setMarked({});
    setTimeLeft(10 * 60);
    setRunning(true);
    setShowResult(false);
  };

  /* Submit Test */
  const submitTest = () => {
    setRunning(false);
    setShowResult(true);
  };

  /* Calculate Score */
  const calculateScore = () => {
    return questions.filter((q, i) => answers[i] === q.answer).length;
  };

  /* Result Screen */
  if (showResult && topic) {
    const score = calculateScore();
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">
          Test Completed - {topic.title}
        </h1>

        <div className="bg-white rounded-2xl shadow-2xl p-10 text-center mb-10">
          <h2 className="text-5xl font-bold text-green-600 mb-4">
            Your Score: {score} / {questions.length}
          </h2>
          <p className="text-xl text-gray-700">
            {score === questions.length ? "Excellent! Perfect Score!" : score >= questions.length * 0.6 ? "Good Job!" : "Keep Practicing!"}
          </p>

          <button
            onClick={() => {
              setTopic(null);
              setShowResult(false);
              setSection(null);
            }}
            className="mt-8 px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-xl hover:bg-orange-600"
          >
            Back to Sections
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-3xl font-bold mb-8 text-orange-600">Answer Review</h3>
          {questions.map((q, i) => (
            <div key={i} className="mb-10 p-6 border-2 border-gray-200 rounded-xl">
              <p className="text-lg font-semibold mb-4">Q{i + 1}. {q.q}</p>
              <div className="space-y-3">
                {q.options.map((opt, j) => {
                  const isCorrect = j === q.answer;
                  const isUserAnswer = answers[i] === j;
                  let className = "p-4 rounded-lg border-2 ";
                  if (isCorrect) className += "bg-green-100 border-green-500";
                  else if (isUserAnswer && !isCorrect) className += "bg-red-100 border-red-500";
                  else className += "border-gray-300";

                  return (
                    <div key={j} className={className}>
                      <span className="font-medium">{opt}</span>
                      {isCorrect && <span className="ml-4 text-green-700 font-bold">(Correct Answer)</span>}
                      {isUserAnswer && !isCorrect && <span className="ml-4 text-red-700 font-bold">(Your Answer)</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  /* Main UI */
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-10 text-center text-orange-600">
        E-Learning Exam Platform
      </h1>

      <AnimatePresence mode="wait">
        {/* Section Selection */}
        {!section && (
          <motion.div
            key="sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {DATA.map((s) => (
              <motion.button
                key={s.section}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSection(s)}
                className="h-32 p-6 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-2xl text-2xl font-bold transition"
              >
                {s.section}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Topic Selection */}
        {section && !topic && (
          <motion.div
            key="topics"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
          >
            <button
              onClick={() => setSection(null)}
              className="mb-8 text-orange-600 text-lg font-medium hover:underline"
            >
              ← Back to Sections
            </button>
            <h2 className="text-3xl font-bold mb-10 text-orange-600">{section.section}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.topics.map((t, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startTest(t)}
                  className="h-28 p-6 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-2xl shadow-xl text-xl font-medium hover:shadow-2xl transition"
                >
                  {t.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quiz Screen */}
        {topic && questions.length > 0 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col lg:flex-row gap-8 mt-6"
          >
            {/* Question Palette */}
            <div className="lg:w-1/4 w-full bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Question Palette</h3>
              <div className="grid grid-cols-5 gap-3">
                {questions.map((_, i) => {
                  let bg = "bg-gray-300";
                  if (answers[i] !== undefined) bg = "bg-green-500 text-white";
                  else if (marked[i]) bg = "bg-yellow-400 text-black";
                  else if (visited[i]) bg = "bg-red-400 text-white";

                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setIndex(i);
                        setVisited(prev => ({ ...prev, [i]: true }));
                      }}
                      className={`w-12 h-12 rounded-full text-lg font-bold ${bg} hover:opacity-80 transition`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Question Area */}
            <div className="lg:w-3/4 w-full bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{topic.title}</h2>
                <span className="text-3xl font-bold text-orange-600">
                  {minutes}:{seconds.toString().padStart(2, "0")}
                </span>
              </div>

              <p className="text-xl font-medium mb-8">
                Q{index + 1}. {questions[index].q}
              </p>

              <div className="space-y-5 mb-10">
                {questions[index].options.map((opt, i) => (
                  <label
                    key={i}
                    className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition text-lg ${
                      answers[index] === i
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={answers[index] === i}
                      onChange={() => setAnswers(prev => ({ ...prev, [index]: i }))}
                      className="mr-5 w-5 h-5 text-orange-600"
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-between">
                <button
                  onClick={() => {
                    setMarked(prev => ({ ...prev, [index]: true }));
                    if (index < questions.length - 1) setIndex(index + 1);
                  }}
                  className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600"
                >
                  Mark for Review & Next
                </button>

                <button
                  onClick={() => index < questions.length - 1 && setIndex(index + 1)}
                  className="px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600"
                >
                  Save & Next
                </button>

                <button
                  onClick={submitTest}
                  className="px-8 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600"
                >
                  Submit Test
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* No Questions Fallback */}
        {topic && questions.length === 0 && (
          <div className="text-center text-2xl text-red-600">
            No questions available for this topic yet!
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}