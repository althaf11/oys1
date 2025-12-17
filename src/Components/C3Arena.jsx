// import React, { useState } from "react";
// import Footer from "./Footer";

// export default function C3Arena() {
//   const [form, setForm] = useState({ name: "", email: "", college: "" });
//   const [message, setMessage] = useState(null);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   }

//   function validateEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!form.name.trim() || !form.email.trim() || !form.college.trim()) {
//       setMessage("Please fill all fields.");
//       return;
//     }
//     if (!validateEmail(form.email)) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }
//     setMessage(`Thanks ${form.name}. Registration successful!`);
//     setForm({ name: "", email: "", college: "" });
//   }

//   return (
//     <main className="min-h-screen bg-white text-gray-900 antialiased">

//       {/* HERO */}
//       <section className="py-16 bg-orange-50">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

//           {/* LEFT */}
//           <div>
//             <h2 className="text-4xl font-extrabold leading-tight">
//               Welcome to <span className="text-orange-600">C3 Arena</span>
//             </h2>

//             <p className="mt-4 text-gray-700">
//               Showcase your skills in the finest resume competition, win prize money,
//               take course-based challenges & earn certificates.
//             </p>

//             <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
//               <li>🏅 Prizes & Certificates</li>
//               <li>📄 Resume Review</li>
//               <li>🧠 Skill Challenges</li>
//               <li>🌐 Open for All Students</li>
//             </ul>
//           </div>

//           {/* REGISTRATION CARD */}
//           <div className="p-6 bg-white rounded-2xl shadow-xl border border-orange-200">
//             <h3 className="text-xl font-semibold text-orange-600">Quick Registration</h3>
//             <p className="text-sm text-gray-500">Sign up to participate in C3 Arena.</p>

//             <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="border px-3 py-2 rounded-md"
//                 placeholder="Full name"
//               />

//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="border px-3 py-2 rounded-md"
//                 placeholder="Email address"
//                 type="email"
//               />

//               <input
//                 name="college"
//                 value={form.college}
//                 onChange={handleChange}
//                 className="border px-3 py-2 rounded-md"
//                 placeholder="College"
//               />

//               <div className="flex gap-3">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-orange-600 text-white py-2 rounded-md"
//                 >
//                   Register
//                 </button>

//                 <button
//                   type="button"
//                   className="flex-1 border py-2 rounded-md"
//                   onClick={() => setForm({ name: "", email: "", college: "" })}
//                 >
//                   Clear
//                 </button>
//               </div>

//               {message && (
//                 <div className="mt-2 text-sm text-orange-700">{message}</div>
//               )}
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-2 gap-8 items-center">

//           <div>
//             <h3 className="text-2xl font-bold text-orange-600">What is C3 Arena?</h3>
//             <p className="mt-4 text-gray-700">
//               C3 Arena is a student–friendly platform with competitions, challenges,
//               resume events and prize distributions.
//             </p>

//             <ul className="mt-4 space-y-2 text-gray-700">
//               <li>• Finest Resume Competition</li>
//               <li>• Creative Content Challenges</li>
//               <li>• Cash Prizes & Rewards</li>
//               <li>• Certificates for Participants</li>
//             </ul>
//           </div>

//           <div className="p-6 bg-white rounded-xl shadow border border-orange-200">
//             <h4 className="font-semibold text-orange-600">Why Students Love It</h4>

//             <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-2">
//               <li>Boost resume & interview skills</li>
//               <li>Compete with students across India</li>
//               <li>Win prizes & certificates for your portfolio</li>
//             </ol>
//           </div>
//         </div>
//       </section>

//       {/* COMPETITIONS */}
//       <section className="bg-orange-600 py-12">
//         <div className="max-w-6xl mx-auto px-6">
//           <h3 className="text-2xl font-bold text-orange-700 text-white">Competitions</h3>

//           <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="p-5 border rounded-xl bg-white border-orange-300">
//               <h4 className="font-semibold text-orange-600">Finest Resume Competition</h4>
//               <p className="text-sm mt-2 text-gray-700">
//                 Submit your resume. Top entries win prizes & get expert feedback.
//               </p>
//             </div>

//             <div className="p-5 border rounded-xl bg-white border-orange-300">
//               <h4 className="font-semibold text-orange-600">
//                 Theme-Based Content Challenge
//               </h4>
//               <p className="text-sm mt-2 text-gray-700">
//                 Write blogs, scripts, or creatives on trending themes.
//               </p>
//             </div>

//             <div className="p-5 border rounded-xl bg-white border-orange-300">
//               <h4 className="font-semibold text-orange-600">Quick Pitch Challenge</h4>
//               <p className="text-sm mt-2 text-gray-700">
//                 Present ideas & win recognition + prizes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* REWARDS */}
//       <section className="bg-orange-50 text-black py-12">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
//           <div>
//             <h4 className="text-xl font-semibold">Prize Money</h4>
//             <p className="mt-2 text-sm">Winners get exciting cash prizes.</p>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold">Certificates</h4>
//             <p className="mt-2 text-sm">
//               Official certificates for all participants & winners.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold">Recognition</h4>
//             <p className="mt-2 text-sm">
//               Top performers get featured on the Hall of Fame.
//             </p>
//           </div>
//         </div>
//       </section>

//     <Footer/>
//     </main>
//   );
// }


import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Footer from "./Footer";
export default function C3Arena() {
  const [form, setForm] = useState({ name: "", email: "", college: "" });
  const [message, setMessage] = useState(null);
  const [showMeetingSection, setShowMeetingSection] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.college.trim()) {
      setMessage("Please fill all fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage(`Thanks ${form.name}. Registration successful!`);
    setShowMeetingSection(true);
    setForm({ name: "", email: "", college: "" });
  }

  function joinMeeting() {
    window.open("https://meet.google.com/your-meeting-link", "_blank");
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* HERO */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Welcome to <span className="text-orange-600">C3 Arena</span>
            </h2>

            <p className="mt-4 text-gray-700">
              Showcase your skills in the finest resume competition, win prize money,
              take course-based challenges & earn certificates.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li>🏅 Prizes & Certificates</li>
              <li>📄 Resume Review</li>
              <li>🧠 Skill Challenges</li>
              <li>🌐 Open for All Students</li>
            </ul>
          </div>

          {/* REGISTRATION CARD */}
          <div className="p-6 bg-white rounded-2xl shadow-xl border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-600">Quick Registration</h3>
            <p className="text-sm text-gray-500">Sign up to participate in C3 Arena.</p>

            <div className="mt-4 grid gap-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                placeholder="Full name"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                placeholder="Email address"
                type="email"
              />

              <input
                name="college"
                value={form.college}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                placeholder="College"
              />

              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
                >
                  Register
                </button>

                <button
                  onClick={() => setForm({ name: "", email: "", college: "" })}
                  className="flex-1 border py-2 rounded-md hover:bg-gray-50 transition"
                >
                  Clear
                </button>
              </div>

              {message && (
                <div className="mt-2 text-sm text-orange-700">{message}</div>
              )}
            </div>

            {/* Live Meeting Section - Shows after successful registration */}
            {showMeetingSection && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-semibold text-green-800">Live Session Available!</h4>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Join our live orientation session to learn more about C3 Arena competitions and interact with mentors.
                </p>
                <button
                  onClick={joinMeeting}
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Join Live Meeting
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-orange-600">What is C3 Arena?</h3>
            <p className="mt-4 text-gray-700">
              C3 Arena is a student–friendly platform with competitions, challenges,
              resume events and prize distributions.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Finest Resume Competition</li>
              <li>• Creative Content Challenges</li>
              <li>• Cash Prizes & Rewards</li>
              <li>• Certificates for Participants</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-xl shadow border border-orange-200">
            <h4 className="font-semibold text-orange-600">Why Students Love It</h4>

            <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-2">
              <li>Boost resume & interview skills</li>
              <li>Compete with students across India</li>
              <li>Win prizes & certificates for your portfolio</li>
            </ol>
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="bg-orange-600 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white">Competitions</h3>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 border rounded-xl bg-white border-orange-300">
              <h4 className="font-semibold text-orange-600">Finest Resume Competition</h4>
              <p className="text-sm mt-2 text-gray-700">
                Submit your resume. Top entries win prizes & get expert feedback.
              </p>
            </div>

            <div className="p-5 border rounded-xl bg-white border-orange-300">
              <h4 className="font-semibold text-orange-600">
                Theme-Based Content Challenge
              </h4>
              <p className="text-sm mt-2 text-gray-700">
                Write blogs, scripts, or creatives on trending themes.
              </p>
            </div>

            <div className="p-5 border rounded-xl bg-white border-orange-300">
              <h4 className="font-semibold text-orange-600">Quick Pitch Challenge</h4>
              <p className="text-sm mt-2 text-gray-700">
                Present ideas & win recognition + prizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <section className="bg-orange-50 text-black py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-semibold">Prize Money</h4>
            <p className="mt-2 text-sm">Winners get exciting cash prizes.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Certificates</h4>
            <p className="mt-2 text-sm">
              Official certificates for all participants & winners.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Recognition</h4>
            <p className="mt-2 text-sm">
              Top performers get featured on the Hall of Fame.
            </p>
          </div>
        </div>
      </section>

      {/* LIVE MEETING CTA SECTION */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Our Live Orientation Session
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Get a complete walkthrough of C3 Arena competitions, meet our mentors, ask questions in real-time, and network with fellow participants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='Box'
             
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Join Live Meeting Now
            </Link>
            <div className="text-white text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Session is live now</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}