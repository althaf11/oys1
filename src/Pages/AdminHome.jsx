import React from "react";

/**
 * AdminHome (single-file)
 *
 * Rewritten to avoid runtime errors caused by:
 * - Using <Link> outside a react-router <Router> context (which can throw when router context is missing)
 * - Importing icon components from external libraries that may not be available in the runtime
 *
 * This version:
 * - Uses plain <a> anchors (safe even without react-router). If you want SPA navigation,
 *   wrap your app in a <BrowserRouter /> and replace <a> with <Link>.
 * - Uses small local SVG icon components so there are no external icon dependency issues.
 * - Is Tailwind-ready and self-contained.
 */

// Small SVG icon components (safe and tiny)
const IconHome = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" />
  </svg>
);
const IconFile = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
  </svg>
);
const IconPhone = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.78.73 2.6a2 2 0 0 1-.45 2.11L9.91 9.91a14 14 0 0 0 6 6l.46-.46a2 2 0 0 1 2.11-.45c.82.36 1.7.61 2.6.73A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconCourses = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
  </svg>
);
const IconBell = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" />
  </svg>
);
const IconLayers = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 6-9 6-9-6 9-6z" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-6v6l-9 6-9-6v-6l9 6z" />
  </svg>
);
const IconGallery = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="3" y="3" width="18" height="14" rx="2" ry="2" strokeWidth="1.5" />
    <path d="M7 14l3-4 4 5 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const IconCalendar = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export default function AdminHome() {
  const items = [
    { name: "Resume", icon: IconFile, path: "/admin/resume" },
    { name: "Contact", icon: IconPhone, path: "/admin/contact" },
    { name: "Counselling", icon: IconCourses, path: "/admin/counselling" },
    { name: "Courses", icon: IconCourses, path: "/admin/course" },
    { name: "Alerts", icon: IconBell, path: "/admin/alerts" },
    { name: "Materials", icon: IconLayers, path: "/admin/material" },
    { name: "E-Learning", icon: IconCourses, path: "/admin/learn" },
    { name: "Gallery", icon: IconGallery, path: "/admin/gallery" },
    { name: "Events", icon: IconCalendar, path: "/admin/event" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-orange-700 flex justify-center items-center gap-2">
          {/* render icon component directly */}
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"><IconHome className="w-6 h-6 text-orange-700" /></span>
          OYS Admin Panel
        </h1>
        <p className="text-gray-600 mt-1">Manage all modules from one place</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center gap-3 border border-gray-200 hover:border-orange-600"
          >
            {/* use React.createElement to render icon in case it's passed as variable */}
            <span className="relative inline-block">
              {React.createElement(item.icon, { className: "w-10 h-10 text-orange-600" })}
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">3</span>
            </span>
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
          </a>
        ))}
      </div>

     
    </div>
  );
}
    