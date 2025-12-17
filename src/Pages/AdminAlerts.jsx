import React, { useState, useEffect } from "react";
import { Plus, Trash2, Edit, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Job Alerts",
  "Crash Course Alerts",
  "Event Alerts",
  "Motivation Alerts",
  "Concession in Fee Alerts",
  "Interview Alerts",
  "Mock Test Alerts",
  "Choose Your Career Alerts",
  "Exam Notification Alerts",
  "Material Alerts",
  "Current Affairs Alerts",
  "Profile Related Alerts",
  "Access Card Renewal Alerts",
  "Resume Approval/Ready Alerts",
  "Appointment with Counsellor Alerts",
];

export default function AdminAlertsPanel() {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  const [editing, setEditing] = useState(null);

  const [newAlert, setNewAlert] = useState({
    category: "",
    message: "",
    unread: true,
    enabled: true,
  });

  // Load alerts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("adminAlerts")) || [];
    setAlerts(saved);
  }, []);

  // Save alerts
  useEffect(() => {
    localStorage.setItem("adminAlerts", JSON.stringify(alerts));
  }, [alerts]);

  // Add alert + redirect
  const handleAddAlert = () => {
    if (!newAlert.category || !newAlert.message.trim()) {
      alert("Please select category and message");
      return;
    }

    const alertData = {
      id: Date.now(),
      ...newAlert,
    };

    const updated = [alertData, ...alerts];
    setAlerts(updated);
    localStorage.setItem("adminAlerts", JSON.stringify(updated));

    setNewAlert({ category: "", message: "", unread: true, enabled: true });

    // 🔥 Redirect to alerts page
    navigate("/alerts");
  };

  const handleDelete = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSaveEdit = () => {
    setAlerts((prev) => prev.map((a) => (a.id === editing.id ? editing : a)));
    setEditing(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Admin – Manage Alerts
      </h1>

      {/* CREATE */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Create Alert</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <select
            className="border p-2 rounded"
            value={newAlert.category}
            onChange={(e) =>
              setNewAlert({ ...newAlert, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Alert message"
            className="border p-2 rounded"
            value={newAlert.message}
            onChange={(e) =>
              setNewAlert({ ...newAlert, message: e.target.value })
            }
          />

          <button
            onClick={handleAddAlert}
            className="bg-orange-600 text-white rounded px-4 py-2 flex items-center gap-2 hover:bg-orange-700"
          >
            <Plus size={18} /> Submit
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">All Alerts</h2>

        {alerts.length === 0 && (
          <p className="text-gray-500 text-center">No alerts created</p>
        )}

        {alerts.map((a) => (
          <div
            key={a.id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <p className="font-medium">{a.message}</p>
              <p className="text-xs text-gray-500">{a.category}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setEditing(a)}
                className="text-blue-600"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(a.id)}
                className="text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-3">Edit Alert</h2>

            <select
              className="border p-2 rounded w-full mb-3"
              value={editing.category}
              onChange={(e) =>
                setEditing({ ...editing, category: e.target.value })
              }
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <input
              className="border p-2 rounded w-full mb-4"
              value={editing.message}
              onChange={(e) =>
                setEditing({ ...editing, message: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button onClick={() => setEditing(null)}>Cancel</button>
              <button
                onClick={handleSaveEdit}
                className="bg-orange-600 text-white px-4 py-2 rounded flex gap-2"
              >
                <Save size={16} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
