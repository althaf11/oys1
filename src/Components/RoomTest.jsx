import React, { useEffect, useState } from "react";

/* ===== SAMPLE TEST QUESTIONS ===== */
const QUESTIONS = [
  {
    q: "Which of the following is a prime number?",
    options: ["571", "517", "533", "559"],
    answer: 0,
  },
  {
    q: "If A is 20% more than B, B is how much % less than A?",
    options: ["16.67%", "20%", "25%", "33.33%"],
    answer: 0,
  },
  {
    q: "HCF of 96 and 72 is?",
    options: ["24", "18", "12", "36"],
    answer: 0,
  },
  {
    q: "Time complexity to access array element?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 0,
  },
  {
    q: "Which OS scheduling is preemptive?",
    options: ["FCFS", "SJF", "Round Robin", "Priority"],
    answer: 2,
  },
];

export default function RoomTest() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes
  const [submitted, setSubmitted] = useState(false);

  /* ===== TIMER ===== */
  useEffect(() => {
    if (submitted || timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  useEffect(() => {
    if (timeLeft === 0) submitTest();
  }, [timeLeft]);

  const submitTest = () => {
    setSubmitted(true);
  };

  const score = QUESTIONS.filter(
    (q, i) => answers[i] === q.answer
  ).length;

  /* ===== RESULT SCREEN ===== */
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-full max-w-xl">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Test Completed
          </h2>
          <p className="text-2xl font-semibold mb-4">
            Score: {score} / {QUESTIONS.length}
          </p>
          <p className="text-gray-600">
            {score >= 3 ? "Good Job 🎉" : "Keep Practicing 💪"}
          </p>
        </div>
      </div>
    );
  }

  /* ===== TEST UI ===== */
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-orange-600">
            Aptitude Test
          </h2>
          <span className="text-xl font-bold">
            {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Question */}
        <p className="text-lg font-semibold mb-6">
          Q{index + 1}. {QUESTIONS[index].q}
        </p>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {QUESTIONS[index].options.map((opt, i) => (
            <label
              key={i}
              className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                answers[index] === i
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                checked={answers[index] === i}
                onChange={() =>
                  setAnswers((a) => ({ ...a, [index]: i }))
                }
                className="mr-4"
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-between">
          <button
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            className="px-6 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          {index < QUESTIONS.length - 1 ? (
            <button
              onClick={() => setIndex(index + 1)}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitTest}
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
