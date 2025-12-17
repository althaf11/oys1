// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import RecentEvents from "./RecentEvents";
// import CitiesPage from "./CitiesPages";

// const EventsCalendar = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const allEvents = [
//     // Government
//     { title: "Civil Services Exam", date: "2025-09-02", color: "#2563eb", group: "Government" },
//     { title: "Public Sector Hackathon", date: "2025-09-05", color: "#2563eb", group: "Government" },
//     { title: "Defence Recruitment Drive", date: "2025-09-10", color: "#2563eb", group: "Government" },

//     // Corporate
//     { title: "Infosys Campus Drive", date: "2025-09-03", color: "#16a34a", group: "Corporate" },
//     { title: "TCS Tech Summit", date: "2025-09-07", color: "#16a34a", group: "Corporate" },
//     { title: "Microsoft Hiring Challenge", date: "2025-09-12", color: "#16a34a", group: "Corporate" },

//     // Startup
//     { title: "Startup Pitch Day", date: "2025-09-04", color: "#f59e0b", group: "Startup" },
//     { title: "AI Innovation Meetup", date: "2025-09-06", color: "#f59e0b", group: "Startup" },
//     { title: "FinTech Hackathon", date: "2025-09-09", color: "#f59e0b", group: "Startup" },

//     // International
//     { title: "Global AI Conference", date: "2025-09-08", color: "#9333ea", group: "International" },
//     { title: "World Tech Forum", date: "2025-09-15", color: "#9333ea", group: "International" },
//     { title: "International Startup Expo", date: "2025-09-18", color: "#9333ea", group: "International" },
//   ];

//   // Filter events based on selected category
//   const filteredEvents =
//     selectedCategory === "all"
//       ? allEvents
//       : allEvents.filter((event) => event.group === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Events Calendar</h1>

//       {/* Filter Buttons */}
//       <div className="flex justify-center flex-wrap gap-4 mb-6">
//         {["all", "Government", "Corporate", "Startup", "International"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-5 py-2 rounded-full font-medium transition ${
//               selectedCategory === cat
//                 ? "bg-orange-600 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {cat === "all" ? "All Events" : cat}
//           </button>
//         ))}
//       </div>

//       {/* Legend */}
//       <div className="flex justify-center gap-6 mb-6">
//         <span className="flex items-center gap-2">
//           <span className="w-4 h-4 bg-orange-600 rounded"></span> Government
//         </span>
//         <span className="flex items-center gap-2">
//           <span className="w-4 h-4 bg-green-600 rounded"></span> Corporate
//         </span>
//         <span className="flex items-center gap-2">
//           <span className="w-4 h-4 bg-yellow-500 rounded"></span> Startup
//         </span>
//         <span className="flex items-center gap-2">
//           <span className="w-4 h-4 bg-purple-600 rounded"></span> International
//         </span>
//       </div>

//       {/* Calendar */}
//       <div className="bg-white p-4 shadow-lg rounded-xl">
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: "dayGridMonth,timeGridWeek,timeGridDay",
//           }}
//           events={filteredEvents}
//           height="auto"
//         />
//       </div>
//       <CitiesPage/>
//       <RecentEvents/>
//     </div>
//   );
// };

// export default EventsCalendar;

// EventCalendar.jsx
// EventCalendar.jsx
// EventCalendar.jsx
// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import RecentEvents from "./RecentEvents";
// import CitiesPage from "./CitiesPages";

// export default function EventCalendar() {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [chatOpen, setChatOpen] = useState(true);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const events = [
//     { title: "Civil Services Exam", date: "2025-09-02", category: "Government" },
//     { title: "Infosys Campus Drive", date: "2025-09-02", category: "Corporate" },
//     { title: "Startup Pitch Day", date: "2025-09-03", category: "Startup" },
//     { title: "Public Sector Hackathon", date: "2025-09-04", category: "Government" },
//     { title: "AI Innovation Meetup", date: "2025-09-05", category: "Startup" },
//     { title: "TCS Tech Summit", date: "2025-09-07", category: "Corporate" },
//     { title: "Global AI Conference", date: "2025-09-08", category: "International" },
//     { title: "FinTech Hackathon", date: "2025-09-09", category: "Startup" },
//     { title: "Defence Recruitment Drive", date: "2025-09-09", category: "Government" },
//     { title: "Microsoft Hiring Challenge", date: "2025-09-11", category: "Corporate" },
//     { title: "World Tech Forum", date: "2025-09-14", category: "International" },
//     { title: "International Startup Expo", date: "2025-09-17", category: "International" },
//   ];

//   // Assign category colors
//   const getCategoryColor = (category) => {
//     switch (category) {
//       case "Government": return "orange";
//       case "Corporate": return "green";
//       case "Startup": return "orange";
//       case "International": return "purple";
//       default: return "gray";
//     }
//   };

//   // Handle sending chat messages
//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages([...messages, { text: input, sender: "You" }]);
//       setInput("");
//     }
//   };

//   return (
//     <>
//     <div className="flex relative">
//       {/* Calendar takes 75% width */}
//       <div className="w-3/4 p-4">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           events={events.map((event) => ({
//             ...event,
//             color: getCategoryColor(event.category),
//           }))}
//           eventClick={(info) => {
//             setSelectedEvent({
//               title: info.event.title,
//               date: info.event.startStr,
//               category: info.event.extendedProps.category,
//             });
//           }}
//           height="auto"
//         />
//       </div>

//       {/* Event Detail + Chatbox (25% width) */}
//       <div className="w-1/4 border-l bg-gray-50 flex flex-col">
//         {/* Event Details */}
//         <div className="p-5 border-b">
//           {selectedEvent ? (
//             <>
//               <h2 className="text-xl font-semibold mb-2">{selectedEvent.title}</h2>
//               <p className="text-gray-600 mb-2">📅 Date: {selectedEvent.date}</p>
//               <p className="text-gray-600 mb-4">
//                 🏷️ Category:{" "}
//                 <span className="font-medium">{selectedEvent.category}</span>
//               </p>
//               <p className="text-sm text-gray-500">
//                 Here you can show extra details like event description, location,
//                 speakers, or registration link.
//               </p>
//               <button
//                 onClick={() => setSelectedEvent(null)}
//                 className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 Close
//               </button>
//               <button
                
//                 className="mt-4 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 ml-2"
//               >
//                 Share
//               </button>
//             </>
//           ) : (
//             <p className="text-gray-500 italic">Click on an event to see details</p>
//           )}
//         </div>

//         {/* Chatbox */}
//         {chatOpen && (
//           <div className="flex flex-col flex-grow">
//             {/* Chat Header */}
//             <div className="flex justify-between items-center bg-gray-200 px-3 py-2 border-b">
//               <h3 className="font-semibold">💬 Chat</h3>
//               <button
//                 onClick={() => setChatOpen(false)}
//                 className="text-gray-600 hover:text-red-600 font-bold"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-grow overflow-y-auto p-3 space-y-2">
//               {messages.length === 0 ? (
//                 <p className="text-gray-400 text-sm italic">No messages yet</p>
//               ) : (
//                 messages.map((msg, idx) => (
//                   <div key={idx} className="p-2 bg-white shadow rounded">
//                     <span className="font-semibold">{msg.sender}: </span>
//                     <span>{msg.text}</span>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Input + Send */}
//             <div className="flex p-2 border-t">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                 className="flex-grow border rounded-l px-2 py-1 focus:outline-none"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-orange-500 text-white px-4 rounded-r hover:bg-orange-600"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}

//         {!chatOpen && (
//           <button
//             onClick={() => setChatOpen(true)}
//             className="m-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//           >
//             Open Chat
//           </button>
//         )}
//       </div>
//     </div>
//     <CitiesPage/>
//     <RecentEvents/>
//     </>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import RecentEvents from "./RecentEvents";
import CitiesPage from "./CitiesPages";
import Footer from "./Footer";

export default function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [viewMode, setViewMode] = useState("calendar");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");

  const [adminEvents, setAdminEvents] = useState([]);

  const calendarRef = useRef(null);

  /* 🔹 Helper: Current month date */
  const getCurrentMonthDate = (day) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  /* 🔹 Static events (current month) */
  const events = [
    { title: "Civil Services Exam", date: getCurrentMonthDate(2), category: "Job Fair", mode: "Offline", organizer: "UPSC" },
    { title: "Infosys Campus Drive", date: getCurrentMonthDate(4), category: "Job Fair", mode: "Offline", organizer: "Infosys" },
    { title: "Startup Pitch Day", date: getCurrentMonthDate(6), category: "Expo", mode: "Offline", organizer: "StartupHub" },
    { title: "Public Sector Hackathon", date: getCurrentMonthDate(8), category: "Workshop", mode: "Online", organizer: "GovHack" },
    { title: "AI Innovation Meetup", date: getCurrentMonthDate(10), category: "Seminar", mode: "Online", organizer: "AI Group" },
  ];

  /* 🔹 Load admin events */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("events")) || [];
    setAdminEvents(stored);
  }, []);

  const allEvents = [...events, ...adminEvents];

  /* 🔹 Filters */
  const filteredEvents = allEvents.filter((event) => {
    const matchCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchMode = selectedMode === "All" || event.mode === selectedMode;
    return matchCategory && matchMode;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case "Workshop": return "orange";
      case "Expo": return "green";
      case "Seminar": return "purple";
      case "Job Fair": return "orange";
      default: return "gray";
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  const handleMonthChange = (e) => {
    const month = parseInt(e.target.value);
    setCurrentMonth(month);
    const calendarApi = calendarRef.current.getApi();
    const year = new Date().getFullYear();
    calendarApi.gotoDate(new Date(year, month, 1));
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row relative">
        {/* Calendar/List Column */}
        <div className="w-full lg:w-3/4 p-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
            <div className="flex flex-wrap gap-3">
              <div>
                <label className="mr-2 font-medium">Month:</label>
                <select value={currentMonth} onChange={handleMonthChange} className="border px-2 py-1 rounded">
                  {months.map((m, idx) => (
                    <option key={idx} value={idx}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mr-2 font-medium">Category:</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border px-2 py-1 rounded">
                  <option value="All">All</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Expo">Expo</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Job Fair">Job Fair</option>
                </select>
              </div>

              <div>
                <label className="mr-2 font-medium">Mode:</label>
                <select value={selectedMode} onChange={(e) => setSelectedMode(e.target.value)} className="border px-2 py-1 rounded">
                  <option value="All">All</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setViewMode("calendar")} className={`px-3 py-1 rounded border ${viewMode === "calendar" ? "bg-orange-500 text-white" : "bg-white"}`}>
                📅 Calendar
              </button>
              <button onClick={() => setViewMode("list")} className={`px-3 py-1 rounded border ${viewMode === "list" ? "bg-orange-500 text-white" : "bg-white"}`}>
                📋 List
              </button>
            </div>
          </div>

          {viewMode === "calendar" ? (
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              initialDate={new Date()}
              events={filteredEvents.map((event) => ({
                ...event,
                color: getCategoryColor(event.category),
              }))}
              eventClick={(info) => {
                setSelectedEvent({
                  title: info.event.title,
                  date: info.event.startStr,
                  category: info.event.extendedProps.category,
                  mode: info.event.extendedProps.mode,
                });
              }}
              height="auto"
            />
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event, idx) => (
                <div key={idx} className="p-4 border rounded shadow bg-white">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p>📅 {event.date}</p>
                  <p className="text-sm text-gray-600">
                    {event.category} | {event.mode} | {event.organizer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Event Details + Chat */}
        <div className="w-full lg:w-1/4 border-l bg-gray-50 flex flex-col">
          <div className="p-5 border-b">
            {selectedEvent ? (
              <>
                <h2 className="text-xl font-semibold">{selectedEvent.title}</h2>
                <p>📅 {selectedEvent.date}</p>
                <p>🏷️ {selectedEvent.category}</p>
                <p>🖥️ {selectedEvent.mode}</p>
                <button onClick={() => setSelectedEvent(null)} className="mt-3 bg-red-500 text-white px-3 py-1 rounded">Close</button>
                <button onClick={() => setSelectedEvent(null)} className="mt-3 bg-blue-500 text-white px-3 py-1 rounded ml-4">Share</button>
              </>
            ) : (
              <p className="italic text-gray-500">Click an event for details</p>
            )}
          </div>

          {chatOpen && (
            <div className="flex flex-col flex-grow">
              <div className="bg-gray-200 px-3 py-2 font-semibold">💬 Chat</div>
              <div className="flex-grow p-3 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div key={idx} className="mb-2 bg-white p-2 rounded shadow">
                    <b>{msg.sender}:</b> {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex p-2 border-t">
                <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow border px-2" />
                <button onClick={handleSend} className="bg-orange-500 text-white px-4">Send</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <CitiesPage />
      <RecentEvents />
      <Footer />
    </>
  );
}
