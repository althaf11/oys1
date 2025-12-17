import React, { useEffect, useState } from "react";

const AdminContact = () => {
  const [queries, setQueries] = useState([]);
  const [replies, setReplies] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("studentQueries")) || [];
    setQueries(stored);
  }, []);

  const sendReply = (q) => {
    const adminAlerts = JSON.parse(localStorage.getItem("adminAlerts")) || [];
    const message = replies[q.id];

    if (!message) {
      alert("Reply cannot be empty");
      return;
    }

    adminAlerts.push({
      id: Date.now(),
      category: "Admin Response",
      message: `Reply to "${q.subject}": ${message}`,
      type: "admin-reply",
      unread: true,
    });

    localStorage.setItem("adminAlerts", JSON.stringify(adminAlerts));
    alert("Reply sent & alert created!");
    setReplies((prev) => ({ ...prev, [q.id]: "" }));
  };

  // Group queries by college
  const collegeGroups = queries.reduce((acc, q) => {
    if (!acc[q.college]) acc[q.college] = [];
    acc[q.college].push(q);
    return acc;
  }, {});

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Admin – Student Queries (College-wise)
      </h2>

      {Object.keys(collegeGroups).length === 0 && (
        <p className="text-gray-500">No queries available.</p>
      )}

      {Object.entries(collegeGroups).map(([college, students]) => (
        <div key={college} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{college}</h3>

          {students.map((q) => (
            <div key={q.id} className="bg-white p-4 shadow rounded mb-4">
              <p className="font-semibold">{q.name} ({q.email})</p>
              <p className="text-sm text-gray-600">{q.subject}</p>
              <p className="mt-2">{q.message}</p>

              <textarea
                placeholder="Type reply..."
                className="w-full border mt-3 p-2 rounded"
                value={replies[q.id] || ""}
                onChange={(e) =>
                  setReplies((prev) => ({ ...prev, [q.id]: e.target.value }))
                }
              />

              <button
                onClick={() => sendReply(q)}
                className="mt-2 bg-orange-600 text-white px-4 py-2 rounded"
              >
                Send Reply
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminContact;
