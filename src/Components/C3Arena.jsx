import React, { useState } from "react";
import { Trophy, Medal, BookOpen, FileText, Zap, Calendar, Clock } from 'lucide-react';

// Move static data outside component to prevent recreation
const winnersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    competition: "React Coding Challenge",
    position: 1,
    score: "95%",
    date: "12 Sep 2025",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Anjali Verma",
    competition: "Java MCQ Test",
    position: 2,
    score: "92%",
    date: "12 Sep 2025",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Sai Kiran",
    competition: "Video Interview Round",
    position: 3,
    score: "90%",
    date: "12 Sep 2025",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const positionStyles = {
  1: {
    label: "Winner",
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    bg: "border-yellow-400 bg-yellow-50",
  },
  2: {
    label: "Runner Up",
    icon: <Medal className="w-5 h-5 text-gray-400" />,
    bg: "border-gray-300 bg-gray-50",
  },
  3: {
    label: "2nd Runner Up",
    icon: <Medal className="w-5 h-5 text-orange-500" />,
    bg: "border-orange-300 bg-orange-50",
  },
};

// Upcoming competitions data
const upcomingCompetitions = [
  {
    id: 1,
    name: "React Advanced Challenge",
    description: "Test your React skills with advanced concepts including hooks, context, and performance optimization.",
    date: "January 15, 2026",
    time: "10:00 AM IST",
    duration: "2 hours",
    topics: ["React Hooks", "State Management", "Performance", "Testing"],
  },
  {
    id: 2,
    name: "Java Programming Contest",
    description: "Comprehensive Java assessment covering OOP, collections, multithreading, and design patterns.",
    date: "January 20, 2026",
    time: "2:00 PM IST",
    duration: "3 hours",
    topics: ["OOP Concepts", "Collections", "Multithreading", "Design Patterns"],
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    description: "Build a complete web application using modern frameworks and best practices.",
    date: "January 25, 2026",
    time: "11:00 AM IST",
    duration: "4 hours",
    topics: ["Frontend", "Backend", "Database", "Deployment"],
  },
];

export default function C3Arena() {
  // Check localStorage for registration status
  const [form, setForm] = useState({ name: "", email: "", college: "" });
  const [message, setMessage] = useState(null);
  const [showMeetingSection, setShowMeetingSection] = useState(() => {
    const saved = localStorage.getItem('c3arena_registered');
    return saved === 'true';
  });
  const [isRegistered, setIsRegistered] = useState(() => {
    const saved = localStorage.getItem('c3arena_registered');
    return saved === 'true';
  });
  const [selectedCompetition, setSelectedCompetition] = useState(() => {
    const saved = localStorage.getItem('c3arena_competition');
    return saved ? JSON.parse(saved) : null;
  });
  const [currentView, setCurrentView] = useState('main');

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
    
    // Set registration success and show competition details
    const competition = upcomingCompetitions[0]; // Default to first competition
    setIsRegistered(true);
    setSelectedCompetition(competition);
    setShowMeetingSection(true);
    
    // Save to localStorage
    localStorage.setItem('c3arena_registered', 'true');
    localStorage.setItem('c3arena_competition', JSON.stringify(competition));
    localStorage.setItem('c3arena_user', JSON.stringify({ 
      name: form.name, 
      email: form.email, 
      college: form.college 
    }));
  }

  function handleNavigation(view) {
    // Add your routing logic here
    // Example: window.location.href = `/room/${view}`;
    // Or with React Router: navigate(`/room/${view}`);
    window.location.href = `/room/${view}`;
  }

  function joinMeeting() {
    // Route to meeting/Box page
    window.location.href = '/Box';
  }

  function handlePreparationClick(type) {
    // Route to preparation pages
    window.location.href = ` ${type}`;
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
            Compete in skill-based tests and challenges, win exciting prizes,
and earn certificates for your achievements.

            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li>🏅 Prizes & Certificates</li>
              <li>📄 Test Competitions</li>
              <li>🧠 Skill Challenges</li>
              <li>🌐 Open for All Students</li>
            </ul>
          </div>

          {/* REGISTRATION CARD OR COMPETITION DETAILS */}
          <div className="p-6 bg-white rounded-2xl shadow-xl border border-orange-200">
            {!isRegistered ? (
              // REGISTRATION FORM
              <>
                <h3 className="text-xl font-semibold text-orange-600">Quick Registration</h3>
                <p className="text-sm text-gray-500">Sign up to participate in C3 Arena.</p>

                <div className="mt-4 grid gap-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Full name"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Email address"
                    type="email"
                  />

                  <input
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
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
                      onClick={() => {
                        setForm({ name: "", email: "", college: "" });
                        setMessage(null);
                      }}
                      className="flex-1 border py-2 rounded-md hover:bg-gray-50 transition"
                    >
                      Clear
                    </button>
                  </div>

                  {message && (
                    <div className="mt-2 text-sm px-3 py-2 rounded bg-orange-50 text-orange-700 border border-orange-200">
                      {message}
                    </div>
                  )}
                </div>
              </>
            ) : (
              // COMPETITION DETAILS AFTER REGISTRATION
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-orange-600">Your Competition</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Registered ✓
                  </span>
                </div>

                {/* Competition Name */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{selectedCompetition.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{selectedCompetition.description}</p>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="font-semibold text-sm">{selectedCompetition.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="font-semibold text-sm">{selectedCompetition.time}</p>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-semibold">{selectedCompetition.duration}</p>
                </div>

                {/* Topics */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompetition.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preparation Buttons */}
                <div className="pt-4 border-t space-y-2">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Prepare for Exam:</p>
                  
                  <button
                    onClick={() => handlePreparationClick('/services/e-learning')}
                    className="w-full flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg transition group"
                  >
                    <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-orange-900">E-Preparation</p>
                      <p className="text-xs text-orange-700">Interactive study materials</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePreparationClick('/services/e-materials')}
                    className="w-full flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg transition group"
                  >
                    <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-orange-900">E-Materials</p>
                      <p className="text-xs text-orange-700">Download study resources</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePreparationClick('/services/crash-courses')}
                    className="w-full flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg transition group"
                  >
                    <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-orange-900">Crash Course</p>
                      <p className="text-xs text-orange-700">Quick revision sessions</p>
                    </div>
                  </button>
                </div>

                {/* Change Competition */}
                <button
                  onClick={() => {
                    setIsRegistered(false);
                    setSelectedCompetition(null);
                    // Clear localStorage
                    localStorage.removeItem('c3arena_registered');
                    localStorage.removeItem('c3arena_competition');
                    localStorage.removeItem('c3arena_user');
                  }}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 underline mt-2"
                >
                  Register for different competition
                </button>
              </div>
            )}

            {/* Live Meeting Section */}
            {showMeetingSection && !isRegistered && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-semibold text-green-800">Live Session Available!</h4>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Join our live orientation session to learn more about C3 Arena competitions.
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
            <div className="p-5 border rounded-xl bg-white border-orange-300 hover:shadow-lg transition">
              <h4 className="font-semibold text-orange-600">Test Competition</h4>
              <p className="text-sm mt-2 text-gray-700">
                Online Test on top Technologies on their specialized course of study.
              </p>
              
            </div>

            <div className="p-5 border rounded-xl bg-white border-orange-300 hover:shadow-lg transition">
              <h4 className="font-semibold text-orange-600">
                Live Interview
              </h4>
              <p className="text-sm mt-2 text-gray-700">
                Participate in live interviews with industry experts and mentors.
              </p>
              
            </div>

            <div className="p-5 border rounded-xl bg-white border-orange-300 hover:shadow-lg transition">
              <h4 className="font-semibold text-orange-600">Video Presentation</h4>
              <p className="text-sm mt-2 text-gray-700">
                Students need to speak on a topic for a while and submit their video.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MEETING CTA & REWARDS SECTION */}
      <div className="flex flex-col lg:flex-row justify-around bg-orange-50 gap-8 py-12 px-6">
        {/* LIVE MEETING CTA SECTION */}
        <section className="flex-1 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Live Orientation Session
          </h3>
          <p className="text-gray-700 mb-6">
            Get a complete walkthrough of C3 Arena competitions, meet our mentors, ask questions in real-time, and network with fellow participants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={joinMeeting}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition flex items-center gap-2 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Join Live Meeting Now
            </button>
            <div className="text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Session is live now</span>
              </div>
            </div>
          </div>
        </section>

        {/* REWARDS */}
        <section className="flex-1 max-w-md">
          <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center lg:text-left">Rewards & Recognition</h3>
          <div className="grid gap-4">
            <div className="rounded-xl shadow-md border border-orange-300 bg-white p-4 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-orange-600">💰 Prize Money</h4>
              <p className="mt-2 text-sm text-gray-700">Winners get exciting cash prizes.</p>
            </div>

            <div className="rounded-xl shadow-md border border-orange-300 bg-white p-4 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-orange-600">📜 Certificates</h4>
              <p className="mt-2 text-sm text-gray-700">
                Official certificates for all participants & winners.
              </p>
            </div>

            <div className="rounded-xl shadow-md border border-orange-300 bg-white p-4 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-orange-600">⭐ Recognition</h4>
              <p className="mt-2 text-sm text-gray-700">
                Top performers get featured on the Hall of Fame.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* WINNERS SECTION */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
          🏆 Competition Winners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {winnersData.map((winner) => {
            const style = positionStyles[winner.position];

            return (
              <div
                key={winner.id}
                className={`rounded-xl border p-6 shadow-md hover:shadow-xl transition ${style.bg}`}
              >
                {/* Position Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 font-semibold text-sm">
                    {style.icon}
                    {style.label}
                  </span>
                  <span className="text-xs text-gray-500">{winner.date}</span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-14 h-14 rounded-full border-2"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{winner.name}</h3>
                    <p className="text-sm text-gray-600">
                      {winner.competition}
                    </p>
                  </div>
                </div>

                {/* Score */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Score</span>
                    <span className="font-semibold">{winner.score}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 transition-all duration-500"
                      style={{ width: winner.score }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 C3 Arena. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Empowering students through competitions and challenges.</p>
        </div>
      </footer>
    </main>
  );
}