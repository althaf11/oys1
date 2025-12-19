// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, Bell } from "lucide-react"; // icons

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [notifications, setNotifications] = useState(5); // example count

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/events", label: "Events" },
//     { path: "/materials", label: "Materials" },
//     { path: "/CrashCourse", label: "Crash Course" },
//     { path: "/resume", label: "Resume" },
//     { path: "/councelling", label: "Councelling" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 relative bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <div className="bg-orange-600 text-white p-2 rounded-md">🎓</div>
//           <h1 className="font-bold text-lg">Yuva Sankalp Guidance</h1>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
//           {/* Home first */}
//           <li>
//             <NavLink
//               to={navItems[0].path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
//                   : "hover:text-orange-600 transition-colors"
//               }
//             >
//               {navItems[0].label}
//             </NavLink>
//           </li>

//           {/* Remaining links */}
//           {navItems.slice(1).map((item, idx) => (
//             <li key={idx}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
//                     : "hover:text-orange-600 transition-colors"
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}

//           {/* E-Access */}
//           <li className="hover:text-orange-600 cursor-pointer transition-colors">E-Access</li>

//           {/* Notification Icon */}
//           <li className="relative cursor-pointer">
//             <Bell size={28} className="text-gray-700 hover:text-orange-600 transition-colors" />
//             {notifications > 0 && (
//               <Link to='/alerts' className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {notifications}
//               </Link>
//             )}
//           </li>
//         </ul>

//         {/* Desktop Buttons */}

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur shadow-md z-50 md:hidden border-b">
//             <ul className="flex flex-col space-y-4 p-6 font-medium text-gray-700">
//               {/* Home */}
//               <li>
//                 <NavLink
//                   to={navItems[0].path}
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-orange-600 font-semibold border-b-2 border-orange-600 pb-1"
//                       : "hover:text-orange-600 transition-colors"
//                   }
//                 >
//                   {navItems[0].label}
//                 </NavLink>
//               </li>

//               {/* Remaining links */}
//               {navItems.slice(1).map((item, idx) => (
//                 <li key={idx}>
//                   <NavLink
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={({ isActive }) =>
//                       isActive
//                         ? "bg-orange-700 text-white px-4 py-2 rounded-md text-center shadow"
//                         : "bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 text-center shadow transition-colors"
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}

//               {/* E-Access */}
//               <li className="hover:text-orange-600 transition-colors">E-Access</li>

//               {/* Notification Icon */}
//               <li className="relative cursor-pointer">
//                 <Bell size={22} className="text-gray-700 hover:text-orange-600 transition-colors" />
//                 {notifications > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                     {notifications}
//                   </span>
//                 )}
//               </li>

//               {/* Sign In/Register */}
//               <div className="flex flex-col space-y-2 pt-4">
//                 <NavLink
//                   to="/login"
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "bg-orange-700 text-white px-4 py-2 rounded-md text-center shadow"
//                       : "bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 text-center shadow transition-colors"
//                   }
//                 >
//                   Sign In
//                 </NavLink>
//                 <NavLink
//                   to="/register"
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "bg-orange-700 text-white px-4 py-2 rounded-md text-center shadow"
//                       : "bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 text-center shadow transition-colors"
//                   }
//                 >
//                   Register
//                 </NavLink>
//               </div>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Bell, Moon, Sun } from "lucide-react";
import PhoneModal from "./Phonemodel";
import { Smartphone } from "lucide-react"; // ✅ ADD ONLY

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(5);
  const [showAppModal, setShowAppModal] = useState(false); // ✅ ADD ONLY

  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const location = useLocation();
  const servicesRef = useRef(null);
  const profileRef = useRef(null);

  // 🌙 Apply Dark Mode on Load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Dropdown close handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinkClass =
    "font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition relative";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b dark:border-gray-700">
      <div className="max-w-8xl mx-auto flex items-center justify-around px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={handleMobileNavClick}
        >
          <div className=" text-white p-2 rounded-md shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgIdhQh82B9GSWBv4bKPkIjn30IhEg32fuQ&s"
              className="lg:w-18 lg:h-14"
              alt="Logo"
            />
          </div>
          <span className="hidden sm:inline font-extrabold text-xl text-orange-500 dark:text-white">
            Operation Yuva Sankalp
          </span>
          <span className="inline sm:hidden font-semibold dark:text-white">
            OYS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 border-b-2 border-orange-600 pb-1"
                : navLinkClass
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 border-b-2 border-orange-600 pb-1"
                : navLinkClass
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 border-b-2 border-orange-600 pb-1"
                : navLinkClass
            }
          >
            Admin Page
          </NavLink>

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium transition ${
                location.pathname.includes("/services")
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-600"
              }`}
              onClick={() => setServicesOpen((s) => !s)}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.516 7.548a.75.75 0 1 1 1.06-1.06L10 9.913l3.424-3.424a.75.75 0 0 1 1.06 1.06l-3.954 3.954a.75.75 0 0 1-1.06 0L5.516 7.548z" />
              </svg>
            </button>

            <div
              className={`absolute left-0 mt-0 w-[500px] rounded-lg shadow-lg bg-orange-100 dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-4 p-5">
                {[
                  { path: "/services/resume", label: "Resume" },
                  {
                    path: "/services/career-counseling",
                    label: "Career Counseling",
                  },
                  { path: "/services/crash-courses", label: "Crash Courses" },
                  { path: "/services/e-materials", label: "E-Materials" },
                  { path: "/services/e-calendar", label: "E-Calendar" },
                  { path: "/services/e-access", label: "E-Access Card" },
                  { path: "/services/e-learning", label: "E-Learning" },
                  { path: "/services/e-c3", label: "C3Arena" },
                ].map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.path}
                    className={({ isActive }) =>
                      `group block px-3 py-2 rounded-md transition-all duration-300 
                      hover:text-orange-700 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 
                      ${
                        isActive
                          ? "text-orange-700 font-semibold bg-orange-50 dark:bg-gray-700"
                          : "text-gray-700 dark:text-gray-300"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 border-b-2 border-orange-600 pb-1"
                : navLinkClass
            }
          >
            Gallery
          </NavLink>

          {/* ✅ Mobile App Tab */}
          <button
            onClick={() => setShowAppModal(true)}
            className="flex items-center gap-1 font-medium text-orange-600 hover:underline"
          >
            <Smartphone size={18} />
            Mobile App
          </button>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 border-b-2 border-orange-600 pb-1"
                : navLinkClass
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Link to="/alerts" className="relative inline-flex items-center">
            <Bell
              size={22}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
            />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {notifications}
              </span>
            )}
          </Link>

          <PhoneModal />

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun size={22} className="text-yellow-400" />
            ) : (
              <Moon size={22} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Profile */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => setProfileOpen((s) => !s)}
              className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-semibold text-gray-700 dark:text-white">
                A
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                Althaf
              </span>
            </button>

            <div
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-150 ${
                profileOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="py-2">
                <Link
                  to="/pagination"
                  onClick={handleMobileNavClick}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Profile
                </Link>

                <Link
                  to="/logout"
                  onClick={handleMobileNavClick}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen((s) => !s)}>
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {/* Main Items */}
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact Us" },
            { to: "/admin", label: "Admin" },
          ].map((item, i) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={i}
                to={item.to}
                onClick={handleMobileNavClick}
                className={`block px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen((s) => !s)}
              className={`w-full flex items-center justify-between px-2 py-2 font-medium rounded-md ${
                location.pathname.includes("/services")
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-700"
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.516 7.548a.75.75 0 1 1 1.06-1.06L10 9.913l3.424-3.424a.75.75 0 0 1 1.06 1.06l-3.954 3.954a.75.75 0 0 1-1.06 0L5.516 7.548z" />
              </svg>
            </button>

            <div
              className={`grid grid-cols-2 gap-2 mt-2 pl-4 transition-all duration-300 ${
                servicesOpen ? "max-h-60" : "max-h-0 overflow-hidden"
              }`}
            >
              {[
                { label: "Resume", path: "/services/resume" },
                {
                  label: "Career Counseling",
                  path: "/services/career-counseling",
                },
                { label: "Crash Courses", path: "/services/crash-courses" },
                { label: "E-Materials", path: "/services/e-materials" },
                { label: "E-Calendar", path: "/services/e-calendar" },
                { label: "E-Access Card", path: "/services/e-access" },
                { label: "E-Learning", path: "/services/e-learning" },
                { path: "/services/e-c3", label: "C3Arena" },
              ].map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={handleMobileNavClick}
                    className={`block px-2 py-2 rounded-md text-sm transition ${
                      isActive
                        ? "bg-orange-100 text-orange-700 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            {/* ✅ Mobile App Tab */}
            <button
              onClick={() => setShowAppModal(true)}
              className="flex items-center gap-1 font-medium text-orange-600 hover:underline"
            >
              <Smartphone size={18} />
              Mobile App
            </button>
          </div>
        </div>
      </div>
      {/* ✅ Mobile App Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-[999] mt-64 bg-black/60 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowAppModal(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              Download OYS App
            </h2>

            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                QR CODE
              </div>

              <div className="flex gap-4">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  className="h-10"
                  alt="App Store"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  className="h-10"
                  alt="Play Store"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
