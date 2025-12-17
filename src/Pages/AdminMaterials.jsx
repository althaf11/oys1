import React, { useState, useEffect } from "react";

// Admin E‑Materials (single-file React + Tailwind)
// - White background, orange accent (matches your portal)
// - Add / Edit / Delete streams and materials
// - Persists to localStorage

export default function AdminEMaterials() {
  const STORAGE_KEY = "oys_e_materials_v1";

  const seed = [
    {
      id: 1,
      title: "Computer Science Engineering (CSE)",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920258.png",
      materials: [
        { id: 11, title: "Operating Systems Notes", image: "https://www.creativefabrica.com/wp-content/uploads/2021/09/15/OS-logo-design-vector-Graphics-17338971-1-1-580x386.jpg" },
        { id: 12, title: "DBMS Notes", image: "https://cdn-icons-png.flaticon.com/512/9429/9429272.png" },
      ],
    },
    {
      id: 2,
      title: "Electronics and Communication Engineering (ECE)",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920212.png",
      materials: [
        { id: 21, title: "Digital Electronics", image: "https://cdn-icons-png.flaticon.com/512/9429/9429266.png" },
      ],
    },
  ];

  const [streams, setStreams] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return seed;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentStream, setCurrentStream] = useState(null); // stream object when adding material or editing
  const [currentMaterial, setCurrentMaterial] = useState(null); // material object when editing

  const [form, setForm] = useState({ streamTitle: "", streamImage: "", materialTitle: "", materialImage: "" });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(streams));
    } catch (e) {}
  }, [streams]);

  // Open modals
  function openAddStream() {
    setEditMode(false);
    setCurrentStream(null);
    setCurrentMaterial(null);
    setForm({ streamTitle: "", streamImage: "", materialTitle: "", materialImage: "" });
    setModalOpen(true);
  }

  function openEditStream(stream) {
    setEditMode(true);
    setCurrentStream(stream);
    setCurrentMaterial(null);
    setForm({ streamTitle: stream.title, streamImage: stream.image, materialTitle: "", materialImage: "" });
    setModalOpen(true);
  }

  function openAddMaterial(stream) {
    setEditMode(false);
    setCurrentStream(stream);
    setCurrentMaterial(null);
    setForm({ streamTitle: stream.title, streamImage: stream.image, materialTitle: "", materialImage: "" });
    setModalOpen(true);
  }

  function openEditMaterial(stream, material) {
    setEditMode(true);
    setCurrentStream(stream);
    setCurrentMaterial(material);
    setForm({ streamTitle: stream.title, streamImage: stream.image, materialTitle: material.title, materialImage: material.image });
    setModalOpen(true);
  }

  // Save (add/edit)
  function save(e) {
    if (e && e.preventDefault) e.preventDefault();
    let updated = [...streams];

    // Add Stream
    if (!editMode && !currentStream) {
      const newStream = { id: Date.now(), title: form.streamTitle || "Untitled Stream", image: form.streamImage || "", materials: [] };
      updated.push(newStream);
    }

    // Add Material to stream
    if (!editMode && currentStream && !currentMaterial) {
      updated = updated.map((s) => (s.id === currentStream.id ? { ...s, materials: [...s.materials, { id: Date.now(), title: form.materialTitle || "Untitled Material", image: form.materialImage || "" }] } : s));
    }

    // Edit Stream
    if (editMode && currentStream && !currentMaterial) {
      updated = updated.map((s) => (s.id === currentStream.id ? { ...s, title: form.streamTitle, image: form.streamImage } : s));
    }

    // Edit Material
    if (editMode && currentMaterial && currentStream) {
      updated = updated.map((s) =>
        s.id === currentStream.id
          ? { ...s, materials: s.materials.map((m) => (m.id === currentMaterial.id ? { ...m, title: form.materialTitle, image: form.materialImage } : m)) }
          : s
      );
    }

    setStreams(updated);
    closeModal();
  }

  function closeModal() {
    setModalOpen(false);
    setEditMode(false);
    setCurrentStream(null);
    setCurrentMaterial(null);
    setForm({ streamTitle: "", streamImage: "", materialTitle: "", materialImage: "" });
  }


  function deleteStream(id) {
    if (!window.confirm("Delete this stream and all its materials?")) return;
    setStreams((prev) => prev.filter((s) => s.id !== id));
  }

  function deleteMaterial(streamId, materialId) {
    if (!window.confirm("Delete this material?")) return;
    setStreams((prev) => prev.map((s) => (s.id === streamId ? { ...s, materials: s.materials.filter((m) => m.id !== materialId) } : s)));
  }

  return (
    <div className="min-h-screen bg-white text-orange-800 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-orange-600">Admin — E‑Materials</h1>
          <p className="text-sm text-orange-600/70">Manage streams and materials used on your portal.</p>
        </header>

        <div className="flex items-center gap-3 mb-6">
          <button onClick={openAddStream} className="px-4 py-2 bg-orange-600 text-white rounded shadow">+ Add Stream</button>
        </div>

        <div className="space-y-6">
          {streams.length === 0 && <p className="text-gray-500">No streams added yet.</p>}

          {streams.map((stream) => (
            <section key={stream.id} className="p-5 bg-white rounded-xl shadow-md border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={stream.image} alt="" className="w-16 h-16 object-contain" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/64?text=No+Image")} />
                  <div>
                    <h2 className="text-xl font-semibold text-orange-800">{stream.title}</h2>
                    <p className="text-sm text-orange-600/60">{stream.materials?.length || 0} materials</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => openEditStream(stream)} className="px-3 py-1 bg-orange-100 text-orange-800 rounded">Edit</button>
                  <button onClick={() => deleteStream(stream.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                  <button onClick={() => openAddMaterial(stream)} className="px-3 py-1 bg-orange-600 text-white rounded">+ Add Material</button>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stream.materials && stream.materials.length === 0 && <p className="text-gray-400">No materials yet.</p>}

                {stream.materials?.map((material) => (
                  <article key={material.id} className="p-4 bg-orange-50 rounded-xl shadow">
                    <img src={material.image} alt="" className="w-full h-40 object-contain" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200x140?text=No+Image")} />
                    <h3 className="font-semibold mt-2 text-orange-800">{material.title}</h3>
                    <div className="flex gap-3 mt-3">
                      <button onClick={() => openEditMaterial(stream, material)} className="px-3 py-1 bg-orange-100 text-orange-800 rounded">Edit</button>
                      <button onClick={() => deleteMaterial(stream.id, material.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-orange-800">
                  {editMode ? "Edit" : "Add"} {currentMaterial ? "Material" : currentStream ? "Material" : "Stream"}
                </h4>
                <button onClick={closeModal} className="text-orange-600">✕</button>
              </div>

              <form onSubmit={save} className="space-y-3">
                {/* Stream fields (when adding/editing stream) */}
                {!currentMaterial && (
                  <>
                    <label className="block text-sm font-medium text-orange-800">Stream Title</label>
                    <input className="w-full border p-2 rounded" value={form.streamTitle} onChange={(e) => setForm((f) => ({ ...f, streamTitle: e.target.value }))} />

                    <label className="block text-sm font-medium text-orange-800">Stream Image URL</label>
                    <input className="w-full border p-2 rounded" value={form.streamImage} onChange={(e) => setForm((f) => ({ ...f, streamImage: e.target.value }))} />
                  </>
                )}

                {/* Material fields (when adding/editing material) */}
                {currentStream && (
                  <>
                    <label className="block text-sm font-medium text-orange-800">Material Title</label>
                    <input className="w-full border p-2 rounded" value={form.materialTitle} onChange={(e) => setForm((f) => ({ ...f, materialTitle: e.target.value }))} />

                    <label className="block text-sm font-medium text-orange-800">Material Image URL</label>
                    <input className="w-full border p-2 rounded" value={form.materialImage} onChange={(e) => setForm((f) => ({ ...f, materialImage: e.target.value }))} />
                  </>
                )}

                <div className="flex justify-end gap-2">
                  <button type="button" onClick={closeModal} className="px-4 py-2 border rounded">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded">{editMode ? "Save" : "Add"}</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <p className="text-sm text-orange-600/70 mt-6">Notes: This admin works in-browser and saves changes to localStorage. For production you should connect these actions to your backend API.</p>
      </div>
    </div>
  );
}