import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// AdminGallery.jsx
// Single-file admin panel to manage the Gallery (Events / Achievements)
// - Local state + localStorage persistence
// - Add / Edit / Delete images
// - Category selection, preview, import/export JSON
// - Tailwind classes (white background + orange accents to match portal)

const DEFAULT_KEY = "oys_gallery_v1";
const DEFAULT_DATA = {
  Events: [
    { id: 1, src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df", caption: "Cultural Festival Highlights" },
    { id: 2, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", caption: "Technology Expo" },
  ],
  Achievements: [
    { id: 101, src: "https://images.unsplash.com/photo-1603570417030-650c5d77b0c8", caption: "Top Performer Award" },
  ],
};

export default function AdminGallery() {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(DEFAULT_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return DEFAULT_DATA;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // { category, id } or null
  const [form, setForm] = useState({ category: "Events", src: "", caption: "" });
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    try {
      localStorage.setItem(DEFAULT_KEY, JSON.stringify(data));
    } catch (e) {}
  }, [data]);

  // Helpers
  const categories = Object.keys(data);

  function openAdd(category = "Events") {
    setEditing(null);
    setForm({ category, src: "", caption: "" });
    setModalOpen(true);
  }

  function openEdit(category, item) {
    setEditing({ category, id: item.id });
    setForm({ category, src: item.src, caption: item.caption });
    setModalOpen(true);
  }

  function save(e) {
    if (e && e.preventDefault) e.preventDefault();
    const { category, src, caption } = form;
    if (!src.trim()) return alert("Image URL is required");
    setData((prev) => {
      const copy = { ...prev };
      if (editing) {
        copy[editing.category] = copy[editing.category].map((it) => (it.id === editing.id ? { ...it, src: src.trim(), caption: caption.trim() } : it));
      } else {
        const id = Date.now();
        copy[category] = [{ id, src: src.trim(), caption: caption.trim() }, ...(copy[category] || [])];
      }
      return copy;
    });
    setModalOpen(false);
  }

  function remove(category, id) {
    if (!window.confirm("Delete this image?")) return;
    setData((prev) => ({ ...prev, [category]: prev[category].filter((it) => it.id !== id) }));
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "oys_gallery_export.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importJSON(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        // basic validation: object with categories arrays
        if (typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid format");
        setData((prev) => ({ ...prev, ...parsed }));
        alert("Import successful");
      } catch (err) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  function resetDefaults() {
    if (!window.confirm("Reset gallery to default sample data? This will overwrite current data.")) return;
    setData(DEFAULT_DATA);
  }

  return (
    <div className="min-h-screen bg-white text-orange-800 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-orange-600">Gallery Admin</h1>
            <p className="text-sm text-orange-600/80">Manage Events & Achievements images</p>
          </div>

          <div className="flex items-center gap-3">
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="border rounded p-2">
              <option>All</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <button onClick={() => openAdd()} className="px-4 py-2 bg-orange-600 text-white rounded">+ Add Image</button>

            <button onClick={exportJSON} className="px-3 py-2 border rounded">Export</button>

            <label className="px-3 py-2 border rounded cursor-pointer">
              Import
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => importJSON(e.target.files?.[0])}
              />
            </label>

            <button onClick={resetDefaults} className="px-3 py-2 border rounded">Reset</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: categories list */}
          <aside className="space-y-3">
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-semibold text-orange-600 mb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilterCategory(c)}
                    className={`text-left px-3 py-2 rounded ${filterCategory === c ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-800"}`}
                  >
                    {c} <span className="text-sm text-orange-600/60">({data[c]?.length || 0})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded shadow p-4">
              <h3 className="font-semibold text-orange-600 mb-2">Quick Actions</h3>
              <div className="flex flex-col gap-2">
                {categories.map((c) => (
                  <button key={c} onClick={() => openAdd(c)} className="px-3 py-2 rounded bg-orange-100 text-orange-800 text-left">+ Add to {c}</button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main: grid preview */}
          <main className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories
                .filter((c) => filterCategory === "All" || filterCategory === c)
                .flatMap((c) => (data[c] || []).map((item) => ({ ...item, category: c })))
                .map((item) => (
                  <motion.div key={item.id} className="bg-white rounded-xl shadow overflow-hidden" whileHover={{ scale: 1.02 }}>
                    <div className="relative h-44 bg-gray-50">
                      <img src={item.src} alt={item.caption} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x280?text=No+Image")} />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-orange-800">{item.caption}</p>
                      <p className="text-xs text-orange-600/70">{item.category}</p>
                      <div className="flex gap-2 mt-3">
                        <button onClick={() => openEdit(item.category, item)} className="px-3 py-1 rounded bg-orange-100 text-orange-800">Edit</button>
                        <button onClick={() => remove(item.category, item.id)} className="px-3 py-1 rounded bg-red-600 text-white">Delete</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </main>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-orange-600">{editing ? "Edit Image" : "Add Image"}</h3>
                <button onClick={() => setModalOpen(false)} className="text-orange-600">✕</button>
              </div>

              <form onSubmit={save} className="space-y-3">
                <label className="block text-sm font-medium text-orange-600">Category</label>
                <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className="w-full border rounded p-2">
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <label className="block text-sm font-medium text-orange-600">Image URL</label>
                <input value={form.src} onChange={(e) => setForm((f) => ({ ...f, src: e.target.value }))} className="w-full border rounded p-2" />

                <label className="block text-sm font-medium text-orange-600">Caption</label>
                <input value={form.caption} onChange={(e) => setForm((f) => ({ ...f, caption: e.target.value }))} className="w-full border rounded p-2" />

                <div className="flex gap-3 items-center">
                  <div className="w-24 h-16 bg-gray-50 rounded overflow-hidden">
                    <img src={form.src || "https://via.placeholder.com/200x140?text=Preview"} alt="preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200x140?text=No+Image")} />
                  </div>

                  <div className="flex-1 text-sm text-orange-600/80">Preview updates as you type. Make sure the image URL is publicly accessible.</div>
                </div>

                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded">{editing ? "Save" : "Add"}</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <p className="text-sm text-orange-600/70 mt-6">Notes: changes are stored locally in your browser. To persist on server, integrate backend APIs.</p>
      </div>
    </div>
  );
}