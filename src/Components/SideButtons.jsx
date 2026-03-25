// import { MessageCircle, HelpCircle, ArrowUp } from "lucide-react";

// const SideButtons = () => {

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">

//       {/* Chat */}
//       <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition">
//         <MessageCircle size={22} />
//       </button>

//       {/* Help */}
//       <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition">
//         <HelpCircle size={22} />
//       </button>

//       {/* Scroll to Top */}
//       <button 
//         onClick={scrollToTop}
//         className="bg-gray-800 hover:bg-black text-white p-3 rounded-full shadow-lg transition"
//       >
//         <ArrowUp size={22} />
//       </button>

//     </div>
//   );
// };

// export default SideButtons;


// import { useState } from "react";
// import { MessageCircle, HelpCircle, ArrowUp, Settings } from "lucide-react";
// import { Link } from "react-router-dom";

// const SideButtons = () => {
//   const [open, setOpen] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div
//       className="fixed right-6 bottom-10 flex flex-col items-center gap-3 z-50"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
      
//       {/* Hidden Buttons */}
//       {open && (
//         <>
//           {/* Chat */}
//           <Link
//             to="/chat"
//             className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <MessageCircle size={22} />
//           </Link>

//           {/* Help */}
//           <Link
//             to="/help"
//             className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <HelpCircle size={22} />
//           </Link>
//           <Link
//             to="/help"
//             className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <HelpCircle size={22} />
//           </Link>
//           <Link
//             to="/help"
//             className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <HelpCircle size={22} />
//           </Link>
//           <Link
//             to="/help"
//             className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <HelpCircle size={22} />
//           </Link>
//           <Link
//             to="/help"
//             className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <HelpCircle size={22} />
//           </Link>
//           <Link
//             to="/help"
//             className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
//           >
//             <HelpCircle size={22} />
//           </Link>
          

//           {/* Scroll Top */}
//           <button
//             onClick={scrollToTop}
//             className="bg-gray-700 hover:bg-black text-white p-3 rounded-full shadow-lg transition"
//           >
//             <ArrowUp size={22} />
//           </button>
//         </>
//       )}

//       {/* Main Button */}
//       <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-xl flex items-center gap-2">
//         <Settings size={22} />
//         {open && <span className="text-sm font-medium">Services</span>}
//       </button>
//     </div>
//   );
// };

// export default SideButtons;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  BookOpen,
  Calendar,
  GraduationCap,
  Users,
  CreditCard,
  Trophy,
  Zap,
  Grid
} from "lucide-react";

const services = [
  { name: "Resume", icon: FileText, path: "services/resume" },
  { name: "Crash Course", icon: Zap, path: "services/crash-courses" },
  { name: "E-Library", icon: BookOpen, path: "services/e-materials" },
  { name: "E-Calendar", icon: Calendar, path: "services/e-calendar" },
  { name: "E-Preparation", icon: GraduationCap, path: "services/e-learning" },
  { name: "Career Counselling", icon: Users, path: "services/career-counseling" },
  { name: "E-Access Card", icon: CreditCard, path: "services/e-access" },
  { name: "C3 Arena", icon: Trophy, path: "services/e-c3" }
];

const SideServices = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Service Items */}
      {open &&
        services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Link
              key={index}
              to={service.path}
              className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
              <Icon size={20} className="text-orange-600" />
              <span className="text-sm font-medium whitespace-nowrap">
                {service.name}
              </span>
            </Link>
          );
        })}

      {/* Main Button */}
      <button className="bg-orange-500 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl flex items-center gap-2">
        <Grid size={22} />Our Services
        {open && <span className="text-sm font-semibold"></span>}
      </button>
    </div>
  );
};

export default SideServices;