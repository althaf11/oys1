// import React from "react";
// import { motion } from "framer-motion";
// import { FileText, Bell, Target, Video, BookOpen, User, ScrollText, Phone } from "lucide-react";

// export default function Box() {
//   const services = [
//     { name: "Resume Maker", icon: <FileText />, desc: "Ready-to-use resumes with video feature." },
//     { name: "Alerts Hub", icon: <Bell />, desc: "Instant updates on jobs and exams." },
//     { name: "Career App", icon: <Target />, desc: "Track learning and placement readiness." },
//     { name: "Crash Courses", icon: <Video />, desc: "Mock tests and fast-track training." },
//     { name: "E-Materials", icon: <BookOpen />, desc: "Digital notes and reports access." },
//     { name: "Career Counselling", icon: <User />, desc: "Get expert mentorship and support." },
//     { name: "E-Access Card", icon: <ScrollText />, desc: "Digital ID for student access." },
//     { name: "Toll-Free Support", icon: <Phone />, desc: "24/7 student helpdesk." },
//   ];

//   return (
//     <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border overflow-hidden">
//       <h2 className="text-xl font-bold text-center py-3 bg-orange-600 text-white">
//         Operation Yuva Sankalp Services
//       </h2>

//       {/* Infinite Scrolling Content */}
//       <motion.div
//         className="flex flex-col gap-3 p-4"
//         animate={{ y: ["0%", "-100%"] }}
//         transition={{
//           duration: 30, // speed (higher = slower)
//           ease: "linear",
//           repeat: Infinity,
//         }}
//       >
//         {[...services, ...services].map((service, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm"
//           >
//             <span className="text-orange-600">{service.icon}</span>
//             <div>
//               <h3 className="font-semibold text-gray-800 text-sm">{service.name}</h3>
//               <p className="text-xs text-gray-500">{service.desc}</p>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }





import { useState, useEffect } from 'react';

export default function C3ArenaMeeting() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [meetingStarted, setMeetingStarted] = useState(false);
  const [jitsiLoaded, setJitsiLoaded] = useState(false);

  const FIXED_ROOM = "C3Arena_MainMeeting_2025";
  const ADMIN_PASSWORD = "admin123";

  // Load Jitsi script
  useEffect(() => {
    if (typeof window.JitsiMeetExternalAPI !== 'undefined') {
      setJitsiLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => setJitsiLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleShowAdminLogin = () => {
    setShowAdminLogin(true);
  };

  const handleStartMeeting = () => {
    if (adminPassword !== ADMIN_PASSWORD) {
      alert("Incorrect admin password!");
      return;
    }
    loadMeeting(true);
  };

  const handleJoinMeeting = () => {
    loadMeeting(false);
  };

  const loadMeeting = (isHost) => {
    if (!jitsiLoaded) {
      alert("Meeting system is loading. Please try again in a moment.");
      return;
    }

    setMeetingStarted(true);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const domain = "meet.jit.si";
      const meetingContainer = document.querySelector('#jitsi-meet-container');

      if (!meetingContainer) {
        console.error("Meeting container not found");
        return;
      }

      const options = {
        roomName: FIXED_ROOM,
        width: "100%",
        height: "100%",
        parentNode: meetingContainer,
        userInfo: {
          displayName: isHost ? "Admin (Host)" : "Student"
        },
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: isHost
            ? [
                'microphone', 'camera', 'desktop', 'chat',
                'raisehand', 'tileview', 'mute-everyone',
                'hangup'
              ]
            : [
                'microphone', 'camera', 'desktop', 'chat',
                'raisehand', 'tileview', 'hangup'
              ]
        }
      };

      new window.JitsiMeetExternalAPI(domain, options);
    }, 100);
  };

  if (meetingStarted) {
    return (
      <div 
        id="jitsi-meet-container" 
        className="w-full h-screen"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">
          C3 Arena Meeting
        </h2>
        <p className="text-gray-600 mb-6">
          Select your role to continue:
        </p>

        <button
          onClick={handleShowAdminLogin}
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors duration-300"
        >
          I am Admin
        </button>

        <button
          onClick={handleJoinMeeting}
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors duration-300 mt-3"
        >
          Join Meeting (Student)
        </button>

        {showAdminLogin && (
          <div className="mt-4">
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Enter Admin Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleStartMeeting();
                }
              }}
            />
            <button
              onClick={handleStartMeeting}
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors duration-300 mt-3"
            >
              Start Meeting
            </button>
          </div>
        )}
      </div>
    </div>
  );
}