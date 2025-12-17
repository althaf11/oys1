// import React, { useMemo, useState } from "react";
// import { FaClock, FaBookOpen, FaPlayCircle, FaFilter } from "react-icons/fa";
// import Footer from "./Footer";

// const crashCoursesData = [
//   {
//     id: "js-basics",
//     title: "JavaScript Basics in 7 Days",
//     tag: "Programming",
//     duration: "2 hours",
//     level: "Beginner",
//     description:
//       "Kickstart your JS journey covering variables, functions, arrays, and DOM with daily hands-on tasks.",
//   },
//   {
//     id: "react-fasttrack",
//     title: "React Fast-Track (Hooks + Router)",
//     tag: "Frontend",
//     duration: "1hr15mins",
//     level: "Intermediate",
//     description:
//       "Build modern React apps with hooks, context, routing, and component patterns. Includes a project.",
//   },
//   {
//     id: "dsa-quickstart",
//     title: "DSA Quickstart for Interviews",
//     tag: "Programming",
//     duration: "1 hour",
//     level: "Intermediate",
//     description:
//       "Master arrays, strings, hashing, two pointers, stacks/queues, and trees with problem sets.",
//   },
//   {
//     id: "sql-essentials",
//     title: "SQL Essentials for Analysts",
//     tag: "Data",
//     duration: "55 mins",
//     level: "Beginner",
//     description:
//       "Learn SELECT to JOINs, aggregations, windows, and practice queries on an online sandbox.",
//   },
//   {
//     id: "ml-crash",
//     title: "ML Crash Course with Python",
//     tag: "Data",
//     duration: "2 hours",
//     level: "Intermediate",
//     description:
//       "Numpy, pandas, scikit-learn, model training/evaluation with a small end-to-end project.",
//   },
// ];

// const levels = ["Beginner", "Intermediate", "Advanced"];
// const tags = ["Programming", "Frontend", "Data"];

// const CourseCard = ({ course }) => (
//   <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
//     <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
//     <p className="mt-2 text-gray-600">{course.description}</p>

//     <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-4">
//       <span className="inline-flex items-center gap-2 bg-orange -50 text-orange -700 px-3 py-1 rounded-full">
//         <FaClock /> {course.duration}
//       </span>
//       <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
//         <FaBookOpen /> {course.level}
//       </span>
//       <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-3 py-1 rounded-full">
//         <FaFilter /> {course.tag}
//       </span>
//     </div>

//     <div className="mt-5">
//       <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 shadow">
//         <FaPlayCircle /> Start Learning
//       </button>
//     </div>
//   </div>
// );

// const CrashCourse = () => {
//   const [query, setQuery] = useState("");
//   const [level, setLevel] = useState("");
//   const [tag, setTag] = useState("");

//   const filtered = useMemo(() => {
//     return crashCoursesData.filter((c) => {
//       const matchesQuery =
//         !query ||
//         c.title.toLowerCase().includes(query.toLowerCase()) ||
//         c.description.toLowerCase().includes(query.toLowerCase());
//       const matchesLevel = !level || c.level === level;
//       const matchesTag = !tag || c.tag === tag;
//       return matchesQuery && matchesLevel && matchesTag;
//     });
//   }, [query, level, tag]);

//   const clearFilters = () => {
//     setQuery("");
//     setLevel("");
//     setTag("");
//   };

//   return (
//     <>
//     <section className="bg-gray-50 min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-orange-600">Crash Courses</h1>
//             <p className="text-gray-500 mt-2">
//               Short, structured sprints to upskill fast. Filter by level or topic and start learning today.
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-3">
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               type="text"
//               placeholder="Search courses..."
//               className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
//             />
//             <select
//               value={level}
//               onChange={(e) => setLevel(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg bg-white"
//             >
//               <option value="">All Levels</option>
//               {levels.map((l) => (
//                 <option key={l} value={l}>
//                   {l}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={tag}
//               onChange={(e) => setTag(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg bg-white"
//             >
//               <option value="">All Topics</option>
//               {tags.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={clearFilters}
//               className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
//             >
//               Clear
//             </button>
//           </div>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div className="text-center text-gray-500 mt-12">No courses match your filters.</div>
//         )}

//         <div className="mt-12 p-6 bg-white border rounded-2xl shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-800">Need a custom crash course for your college?</h2>
//           <p className="text-gray-600 mt-2">
//             We conduct bootcamps and hands-on workshops. Contact us to schedule a cohort-based course.
//           </p>
//           <div className="mt-4 flex gap-3">
//             <a href="mailto:hello@example.com" className="px-4 py-2  border  bg-orange -600 text-white rounded-lg hover:bg-orange -700 text-black">
//               Email Us
//             </a>
//             <a href="#" className="px-4 py-2 border rounded-lg text-orange -700 hover:bg-orange -50">
//               Download Brochure
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     </>
//   );
// };

// export default CrashCourse;









import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FileText, PlayCircle } from "lucide-react";
import Footer from "./Footer";

/* --- DATA --- */
const crashCourses = {
  ALL:[
    {
      title: "React JS Crash Course",
      video: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
      description: "Get started with React JS.",
      isNew: true,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Next.js Crash Course (Upcoming)",
      video: "",
      thumbnail: "https://i.ytimg.com/vi/mTz0GXj8NN0/hqdefault.jpg",
      description: "Build SSR apps easily. (Upcoming batch)",
      isNew: true,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-15",
    },
    {
      title: "Python Crash Course",
      video: "https://www.youtube.com/embed/kqtD5dpn9C8",
      thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/hqdefault.jpg",
      description: "Python in one hour.",
      isNew: false,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Advanced SQL (Upcoming)",
      video: "",
      thumbnail: "https://via.placeholder.com/320x180.png?text=SQL",
      description: "Deep dive into SQL optimizations.",
      isNew: false,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-20",
    },
    {
      title: "Leadership Skills Crash Course",
      video: "https://www.youtube.com/embed/w0e1q7kfj0k",
      thumbnail: "https://i.ytimg.com/vi/w0e1q7kfj0k/hqdefault.jpg",
      description: "Develop strong leadership qualities.",
      isNew: false,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Negotiation Skills Crash Course",
      video: "https://www.youtube.com/embed/0bXy3tR1kZ8",
      thumbnail: "https://i.ytimg.com/vi/0bXy3tR1kZ8/hqdefault.jpg",
      description: "Learn the art of negotiation.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "AI Crash Course",
      video: "https://www.youtube.com/embed/JMUxmLyrhSk",
      thumbnail: "https://i.ytimg.com/vi/JMUxmLyrhSk/hqdefault.jpg",
      description: "Artificial Intelligence in a nutshell.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "ML Deployment (Upcoming)",
      video: "",
      thumbnail: "https://via.placeholder.com/320x180.png?text=ML",
      description: "Deploy ML models to production.",
      isNew: false,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-09",
    },
  ],
  IT: [
    {
      title: "HTML Crash Course",
      video: "https://www.youtube.com/embed/qz0aGYrrlhU",
      thumbnail: "https://i.ytimg.com/vi/qz0aGYrrlhU/hqdefault.jpg",
      description: "Learn HTML from scratch.",
      isNew: false,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "CSS Crash Course",
      video: "https://www.youtube.com/embed/yfoY53QXEnI",
      thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
      description: "Master CSS quickly.",
      isNew: false,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "React JS Crash Course",
      video: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
      description: "Get started with React JS.",
      isNew: true,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Next.js Crash Course (Upcoming)",
      video: "",
      thumbnail: "https://i.ytimg.com/vi/mTz0GXj8NN0/hqdefault.jpg",
      description: "Build SSR apps easily. (Upcoming batch)",
      isNew: true,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-15",
    },
    {
      title: "Python Crash Course",
      video: "https://www.youtube.com/embed/kqtD5dpn9C8",
      thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/hqdefault.jpg",
      description: "Python in one hour.",
      isNew: false,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Advanced SQL (Upcoming)",
      video: "",
      thumbnail: "https://via.placeholder.com/320x180.png?text=SQL",
      description: "Deep dive into SQL optimizations.",
      isNew: false,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-20",
    },
    {
      title: "AI Crash Course",
      video: "https://www.youtube.com/embed/JMUxmLyrhSk",
      thumbnail: "https://i.ytimg.com/vi/JMUxmLyrhSk/hqdefault.jpg",
      description: "Artificial Intelligence in a nutshell.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "ML Deployment (Upcoming)",
      video: "",
      thumbnail: "https://via.placeholder.com/320x180.png?text=ML",
      description: "Deploy ML models to production.",
      isNew: false,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-09",
    },
    {
      title: "JavaScript Crash Course",
      video: "https://www.youtube.com/embed/hdI2bqOjy3c",
      thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
      description: "Master JS fundamentals quickly.",
      isNew: false,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Node.js Crash Course",
      video: "https://www.youtube.com/embed/TlB_eWDSMt4",
      thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg",
      description: "Learn backend development with Node.js.",
      isNew: true,
      hasMock: true,
      upcoming: false,
      canRequestDetails: true,
    },
  ],

  "Non-IT": [
    {
      title: "Communication Skills Crash Course",
      video: "https://www.youtube.com/embed/5BvWv6pZxIQ",
      thumbnail: "https://i.ytimg.com/vi/5BvWv6pZxIQ/hqdefault.jpg",
      description: "Improve your spoken and business communication.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Business English Crash Course",
      video: "https://www.youtube.com/embed/2Xl0K8jF1pE",
      thumbnail: "https://i.ytimg.com/vi/2Xl0K8jF1pE/hqdefault.jpg",
      description: "Professional English for workplace.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Financial Literacy Crash Course (Upcoming)",
      video: "",
      thumbnail: "https://via.placeholder.com/320x180.png?text=Finance",
      description: "Learn to manage personal and business finance.",
      isNew: false,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-12",
    },
    {
      title: "Public Speaking Crash Course",
      video: "https://www.youtube.com/embed/8fXH1Vny5zU",
      thumbnail: "https://i.ytimg.com/vi/8fXH1Vny5zU/hqdefault.jpg",
      description: "Master public speaking skills.",
      isNew: false,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Time Management Crash Course (Upcoming)",
      video: "",
      thumbnail: "https://via.placeholder.com/320x180.png?text=Time",
      description: "Manage your time effectively.",
      isNew: true,
      hasMock: false,
      upcoming: true,
      canRequestDetails: true,
      date: "2025-11-18",
    },
    {
      title: "Creative Thinking Crash Course",
      video: "https://www.youtube.com/embed/3y3Hjs9yZfM",
      thumbnail: "https://i.ytimg.com/vi/3y3Hjs9yZfM/hqdefault.jpg",
      description: "Enhance problem-solving and creativity skills.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Leadership Skills Crash Course",
      video: "https://www.youtube.com/embed/w0e1q7kfj0k",
      thumbnail: "https://i.ytimg.com/vi/w0e1q7kfj0k/hqdefault.jpg",
      description: "Develop strong leadership qualities.",
      isNew: false,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
    {
      title: "Negotiation Skills Crash Course",
      video: "https://www.youtube.com/embed/0bXy3tR1kZ8",
      thumbnail: "https://i.ytimg.com/vi/0bXy3tR1kZ8/hqdefault.jpg",
      description: "Learn the art of negotiation.",
      isNew: true,
      hasMock: false,
      upcoming: false,
      canRequestDetails: true,
    },
  ],
};



/* --- Sidebar Data --- */
const mostViewed = [
  { title: "JavaScript Crash Course", views: 944 },
  { title: "Python Crash Course", views: 328 },
  { title: "AI Crash Course", views: 108 },
];

const recentlyAdded = [
  { title: "React JS Crash Course", date: "Jan 2025" },
  { title: "AI Crash Course", date: "Dec 2024" },
  { title: "Node.js Crash Course", date: "Sep 2025" },
  { title: "Leadership Skills Crash Course", date: "Oct 2025" },
];

/* --- Utils --- */
function getAllUpcoming() {
  const list = [];
  Object.keys(crashCourses).forEach((k) => {
    crashCourses[k].forEach((c) => {
      if (c.upcoming && c.date) list.push({ ...c, category: k });
    });
  });
  return list;
}

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = first.getDay();
  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

/* --- Calendar Component --- */
function CalendarView({ viewMonth, setViewMonth, monthCells, upcomingList, onDateClick, selectedDate }) {
  const display = `${new Date(viewMonth.year, viewMonth.month).toLocaleString(undefined, { month: "long", year: "numeric" })}`;
  const prev = () => setViewMonth({ year: viewMonth.month === 0 ? viewMonth.year - 1 : viewMonth.year, month: viewMonth.month === 0 ? 11 : viewMonth.month - 1 });
  const next = () => setViewMonth({ year: viewMonth.month === 11 ? viewMonth.year + 1 : viewMonth.year, month: viewMonth.month === 11 ? 0 : viewMonth.month + 1 });

  const dateHasCourse = (cell) => {
    if (!cell) return false;
    const dateStr = `${cell.getFullYear()}-${("0" + (cell.getMonth() + 1)).slice(-2)}-${("0" + cell.getDate()).slice(-2)}`;
    return upcomingList.some((c) => c.date === dateStr);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <strong className="text-lg">{display}</strong>
        <div className="flex gap-2">
          <button onClick={prev} className="px-2 py-1 border rounded">◀</button>
          <button onClick={next} className="px-2 py-1 border rounded">▶</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {monthCells.map((cell, i) => {
          const has = dateHasCourse(cell);
          const isSelected = selectedDate && cell && cell.toDateString() === selectedDate.toDateString();
          return (
            <div
              key={i}
              className={`h-14 border rounded flex items-center justify-center cursor-pointer ${has ? "bg-orange-300" : ""} ${isSelected ? "border-2 border-orange-600" : ""}`}
              onClick={() => cell && has && onDateClick(cell)}
            >
              {cell ? cell.getDate() : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* --- Main Component --- */
const CrashCourses = () => {
  const [activeTab, setActiveTab] = useState("IT");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [search, setSearch] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [modalCourse, setModalCourse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCustomRegister, setShowCustomRegister] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);

  const courses = crashCourses[activeTab] || [];
  const filteredCourses = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) && (showNew ? c.isNew : true));
  const upcomingList = useMemo(() => getAllUpcoming(), []);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = upcomingList[0] ? new Date(upcomingList[0].date) : new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const monthCells = useMemo(() => buildMonth(viewMonth.year, viewMonth.month), [viewMonth]);
  const coursesOnSelectedDate = selectedDate ? upcomingList.filter(c => new Date(c.date).toDateString() === selectedDate.toDateString()) : [];

  const handleLoadMore = () => setVisibleCount(p => p + 6);
  const handleTakeMock = (course) => alert(`Take mock for: ${course.title}`);
  const handleRegisterClick = (course) => { setModalCourse(course); setShowRegisterModal(true); };
  const handleRequestDetails = (course) => setShowDetailForm(true);
  const handleSubmitCustom = (e) => { e.preventDefault(); const form = new FormData(e.target); alert(`Custom course request submitted: ${form.get("title")}`); setShowCustomRegister(false); };
  const handleSubmitDetailForm = (e) => { e.preventDefault(); const form = new FormData(e.target); alert(`Detail request submitted: ${form.get("name")}`); setShowDetailForm(false); };

  return (
    <>
      <div className="p-6 md:p-12 bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-xl shadow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* MAIN AREA */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-wrap gap-3">
              {Object.keys(crashCourses).map(tab => (
                <button key={tab} onClick={() => { setActiveTab(tab); setSelectedCourse(null); setVisibleCount(6); }} className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === tab ? "bg-orange-600 text-white" : "bg-white text-gray-700 border"}`}>{tab}</button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center w-full md:w-1/2 border rounded-lg px-4 py-2 bg-white">
                <input type="text" placeholder="🔍 Search for crash courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full outline-none text-sm"/>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="checkbox" checked={showNew} onChange={() => setShowNew(s => !s)} className="w-4 h-4 accent-orange-600" />
                Show New Crash Courses
              </label>
            </div>

            {!selectedCourse ? (
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {filteredCourses.length === 0 && <div className="col-span-full p-6 bg-white rounded-lg shadow text-center">No courses found.</div>}
                {filteredCourses.slice(0, visibleCount).map((course, idx) => (
                  <motion.div key={idx} className="relative bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-2xl transition overflow-hidden" whileHover={{ translateY: -4 }}>
                    <div onClick={() => setSelectedCourse(course)} className="cursor-pointer">
                      <div className="p-4 flex gap-4 items-start">
                        <img src={course.thumbnail} alt={course.title} className="w-28 h-20 object-cover rounded-md flex-shrink-0"/>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-orange-600">{course.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">{course.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t bg-gray-50 dark:bg-gray-900 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        {course.isNew && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">New</span>}
                        {course.upcoming && <span className="text-xs bg-orange-3000 text-white px-2 py-1 rounded">Upcoming</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        {course.hasMock && <button onClick={() => handleTakeMock(course)} className="text-xs px-3 py-1 bg-white border rounded hover:bg-gray-100">Take a Mock</button>}
                        {course.upcoming ? <button onClick={() => handleRegisterClick(course)} className="text-xs px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700">Register</button> : <button onClick={() => setSelectedCourse(course)} className="text-xs px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700">▶ Watch</button>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                  <div className="aspect-video w-full rounded overflow-hidden bg-black">
                    {selectedCourse.video ? <iframe src={selectedCourse.video} title={selectedCourse.title} className="w-full h-full" allowFullScreen /> : <div className="w-full h-full flex items-center justify-center text-gray-500">No video available for this course.</div>}
                  </div>
                  <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold text-orange-600">{selectedCourse.title}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{selectedCourse.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedCourse.hasMock && <button onClick={() => handleTakeMock(selectedCourse)} className="px-4 py-2 bg-white border rounded hover:shadow">Take a Mock</button>}
                      {selectedCourse.upcoming && <button onClick={() => handleRegisterClick(selectedCourse)} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">Register</button>}
                      {selectedCourse.canRequestDetails && <button onClick={() => handleRequestDetails(selectedCourse)} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 flex items-center gap-2"><FileText size={16}/> Request Details</button>}
                      <button onClick={() => setSelectedCourse(null)} className="px-3 py-2 border rounded text-sm">⬅ Back</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {!selectedCourse && visibleCount < filteredCourses.length && <div className="text-center mt-4"><button onClick={handleLoadMore} className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">Load More</button></div>}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3">Most Viewed</h3>
              <div className="space-y-3">{mostViewed.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-900 cursor-default">
                  <div className="flex items-center gap-3"><PlayCircle size={20} className="text-orange-600"/><span className="text-sm">{item.title}</span></div>
                  <span className="text-xs text-gray-500">{item.views} views</span>
                </div>
              ))}</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3">Recently Added</h3>
              <div className="space-y-3">{recentlyAdded.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-900 cursor-default">
                  <div className="flex items-center gap-3"><FileText size={18}/><span className="text-sm">{item.title}</span></div>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
              ))}</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Want a custom course?</h3>
              <p className="text-sm text-gray-600 mb-3">If you need a tailored course for your batch or company, request it and we'll get back.</p>
              <button onClick={() => setShowCustomRegister(true)} className="w-full px-4 py-2 bg-orange-600 text-white rounded">Request Course</button>
            </div>
          </div>
        </div>
      </div>

     {/* REGISTER MODAL */}
{showRegisterModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-xl relative overflow-y-auto max-h-[90vh]"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <button
        onClick={() => { setShowRegisterModal(false); setSelectedDate(null); }}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-xl font-semibold text-orange-600 mb-4">
        {modalCourse?.title || "Register for a Course"}
      </h3>

      {/* Calendar */}
      <CalendarView
        viewMonth={viewMonth}
        setViewMonth={setViewMonth}
        monthCells={monthCells}
        upcomingList={upcomingList}
        onDateClick={(date) => setSelectedDate(date)}
        selectedDate={selectedDate}
      />

      {/* Courses to show below */}
      <div className="p-4 border rounded mt-4 space-y-3">
        {selectedDate
          ? coursesOnSelectedDate.length > 0
            ? <>
                <h4 className="font-semibold mb-2">Courses on {selectedDate.toDateString()}</h4>
                {coursesOnSelectedDate.map((c, i) => (
                  <div key={i} className="flex flex-col gap-2 p-2 border rounded">
                    <span>{c.title}</span>
                    <button
                      onClick={() => alert(`Registered for ${c.title}`)}
                      className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                    >
                      Register
                    </button>
                    <button
                      onClick={() => setShowDetailForm(true)}
                      className="px-4 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Request Details
                    </button>
                  </div>
                ))}
              </>
            : <p className="text-gray-500 text-sm">No courses on this date.</p>
          : modalCourse
            ? <>
                <h4 className="font-semibold mb-2">{modalCourse.title}</h4>
                <button
                  onClick={() => alert(`Registered for ${modalCourse.title}`)}
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                >
                  Register
                </button>
                <button
                  onClick={() => setShowDetailForm(true)}
                  className="px-4 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Request Details
                </button>
              </>
            : <p className="text-gray-500 text-sm">Click a date on the calendar to see courses.</p>
        }
      </div>
    </motion.div>
  </div>
)}

      

      {/* Detail request form */}
      {showDetailForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <motion.form onSubmit={handleSubmitDetailForm} className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Request Course Details</h3>
            <input name="name" placeholder="Name" className="w-full p-2 border rounded"/>
            <input name="email" placeholder="Email" type="email" className="w-full p-2 border rounded"/>
            <textarea name="message" placeholder="Message" className="w-full p-2 border rounded"/>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowDetailForm(false)} className="px-4 py-2 border rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded">Submit</button>
            </div>
          </motion.form>
        </div>
      )}

      {/* CUSTOM COURSE REQUEST FORM */}
{showCustomRegister && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
    <motion.form
      onSubmit={handleSubmitCustom}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md space-y-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <button
        type="button"
        onClick={() => setShowCustomRegister(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-lg font-semibold text-orange-600">Request a Custom Course</h3>

      <input name="title" placeholder="Course Title" className="w-full p-2 border rounded" required />
      <input name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
      <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" required />
      <textarea name="details" placeholder="Describe your requirements" className="w-full p-2 border rounded" required />

      <div className="flex justify-end gap-2">
        <button type="button" onClick={() => setShowCustomRegister(false)} className="px-4 py-2 border rounded">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded">Submit</button>
      </div>
    </motion.form>
  </div>
)}

      <Footer />
    </>
  );
};

export default CrashCourses;
