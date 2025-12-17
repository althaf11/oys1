import React, { useState, useEffect } from "react";

// ------------------------
// C3 Arena - JEE Style Mock Test (Single Component)
// ------------------------
export default function C3ArenaMockTest() {
  const TEST_NAME = "Python Full-Length Mock Test";
  const CONDUCTED_BY = "Conducted by Operation Yuva Sankalp - C3 Arena";
  const TOTAL_TIME = 3 * 60 * 60; // 3 hours in seconds

  const questions = Array.from({ length: 160 }).map((_, i) => ({
    id: i + 1,
    question: `Sample question number ${i + 1}. Replace with actual question data.`,
    options: ["Option A", "Option B", "Option C", "Option D"],
  }));

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const submitTest = () => {
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-screen bg-white text-black">
      {/* Top Bar */}
      <div className="w-full bg-orange-500 text-white p-4 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-xl font-bold">{TEST_NAME}</h1>
          <p className="text-sm opacity-90">{CONDUCTED_BY}</p>
        </div>
        <div className="text-2xl font-bold">⏱ {formatTime(timeLeft)}</div>
      </div>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left - Question Section */}
        <div className="flex-[3] p-6 overflow-auto border-r">
          {!submitted ? (
            <>
              <h2 className="text-lg font-semibold mb-4">Question {questions[current].id}</h2>
              <p className="mb-4">{questions[current].question}</p>

              {questions[current].options.map((opt, index) => (
                <label key={index} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`q-${questions[current].id}`}
                    checked={answers[questions[current].id] === opt}
                    onChange={() => setAnswers({ ...answers, [questions[current].id]: opt })}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setReview({ ...review, [questions[current].id]: !review[questions[current].id] })}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md"
                >
                  {review[questions[current].id] ? "Unmark Review" : "Mark for Review"}
                </button>

                <button
                  onClick={() => current > 0 && setCurrent(current - 1)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Previous
                </button>

                <button
                  onClick={() => current < questions.length - 1 && setCurrent(current + 1)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-md"
                >
                  Save & Next
                </button>

                <button
                  onClick={submitTest}
                  className="px-4 py-2 bg-red-600 text-white rounded-md ml-auto"
                >
                  Submit Test
                </button>
              </div>
            </>
          ) : (
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Test Submitted</h2>
              <p className="text-lg">Your score: {Object.keys(answers).length} / {questions.length}</p>

              
            </div>
          )}
        </div>

        {/* Right - Question Palette */}
        <div className="flex-[1] p-4 overflow-auto bg-gray-50">
          <h3 className="font-bold mb-3">Question Palette</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q) => (
              <button
                key={q.id}
                onClick={() => setCurrent(q.id - 1)}
                className={`w-10 h-10 rounded-md text-sm font-bold
                  ${answers[q.id] ? "bg-green-500 text-white" : review[q.id] ? "bg-purple-500 text-white" : "bg-orange-200"}
                `}
              >
                {q.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
