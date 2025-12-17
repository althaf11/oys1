import React, { useEffect, useState } from 'react';
import { Trash, Edit, PlusCircle } from 'lucide-react';

// Single-file Admin Panel for Crash Courses (React + Tailwind)
// Place this file in your project: src/components/AdminCrashCourses.jsx
// Usage: import AdminCrashCourses from './components/AdminCrashCourses'; then render <AdminCrashCourses />

// This component uses the same data shape as your CrashCourses front-end.
// No backend is required for this version — it persists to local state and localStorage.

const initialCrashCourses = {
  "Web Development": [
    { title: "HTML Crash Course", video: "https://www.youtube.com/embed/qz0aGYrrlhU", thumbnail: "https://i.ytimg.com/vi/qz0aGYrrlhU/hqdefault.jpg", description: "Learn HTML from scratch.", isNew: false },
    { title: "CSS Crash Course", video: "https://www.youtube.com/embed/yfoY53QXEnI", thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg", description: "Master CSS quickly.", isNew: false },
    { title: "JavaScript Crash Course", video: "https://www.youtube.com/embed/hdI2bqOjy3c", thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg", description: "Complete JavaScript basics.", isNew: false },
    { title: "React JS Crash Course", video: "https://www.youtube.com/embed/w7ejDZ8SWv8", thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg", description: "Get started with React JS.", isNew: true }
  ],
  Programming: [
    { title: "C Programming Crash Course", video: "https://www.youtube.com/embed/KJgsSFOSQv0", thumbnail: "https://i.ytimg.com/vi/KJgsSFOSQv0/hqdefault.jpg", description: "Learn the basics of C language.", isNew: false },
    { title: "Python Crash Course", video: "https://www.youtube.com/embed/kqtD5dpn9C8", thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/hqdefault.jpg", description: "Python in one hour.", isNew: false }
  ],
  "Data Science": [
    { title: "Data Science Overview", video: "https://www.youtube.com/embed/ua-CiDNNj30", thumbnail: "https://i.ytimg.com/vi/ua-CiDNNj30/hqdefault.jpg", description: "Understand Data Science foundations.", isNew: false }
  ]
};

const STORAGE_KEY = 'oys_crash_courses_admin_v1';

export default function AdminCrashCourses() {
  // State uses a flat array of course objects with category field
  const [courses, setCourses] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    // flatten initialCrashCourses into array
    const flat = [];
    Object.entries(initialCrashCourses).forEach(([cat, arr]) => {
      arr.forEach(item => flat.push({ ...item, category: cat, id: `${cat}-${item.title}` }));
    });
    return flat;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  // UI State
  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showNewOnly, setShowNewOnly] = useState(false);

  // Add/Edit modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // course id or null
  const [form, setForm] = useState({ title: '', category: 'Web Development', video: '', thumbnail: '', description: '', isNew: false });

  // Delete confirmation
  const [toDelete, setToDelete] = useState(null);

  // Derived categories (from courses + initial keys)
  const categories = Array.from(new Set(['All', ...Object.keys(initialCrashCourses), ...courses.map(c => c.category)]) );

  const filtered = courses.filter(c => {
    if (filterCategory !== 'All' && c.category !== filterCategory) return false;
    if (showNewOnly && !c.isNew) return false;
    if (query.trim() === '') return true;
    const q = query.toLowerCase();
    return c.title.toLowerCase().includes(q) || (c.description||'').toLowerCase().includes(q);
  });

  // Handlers
  function openAdd() {
    setEditing(null);
    setForm({ title: '', category: categories[1] || 'Web Development', video: '', thumbnail: '', description: '', isNew: false });
    setModalOpen(true);
  }

  function openEdit(id) {
    const c = courses.find(x => x.id === id);
    if (!c) return;
    setEditing(id);
    setForm({ title: c.title, category: c.category, video: c.video, thumbnail: c.thumbnail, description: c.description, isNew: c.isNew });
    setModalOpen(true);
  }

  function handleSave(e) {
    e.preventDefault();
    const normalizedId = `${form.category}-${form.title}`;
    if (editing) {
      setCourses(prev => prev.map(c => c.id === editing ? { ...c, ...form, id: normalizedId } : c));
    } else {
      // prevent duplicate titles in same category
      const exists = courses.some(c => c.id === normalizedId);
      if (exists) return alert('A course with this title already exists in the selected category.');
      setCourses(prev => [{ ...form, id: normalizedId }, ...prev]);
    }
    setModalOpen(false);
  }

  function confirmDelete(id) {
    setToDelete(id);
  }

  function performDelete() {
    if (!toDelete) return;
    setCourses(prev => prev.filter(c => c.id !== toDelete));
    setToDelete(null);
  }

  function cancelDelete() {
    setToDelete(null);
  }

  function importJSON(raw) {
    try {
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) throw new Error('Invalid format');
      // expect array of objects with category and required fields
      const mapped = arr.map((x, i) => ({ id: x.id || `${x.category || 'Imported'}-${x.title||'item-'+i}`, title: x.title||'Untitled', category: x.category||'Uncategorized', video: x.video||'', thumbnail: x.thumbnail||'', description: x.description||'', isNew: !!x.isNew }));
      setCourses(prev => [...mapped, ...prev]);
      alert('Imported successfully');
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
  }

  function exportJSON() {
    const dataStr = JSON.stringify(courses, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'oys_crash_courses_export.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Crash Courses — Admin</h2>
        <div className="flex items-center gap-3">
          <button onClick={openAdd} className="px-4 py-2 bg-orange-600 text-white rounded flex items-center gap-2"><PlusCircle size={16}/> Add Course</button>
          <button onClick={exportJSON} className="px-3 py-2 border rounded">Export</button>
          <label className="px-3 py-2 border rounded cursor-pointer">
            Import
            <input type="file" accept="application/json" className="hidden" onChange={e => {
              const f = e.target.files?.[0]; if (!f) return;
              const reader = new FileReader();
              reader.onload = ev => importJSON(ev.target.result);
              reader.readAsText(f);
            }} />
          </label>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 items-center mb-6">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by title or description" className="flex-1 border rounded p-2" />
        <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="border rounded p-2">
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showNewOnly} onChange={e => setShowNewOnly(e.target.checked)} /> Show New
        </label>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">New</th>
              <th className="p-3 text-left">Thumbnail</th>
              <th className="p-3 text-left">Video</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td className="p-4" colSpan={7}>No courses match your filters.</td></tr>
            )}
            {filtered.map(c => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="p-3 w-48">{c.title}</td>
                <td className="p-3 w-40">{c.category}</td>
                <td className="p-3">{c.isNew ? <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">NEW</span> : '-'}</td>
                <td className="p-3"><img src={c.thumbnail} alt="thumb" className="w-28 h-16 object-cover rounded" onError={e => e.currentTarget.src = 'https://via.placeholder.com/120x90?text=No+Image'} /></td>
                <td className="p-3"><a href={c.video} target="_blank" rel="noreferrer" className="text-indigo-600 underline">Open</a></td>
                <td className="p-3 max-w-xl truncate">{c.description}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(c.id)} className="px-3 py-1 rounded bg-amber-500 text-white flex items-center gap-1"><Edit size={14}/> Edit</button>
                    <button onClick={() => confirmDelete(c.id)} className="px-3 py-1 rounded bg-red-500 text-white flex items-center gap-1"><Trash size={14}/> Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal: Add / Edit */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mt-12 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{editing ? 'Edit Course' : 'Add Course'}</h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-600">✕</button>
            </div>
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Title</label>
                <input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <select required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="w-full border rounded p-2">
                  {categories.filter(c=>c !== 'All').map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Video (YouTube/embed link)</label>
                <input value={form.video} onChange={e => setForm(f => ({ ...f, video: e.target.value }))} className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="text-sm font-medium">Thumbnail URL</label>
                <input value={form.thumbnail} onChange={e => setForm(f => ({ ...f, thumbnail: e.target.value }))} className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="text-sm font-medium">Is New?</label>
                <div className="flex items-center gap-2 mt-2">
                  <label className="flex items-center gap-2"><input type="checkbox" checked={form.isNew} onChange={e => setForm(f => ({ ...f, isNew: e.target.checked }))} /> New</label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <textarea rows={4} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full border rounded p-2" />
              </div>

              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">{editing ? 'Save Changes' : 'Add Course'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {toDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Delete Course</h3>
            <p className="mb-4">Are you sure you want to delete this course? This action can't be undone.</p>
            <div className="flex justify-end gap-2">
              <button onClick={cancelDelete} className="px-4 py-2 border rounded">Cancel</button>
              <button onClick={performDelete} className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
            </div>
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500 mt-6">Notes: This admin works in-browser and saves changes to localStorage. For production you should connect these actions to your backend API.</p>
    </div>
  );
}