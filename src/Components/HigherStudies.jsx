// src/components/HigherStudies.jsx
import React, { useState, useMemo, useEffect } from "react";
import { higherStudiesData } from "../Components/HigherStudiesData";

const HigherStudies = () => {
  const [country, setCountry] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");

  // Flattened helper for rendering colleges when searching or filtering
  const countries = useMemo(() => Object.keys(higherStudiesData), []);

  const resetAfterCountry = (c) => {
    setCollege("");
    setCourse("");
    setCountry(c);
  };

  const resetAfterCollege = (col) => {
    setCourse("");
    setCollege(col);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">
          Higher Studies Planner
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Choose a country → college → course. Results update dynamically.
          Tell Your Interest to us:
        </p>

        {/* selectors */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select
              value={country}
              onChange={(e) => resetAfterCountry(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="">-- Select Country --</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* College */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
            <select
              value={college}
              onChange={(e) => resetAfterCollege(e.target.value)}
              disabled={!country}
              className="w-full border rounded-lg px-3 py-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="">-- Select College --</option>
              {country &&
                Object.keys(higherStudiesData[country]).map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
            </select>
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              disabled={!college}
              className="w-full border rounded-lg px-3 py-2 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="">-- Select Course --</option>
              {country &&
                college &&
                higherStudiesData[country][college].map((crs) => (
                  <option key={crs} value={crs}>
                    {crs}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* college cards (show when country selected) */}
        {country && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Colleges in {country}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.keys(higherStudiesData[country]).map((col) => (
                <div
                  key={col}
                  onClick={() => resetAfterCollege(col)}
                  className={`p-4 border rounded-lg hover:shadow-xl transition cursor-pointer ${
                    college === col ? "border-orange-600 bg-orange-50" : "bg-white"
                  }`}
                >
                  <h4 className="font-semibold text-gray-800">{col}</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {higherStudiesData[country][col].slice(0, 3).join(", ")}
                    {higherStudiesData[country][col].length > 3 ? "..." : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* course list / highlight */}
        {college && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Courses at {college}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {higherStudiesData[country][college].map((crs) => (
                <button
                  key={crs}
                  onClick={() => setCourse(crs)}
                  className={`text-left px-4 py-3 rounded-lg border transition ${
                    course === crs ? "bg-orange-600 text-white" : "bg-white hover:shadow"
                  }`}
                >
                  {crs}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* final selection */}
        {course && (
          <div className="mt-8 p-4 border-l-4 border-orange-600 bg-orange-50 rounded-md">
            <h4 className="font-semibold text-orange-700">Your Selection</h4>
            <p className="mt-2 text-gray-800">
              <strong>Country:</strong> {country} <br />
              <strong>College:</strong> {college} <br />
              <strong>Course:</strong> {course}
            </p>
              <button className="bg-orange-400 hover:bg-orange-600 rounded-xl px-4 py-2 text-white">Submit</button>
          </div>
        
        )}
      </div>
    </section>
  );
};

export default HigherStudies;



// // src/Components/Brochure.jsx
// import React from "react";

// /**
//  * Brochure.jsx
//  * Digital + printable tri-fold brochure for your portal.
//  *
//  * Usage:
//  *  - Add this component anywhere in your app
//  *  - Put your images in /public/assets/ (logo.png, hero.jpg, qr.png)
//  *  - Click "Print / Save as PDF" to create A4 printable PDF via browser print
//  *
//  * Tailwind:
//  *  - Ensure Tailwind's 'print' utilities are enabled (Tailwind default supports print:)
//  *  - For best printed result, use Chrome/Edge -> Print -> Destination: Save as PDF -> Paper size: A4
//  */

// const FeatureItem = ({ icon, title, desc }) => (
//   <div className="flex gap-3">
//     <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center border">
//       <div className="text-xl">{icon}</div>
//     </div>
//     <div>
//       <h4 className="font-semibold text-sm">{title}</h4>
//       <p className="text-xs text-gray-600 mt-1 leading-tight">{desc}</p>
//     </div>
//   </div>
// );

// export default function HigherStudies() {
//   const handlePrint = () => {
//     // Small delay so any interactive UI updates finish
//     setTimeout(() => window.print(), 100);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-[1100px] mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-3">
//             <img src="/assets/logo.png" alt="logo" className="w-12 h-12 object-contain" />
//             <div>
//               <h1 className="text-2xl font-extrabold">YourPortal</h1>
//               <p className="text-sm text-gray-500">Your smart gateway to career & higher studies</p>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={handlePrint}
//               className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
//             >
//               Print / Save as PDF
//             </button>
//             <a
//               href="#contact"
//               className="px-4 py-2 border rounded text-orange-700 hover:bg-orange-50"
//             >
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* brochure canvas */}
//         <div
//           className="mx-auto bg-white shadow-lg rounded overflow-hidden print:shadow-none print:rounded-none"
//           style={{
//             // desktop preview width; print uses print rules
//             width: "100%",
//             maxWidth: "1000px",
//           }}
//         >
//           {/* Desktop: visual tri-fold. For printing we provide css to layout on A4 */}
//           <div className="p-6 print:p-8">
//             {/* Visual tri-fold layout for web */}
//             <div className="hidden md:block">
//               <div className="grid grid-cols-3 gap-6">
//                 {/* Left panel (front when folded) */}
//                 <div className="flex flex-col gap-4 border rounded-lg p-4">
//                   <h3 className="text-lg font-bold text-orange-700">About YourPortal</h3>
//                   <p className="text-sm text-gray-600">
//                     One platform that brings together learning materials, job alerts, events,
//                     resume tools, and higher-studies guidance — all personalized for students
//                     and professionals.
//                   </p>

//                   <div className="mt-2">
//                     <h5 className="text-sm font-semibold mb-2">Quick Highlights</h5>
//                     <ul className="text-sm text-gray-600 space-y-1 list-inside list-disc">
//                       <li>2500+ curated materials across branches</li>
//                       <li>Event calendar: Government / Corporate / Startup / International</li>
//                       <li>ATS-friendly resume builder + video resume</li>
//                       <li>Job alerts & college finder</li>
//                     </ul>
//                   </div>

//                   <div className="mt-auto">
//                     <img src="/assets/qr.png" alt="qr" className="w-28 h-28 object-contain" />
//                     <p className="text-xs text-gray-500 mt-2">Scan to visit the portal</p>
//                   </div>
//                 </div>

//                 {/* Center panel (inside main content) */}
//                 <div className="flex flex-col gap-4 border rounded-lg p-4">
//                   <img src="/assets/hero.jpg" alt="hero" className="w-full h-40 object-cover rounded-md" />
//                   <h2 className="text-xl font-bold">Features & Services</h2>
//                   <div className="space-y-3 mt-2">
//                     <FeatureItem
//                       icon="🎓"
//                       title="Higher Studies Guidance"
//                       desc="Country & college selector, course recommendations and application checklists."
//                     />
//                     <FeatureItem
//                       icon="💼"
//                       title="Job Alerts"
//                       desc="Role-based alerts from corporate, startups & public sector — tailored to your profile."
//                     />
//                     <FeatureItem
//                       icon="📚"
//                       title="Materials Library"
//                       desc="Branch-wise (CSE, ECE, EEE, Mechanical, Civil) study packs for placements & exams."
//                     />
//                     <FeatureItem
//                       icon="📝"
//                       title="Resume Builder"
//                       desc="ATS-friendly templates, auto-fill from profile and video resume recorder."
//                     />
//                   </div>
//                 </div>

//                 {/* Right panel (back side content) */}
//                 <div className="flex flex-col gap-4 border rounded-lg p-4">
//                   <h3 className="text-lg font-bold text-orange-700">How it Works</h3>
//                   <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
//                     <li>Sign up and complete your profile</li>
//                     <li>Browse materials or filter by branch & role</li>
//                     <li>Register for events or add to calendar</li>
//                     <li>Use resume templates & download / export</li>
//                   </ol>

//                   <div className="mt-2">
//                     <h4 className="font-semibold">Success Stories</h4>
//                     <p className="text-sm text-gray-600 mt-1">
//                       Students have secured internships and jobs at top companies and got admission
//                       into international universities using our guidance.
//                     </p>
//                   </div>

//                   <div className="mt-auto">
//                     <h5 className="font-semibold">Contact</h5>
//                     <p className="text-sm text-gray-600 mt-1">hello@yourportal.example</p>
//                     <p className="text-sm text-gray-600">+91 88888 88888</p>
//                     <div className="flex items-center gap-2 mt-3">
//                       <a className="px-2 py-1 border rounded text-xs">LinkedIn</a>
//                       <a className="px-2 py-1 border rounded text-xs">YouTube</a>
//                       <a className="px-2 py-1 border rounded text-xs">Instagram</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile / simple stacked version (prints fine too) */}
//             <div className="md:hidden space-y-4">
//               <div className="rounded-lg overflow-hidden">
//                 <img src="/assets/hero.jpg" alt="hero" className="w-full h-44 object-cover" />
//               </div>
//               <h2 className="text-xl font-bold">YourPortal</h2>
//               <p className="text-sm text-gray-600">
//                 One platform for everything — jobs, exams, events and resume building.
//               </p>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="p-3 bg-orange-50 rounded">Materials</div>
//                 <div className="p-3 bg-green-50 rounded">Job Alerts</div>
//                 <div className="p-3 bg-yellow-50 rounded">Events</div>
//                 <div className="p-3 bg-pink-50 rounded">Resume</div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <img src="/assets/logo.png" alt="logo" className="w-12 h-12" />
//                 <div>
//                   <div className="text-sm font-semibold">hello@yourportal.example</div>
//                   <div className="text-xs text-gray-500">Scan QR to open portal</div>
//                 </div>
//                 <img src="/assets/qr.png" alt="qr" className="w-16 h-16 ml-auto" />
//               </div>
//             </div>
//           </div>

//           {/* Print helper area: A4 friendly layout (hidden on screen preview) */}
//           <div className="hidden print:block">
//             <style>
//               {`@page { size: A4; margin: 12mm; } 
//                 .a4-trifold { width: 100%; display: flex; gap: 8mm; }
//                 .a4-trifold > div { width: calc((100% - 16mm) / 3); }
//               `}
//             </style>

//             <div className="a4-trifold">
//               {/* Left */}
//               <div className="p-4 border">
//                 <h3 className="text-lg font-bold">About YourPortal</h3>
//                 <p className="text-sm text-gray-800 mt-2">
//                   One platform for study materials, career guidance, events and ATS-ready resumes.
//                 </p>
//                 <h4 className="mt-3 font-semibold">Contact</h4>
//                 <p className="text-sm">hello@yourportal.example</p>
//                 <p className="text-sm">+91 88888 88888</p>
//               </div>

//               {/* Center */}
//               <div className="p-4 border text-center">
//                 <img src="/assets/hero.jpg" alt="hero" style={{ maxWidth: "100%", height: "140px", objectFit: "cover" }} />
//                 <h2 className="text-lg font-bold mt-3">Features</h2>
//                 <ul className="text-sm mt-2" style={{ textAlign: "left" }}>
//                   <li>• Branch-wise study packs</li>
//                   <li>• Events Calendar (Govt/Corporate/Startup/International)</li>
//                   <li>• Resume templates & video resume tools</li>
//                   <li>• Job alerts & college finder</li>
//                 </ul>
//               </div>

//               {/* Right */}
//               <div className="p-4 border">
//                 <h3 className="text-lg font-bold">How it Works</h3>
//                 <ol className="text-sm mt-2">
//                   <li>1. Create profile</li>
//                   <li>2. Browse materials & events</li>
//                   <li>3. Build resume & record video</li>
//                   <li>4. Apply & track</li>
//                 </ol>
//                 <div className="mt-6">
//                   <img src="/assets/qr.png" alt="qr" style={{ width: "120px" }} />
//                   <p className="text-xs mt-2">Scan to visit the portal</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* footer CTA */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           <strong>YourPortal</strong> — Empowering students & professionals. Visit: <span className="text-orange-600">yourportal.example</span>
//         </div>
//       </div>
//     </div>
//   );
// }
