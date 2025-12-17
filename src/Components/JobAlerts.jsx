// import React, { useEffect, useState } from "react";
// import { Briefcase, MapPin, Clock } from "lucide-react";

// const jobAlerts = [
//   {
//     title: "Full Stack Developer",
//     company: "Infosys",
//     location: "Hyderabad, India",
//     type: "Full-Time",
//     posted: "2 days ago",
//   },
//   {
//     title: "Java Backend Engineer",
//     company: "TCS",
//     location: "Bengaluru, India",
//     type: "Full-Time",
//     posted: "1 day ago",
//   },
//   {
//     title: "Python Developer (Fresher)",
//     company: "Wipro",
//     location: "Chennai, India",
//     type: "Internship",
//     posted: "3 days ago",
//   },
//   {
//     title: "React.js Frontend Developer",
//     company: "Accenture",
//     location: "Pune, India",
//     type: "Contract",
//     posted: "5 days ago",
//   },
//   {
//     title: "DevOps Engineer",
//     company: "Cognizant",
//     location: "Remote",
//     type: "Full-Time",
//     posted: "1 week ago",
//   },
//   {
//     title: "Software Engineer Trainee",
//     company: "Tech Mahindra",
//     location: "Hyderabad, India",
//     type: "Full-Time",
//     posted: "4 days ago",
//   },
//   {
//     title: "UI/UX Designer",
//     company: "IBM",
//     location: "Bengaluru, India",
//     type: "Full-Time",
//     posted: "6 days ago",
//   },
//   {
//     title: "Data Analyst",
//     company: "Deloitte",
//     location: "Gurugram, India",
//     type: "Full-Time",
//     posted: "2 weeks ago",
//   },
//   {
//     title: "AI/ML Engineer",
//     company: "Google",
//     location: "Hyderabad, India",
//     type: "Full-Time",
//     posted: "1 week ago",
//   },
//   {
//     title: "Cloud Engineer (AWS)",
//     company: "Microsoft",
//     location: "Bengaluru, India",
//     type: "Full-Time",
//     posted: "3 days ago",
//   },
// ];

// const JobAlerts = () => {
//   // const [loading, setLoading] = useState(true);
  
//     // useEffect(() => {
//     //   // Simulate initial page load
//     //   const timer = setTimeout(() => setLoading(false), 1000);
//     //   return () => clearTimeout(timer);
//     // }, []);
  
//     // if (loading) {
//     //   return (
//     //     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
//     //       <div className="loader"></div>
//     //       <p className="mt-4 text-orange-600 font-semibold">Loading Job Alerts Page...</p>
//     //     </div>
//     //   );
//     // }
//   return (
//     <div className="bg-gray-50 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
//           Latest Job Alerts
//         </h2>

//         {/* Job Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobAlerts.map((job, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition"
//             >
//               <div className="flex items-center gap-2 text-orange-600 mb-3">
//                 <Briefcase size={20} />
//                 <h3 className="text-lg font-semibold">{job.title}</h3>
//               </div>
//               <p className="text-gray-700 font-medium">{job.company}</p>

//               <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
//                 <MapPin size={16} />
//                 {job.location}
//               </div>
//               <div className="flex items-center gap-2 text-gray-600 text-sm">
//                 <Clock size={16} />
//                 {job.posted}
//               </div>

//               <span className="inline-block mt-4 px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full">
//                 {job.type}
//               </span>

//               <button className="mt-5 w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition">
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobAlerts;

















import React, { useEffect, useRef, useState } from "react";
import { MoreVertical, Bell, X } from "lucide-react";

const initialAlerts = [
  { id: 1, category: "Job Alerts", message: "Frontend Developer: New job opportunity at Accenture", type: "job", unread: true },
  { id: 2, category: "Crash Course Alerts", message: "50% off on React Crash Course – Limited Time!", type: "course", unread: true },
  { id: 3, category: "Event Alerts", message: "Join upcoming Tech Hackathon 2025", type: "event", unread: true },
  { id: 4, category: "Motivation Alerts", message: "Never give up! Keep building your skills 💪", type: "motivation", unread: false },
  { id: 5, category: "Concession in Fee Alerts", message: "Special scholarship opportunity available", type: "fee", unread: false },
  { id: 6, category: "Interview Alerts", message: "Infosys is conducting interviews this week", type: "job", unread: true },
  { id: 7, category: "Mock Test Alerts", message: "Aptitude Mock Test updated", type: "mock", unread: false },
  { id: 8, category: "Choose Your Career Alerts", message: "AI/ML or Web Dev – which is right for you?", type: "career", unread: true },
  { id: 9, category: "Exam Notification Alerts", message: "GATE 2025 registration ends soon!", type: "exam", unread: false },
  { id: 10, category: "Material Alerts", message: "New DBMS materials added", type: "material", unread: true },
  { id: 11, category: "Current Affairs Alerts", message: "Today’s Tech Headlines are live", type: "news", unread: false },
  { id: 12, category: "Profile Related Alerts", message: "Your profile was viewed 10 times today", type: "profile", unread: true },
  { id: 13, category: "Access Card Renewal Alerts", message: "Access Card expiring soon – renew now", type: "access", unread: false },
  { id: 14, category: "Resume Approval/Ready Alerts", message: "Your resume is approved and ready to use", type: "job", unread: true },
  { id: 15, category: "Appointment with Counsellor Alerts", message: "Your counselling appointment is scheduled", type: "counsellor", unread: false },
];

const JobAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [preferences, setPreferences] = useState({});
  const [menuOpen, setMenuOpen] = useState(null);
  const [prefModalFor, setPrefModalFor] = useState(null);

  const wrapperRef = useRef(null);

  // Load initial alerts + admin alerts
  useEffect(() => {
    const adminAlerts = JSON.parse(localStorage.getItem("adminAlerts")) || [];

    // Place new admin alerts on top
    const combined = [...adminAlerts, ...initialAlerts];
    setAlerts(combined);

    const prefs = combined.reduce((acc, a) => ({ ...acc, [a.id]: true }), {});
    setPreferences(prefs);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleDocClick = (e) => {
      if (e.target.closest("[data-menu-area]") || e.target.closest("[data-menu-btn]")) return;
      setMenuOpen(null);
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  const handleDelete = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
    setMenuOpen(null);
    setPreferences((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const handleToggleUnread = (id) => {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, unread: !a.unread } : a)));
    setMenuOpen(null);
  };

  const openPreferenceModal = (id) => {
    setPrefModalFor(id);
    setMenuOpen(null);
  };

  const handleSavePreference = (id, value) => {
    setPreferences((prev) => ({ ...prev, [id]: value }));
    if (!value) setAlerts((prev) => prev.filter((a) => a.id !== id));
    setPrefModalFor(null);
    setMenuOpen(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
          Alerts & Notifications
        </h2>

        <div className="space-y-4">
          {alerts.length === 0 && (
            <p className="text-center text-gray-500 mt-6">🎉 No alerts to show.</p>
          )}

          {alerts.map((alert) =>
            preferences[alert.id] !== false ? (
              <div
                key={alert.id}
                className={`relative flex justify-between items-start border rounded-xl p-4 transition ${
                  alert.unread ? "bg-white shadow-md" : "bg-gray-100/80 backdrop-blur-sm text-gray-500"
                }`}
              >
                {/* Left: icon + message */}
                <div className="flex items-start gap-3">
                  <Bell size={24} className={`${alert.unread ? "text-blue-600" : "text-gray-400"} mt-1`} />
                  <div className="max-w-[70%]">
                    <p className={`font-medium ${alert.unread ? "text-gray-900" : "text-gray-600"}`}>
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{alert.category}</p>
                  </div>
                </div>

                {/* Unread dot */}
                {alert.unread && <span className="absolute right-14 top-4 h-3 w-3 bg-blue-600 rounded-full" />}

                {/* Right: three-dot menu */}
                <div className="relative">
                  <button
                    data-menu-btn
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen((prev) => (prev === alert.id ? null : alert.id));
                    }}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {menuOpen === alert.id && (
                    <div data-menu-area className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-56 z-30">
                      <button
                        onClick={() => handleDelete(alert.id)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Delete Notification
                      </button>
                      <button
                        onClick={() => handleToggleUnread(alert.id)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {alert.unread ? "Mark as Read" : "Mark as Unread"}
                      </button>
                      <button
                        onClick={() => openPreferenceModal(alert.id)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Change Notification Preference
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Preference Modal */}
      {prefModalFor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Notification Preference</h3>
              <button onClick={() => setPrefModalFor(null)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Turn notifications ON/OFF for:{" "}
              <span className="ml-1 font-medium text-orange-600">
                {alerts.find((a) => a.id === prefModalFor)?.category || "this alert"}
              </span>
            </p>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
              <div>
                <div className="text-gray-800 font-medium">
                  {alerts.find((a) => a.id === prefModalFor)?.category}
                </div>
                <div className="text-xs text-gray-500">
                  {alerts.find((a) => a.id === prefModalFor)?.message}
                </div>
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences[prefModalFor] !== false}
                    onChange={(e) => setPreferences((prev) => ({ ...prev, [prefModalFor]: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-orange-500 relative after:content-[''] after:absolute after:top-[6px] after:left-[6px] after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-transform peer-checked:after:translate-x-6"></div>
                </label>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setPrefModalFor(null)}
                className="px-4 py-2 rounded-md border text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => handleSavePreference(prefModalFor, preferences[prefModalFor] !== false)}
                className="px-4 py-2 rounded-md bg-orange-600 text-white text-sm hover:bg-orange-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobAlerts;
