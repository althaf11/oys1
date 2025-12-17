import React, { useState, useEffect } from "react";
import { Plus, Trash2, Edit, Save } from "lucide-react";

const categories = ["Workshop", "Job Fair", "Seminar", "Expo"];
const modes = ["Online", "Offline"];

export default function AdminEventsPanel() {
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "",
    mode: "",
    organizer: "",
  });

  // Load events from localStorage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    // Optional: trigger storage event for live updates
    window.dispatchEvent(new Event("storage"));
  }, [events]);

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      alert("Title and Date are required");
      return;
    }

    const eventData = {
      id: Date.now(),
      ...newEvent,
    };

    setEvents([eventData, ...events]);

    // Reset new event form
    setNewEvent({
      title: "",
      date: "",
      category: "",
      mode: "",
      organizer: "",
    });
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const handleSaveEdit = () => {
    setEvents((prev) => prev.map((e) => (e.id === editing.id ? editing : e)));
    setEditing(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
        Admin Panel – Manage Events
      </h1>

      {/* ADD EVENT */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Create New Event</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Event Title"
            className="border p-2 rounded"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />

          <input
            type="date"
            className="border p-2 rounded"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />

          <select
            className="border p-2 rounded"
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
          >
            <option value="">Category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            className="border p-2 rounded"
            value={newEvent.mode}
            onChange={(e) => setNewEvent({ ...newEvent, mode: e.target.value })}
          >
            <option value="">Mode</option>
            {modes.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Organizer Name"
            className="border p-2 rounded"
            value={newEvent.organizer}
            onChange={(e) => setNewEvent({ ...newEvent, organizer: e.target.value })}
          />

          <button
            onClick={handleAddEvent}
            className="bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-orange-700"
          >
            <Plus size={18} /> Add Event
          </button>
        </div>
      </div>

      {/* EVENTS TABLE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">All Events</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 font-semibold">
              <td className="p-2">Title</td>
              <td className="p-2">Date</td>
              <td className="p-2">Category</td>
              <td className="p-2">Mode</td>
              <td className="p-2">Organizer</td>
              <td className="p-2">Actions</td>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b">
                <td className="p-2">{event.title}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.category}</td>
                <td className="p-2">{event.mode}</td>
                <td className="p-2">{event.organizer}</td>

                <td className="p-2 flex gap-3">
                  <button
                    onClick={() => setEditing(event)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit />
                  </button>

                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No events found</p>
        )}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Edit Event</h2>

            <input
              type="text"
              className="border p-2 rounded w-full mb-3"
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
            />

            <input
              type="date"
              className="border p-2 rounded w-full mb-3"
              value={editing.date}
              onChange={(e) => setEditing({ ...editing, date: e.target.value })}
            />

            <select
              className="border p-2 rounded w-full mb-3"
              value={editing.category}
              onChange={(e) => setEditing({ ...editing, category: e.target.value })}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              className="border p-2 rounded w-full mb-3"
              value={editing.mode}
              onChange={(e) => setEditing({ ...editing, mode: e.target.value })}
            >
              {modes.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <input
              type="text"
              className="border p-2 rounded w-full mb-3"
              value={editing.organizer}
              onChange={(e) => setEditing({ ...editing, organizer: e.target.value })}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-orange-600 text-white rounded flex items-center gap-2"
              >
                <Save size={18} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
