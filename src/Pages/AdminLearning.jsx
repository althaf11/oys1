import React, { useEffect, useState } from "react";

/**
 * MixedTestsManager.jsx
 *
 * Single component:
 * - Safe async/await fetch from arbitrary API URL
 * - Normalizes data to standard test shape:
 *    { id, title, category, duration, level, questions, __source }
 * - Manual add / edit / delete (localStorage)
 * - Grouped cards UI, no "Take" buttons
 * - Optional Save to API (POST)
 */

const DEFAULT_API = "https://api.zunoy.com/api/v1/mps/demoAPI/1763632243";

// Helper: robust normalization of unknown API shapes into array
function normalizeApiResponse(raw) {
  if (!raw) return [];
  const tryKeys = ["tests", "mocks", "data", "items", "result", "papers", "payload"];
  for (const k of tryKeys) {
    if (raw[k]) {
      if (Array.isArray(raw[k])) return raw[k];
      // pick nested array if present
      const nested = Object.values(raw[k]).find((v) => Array.isArray(v));
      if (nested) return nested;
    }
  }
  if (Array.isArray(raw)) return raw;
  const arrayProp = Object.values(raw).find((v) => Array.isArray(v));
  if (arrayProp) return arrayProp;
  // fallback: wrap the root object
  return [raw];
}

// Map arbitrary item to the standard test shape
function mapToTest(item, idx) {
  const title = item.title || item.name || item.testName || item.product || item.name || `Test ${idx + 1}`;
  const category = item.category || item.group || item.subject || item.type || "Misc";
  const duration = item.duration || item.time || item.durationText || "";
  const level = item.level || item.difficulty || item.levelText || "";
  const questions = item.questions || item.qs || item.items || item.data || [];
  const id = item.id || item._id || `${title}-${idx}-${Math.random().toString(36).slice(2,7)}`;
  return { id, title, category, duration, level, questions, __source: "api", raw: item };
}

function groupByCategory(items) {
  const g = {};
  items.forEach((it) => {
    const cat = it.category || "Misc";
    if (!g[cat]) g[cat] = [];
    g[cat].push(it);
  });
  return g;
}

export default function AdminLearning() {
  const [apiUrl, setApiUrl] = useState(DEFAULT_API);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]); // combined api + manual
  const [manual, setManual] = useState({ title: "", category: "Aptitude", duration: "", level: "", questions: [] });
  const [editing, setEditing] = useState(null); // editing item
  const [error, setError] = useState("");

  // initialize from cache/localStorage
  useEffect(() => {
    try {
      const cachedApi = JSON.parse(localStorage.getItem("oys_cached_api") || "[]");
      const manualOnly = JSON.parse(localStorage.getItem("oys_manual_tests") || "[]");
      setItems([...cachedApi, ...manualOnly]);
    } catch (err) {
      console.error("init parse error", err);
      setItems([]);
    }
  }, []);

  // persist manual tests whenever items change
  useEffect(() => {
    try {
      const manualOnly = items.filter((it) => it.__source === "manual");
      localStorage.setItem("oys_manual_tests", JSON.stringify(manualOnly));
    } catch (err) {
      console.error("localStorage save manual error", err);
    }
  }, [items]);

  // Safe async fetch implementation
  const fetchApi = async (url = apiUrl) => {
    if (!url || !url.trim()) {
      setError("Please enter a valid API URL.");
      return;
    }

    setLoading(true);
    setMessage("Fetching data...");
    setError("");

    try {
      const resp = await fetch(url, { method: "GET", headers: { "Accept": "application/json" } });
      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
      }

      // Try reading JSON safely
      let json;
      try {
        json = await resp.json();
      } catch (parseErr) {
        throw new Error("Failed to parse JSON from API response.");
      }

      // Normalize and map
      const arr = normalizeApiResponse(json);
      const mapped = Array.isArray(arr) ? arr.map(mapToTest) : [];

      // Cache API-only items and merge with manual ones
      localStorage.setItem("oys_cached_api", JSON.stringify(mapped));
      const manualOnly = items.filter((it) => it.__source === "manual");
      setItems([...mapped, ...manualOnly]);
      setMessage(`Loaded ${mapped.length} items from API.`);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch API.");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  // Add manual test locally
  const addManualTest = () => {
    if (!manual.title.trim()) {
      setError("Please enter a test title.");
      return;
    }
    const newItem = {
      id: `manual-${Date.now()}`,
      title: manual.title,
      category: manual.category || "Misc",
      duration: manual.duration || "",
      level: manual.level || "",
      questions: manual.questions || [],
      __source: "manual",
    };
    setItems((prev) => [newItem, ...prev]);
    setManual({ ...manual, title: "", duration: "", level: "", questions: [] });
    setMessage("Manual test added locally.");
    setError("");
  };

  // Remove item (local delete only; API items removed locally only)
  const deleteItem = (id) => {
    const item = items.find((it) => it.id === id);
    if (!item) return;
    if (item.__source === "api") {
      if (!window.confirm("This came from API. Deleting will remove it locally only. Continue?")) return;
    }
    setItems((prev) => prev.filter((it) => it.id !== id));
    setMessage("Item removed locally.");
  };

  // Start editing (local)
  const startEdit = (item) => {
    // allow local editing for both manual & api (warning)
    if (item.__source === "api") {
      if (!window.confirm("Editing API item will be local only. Continue?")) return;
    }
    // deep copy questions to strings for textarea editing convenience
    setEditing({ ...item, questions: (item.questions || []).map(q => (typeof q === "string" ? q : (q.question || JSON.stringify(q)))) });
  };

  const saveEdit = () => {
    if (!editing) return;
    setItems((prev) => prev.map((it) => (it.id === editing.id ? { ...editing, __source: it.__source || "manual" } : it)));
    setEditing(null);
    setMessage("Changes saved locally.");
  };

  // Cancel editing
  const cancelEdit = () => setEditing(null);

  // Save combined data to API (POST) - optional and depends on server acceptance
  const saveToApi = async () => {
    try {
      setLoading(true);
      setMessage("Posting data to API...");
      setError("");

      const payload = items.map((it) => ({
        id: it.id,
        title: it.title,
        category: it.category,
        duration: it.duration,
        level: it.level,
        questions: it.questions,
      }));

      const resp = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tests: payload }),
      });

      if (!resp.ok) {
        const txt = await resp.text().catch(() => "");
        throw new Error(`POST failed: ${resp.status} ${resp.statusText} ${txt}`);
      }

      const json = await resp.json().catch(() => null);
      setMessage("Saved to API (server response logged to console).");
      console.log("SaveToApi response:", json);
    } catch (err) {
      console.error("Save to API error:", err);
      setError(err.message || "Failed to save to API.");
    } finally {
      setLoading(false);
    }
  };

  // Grouped view
  const grouped = groupByCategory(items);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-orange-700">E-Learning Tests</h1>
            <p className="text-sm text-gray-500 mt-1">Browse tests grouped by category. Manual add & safe API fetch.</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => fetchApi(apiUrl)}
              className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700"
              disabled={loading}
            >
              {loading ? "Loading…" : "Fetch API"}
            </button>
            <button
              onClick={saveToApi}
              className="px-4 py-2 rounded border bg-white hover:bg-gray-50"
              disabled={loading}
            >
              Save to API
            </button>
          </div>
        </header>

        {/* API URL bar */}
        <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          <input
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="Enter API URL (click Fetch API)"
            className="md:col-span-3 p-3 border rounded"
          />
          <div className="flex gap-2">
            <button onClick={() => fetchApi(apiUrl)} className="px-4 py-2 rounded bg-orange-600 text-white">Fetch</button>
            <button onClick={() => {
              const cached = JSON.parse(localStorage.getItem("oys_cached_api") || "[]");
              const manualOnly = items.filter(it => it.__source === "manual");
              setItems([...cached, ...manualOnly]);
              setMessage("Loaded cached API results.");
            }} className="px-3 py-2 border rounded">Use Cache</button>
          </div>
          <div className="md:col-span-4 text-sm text-gray-600">{ message } { error && <span className="text-red-600"> — {error}</span> }</div>
        </div>

        {/* Manual Add Box */}
        <section className="bg-white p-6 rounded-2xl shadow grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-2">
            <h2 className="text-lg font-semibold text-orange-700">Add New Test (Manual)</h2>
            <input
              placeholder="Test Title (e.g. Aptitude Quick 1)"
              className="w-full border p-2 rounded"
              value={manual.title}
              onChange={(e) => setManual({ ...manual, title: e.target.value })}
            />
            <div className="flex gap-2">
              <input placeholder="Duration (e.g. 30 min)" className="w-1/3 border p-2 rounded" value={manual.duration} onChange={(e)=>setManual({...manual, duration: e.target.value})} />
              <input placeholder="Level (Easy/Medium/Hard)" className="w-1/3 border p-2 rounded" value={manual.level} onChange={(e)=>setManual({...manual, level: e.target.value})} />
              <select value={manual.category} onChange={(e)=>setManual({...manual, category: e.target.value})} className="w-1/3 border p-2 rounded">
                {["Aptitude","TOEFL","GRE","Banking","RRB","Civils","Misc"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Optional: add a sample question (one)</label>
            <textarea className="w-full border p-2 rounded h-28" placeholder="Optional sample question..." value={(manual.questions && manual.questions[0] && (manual.questions[0].question || manual.questions[0])) || ""} onChange={(e)=>{
              setManual({...manual, questions: [{ question: e.target.value }]});
            }} />
            <div className="mt-3 flex gap-2">
              <button onClick={addManualTest} className="px-4 py-2 bg-green-600 text-white rounded">Add Test</button>
              <button onClick={()=>setManual({ title: "", category: manual.category, duration: "", level: "", questions: [] })} className="px-4 py-2 border rounded">Clear</button>
            </div>
          </div>
        </section>

        {/* Grid grouped by category */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(grouped).length === 0 && <div className="col-span-full p-6 bg-white rounded-lg text-gray-500">No tests available — fetch an API or add manually.</div>}

          {Object.entries(grouped).map(([category, list]) => (
            <div key={category} className="bg-white p-6 rounded-2xl shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-orange-700">{category}</h3>
                  <p className="text-sm text-gray-500 mt-1">{list.length} test{list.length>1?"s":""}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {list.map(test => (
                  <div key={test.id} className="bg-amber-50 border border-amber-100 rounded-lg p-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div>
                      <div className="font-semibold">{test.title}</div>
                      <div className="text-sm text-gray-500">{test.duration ? test.duration + " • " : ""}{test.level}</div>
                      {test.questions && test.questions.length>0 && <div className="text-xs text-gray-600 mt-1">Sample: {(typeof test.questions[0] === "string") ? test.questions[0] : (test.questions[0].question || "")}</div>}
                    </div>

                    <div className="flex gap-2">
                      <button onClick={()=>startEdit(test)} className="px-3 py-1 rounded bg-yellow-400 text-white">Edit</button>
                      <button onClick={()=>deleteItem(test.id)} className="px-3 py-1 rounded bg-red-400 text-white">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Edit Modal */}
        {editing && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
              <h3 className="text-xl font-semibold text-orange-700 mb-3">Edit Test</h3>

              <input className="w-full border p-2 rounded mb-2" value={editing.title} onChange={(e)=>setEditing({...editing, title: e.target.value})} />
              <div className="flex gap-2 mb-2">
                <input className="w-1/3 border p-2 rounded" value={editing.duration} onChange={(e)=>setEditing({...editing, duration: e.target.value})} />
                <input className="w-1/3 border p-2 rounded" value={editing.level} onChange={(e)=>setEditing({...editing, level: e.target.value})} />
                <input className="w-1/3 border p-2 rounded" value={editing.category} onChange={(e)=>setEditing({...editing, category: e.target.value})} />
              </div>

              <label className="text-sm font-semibold">Questions (one per line)</label>
              <textarea className="w-full border p-2 rounded h-32" value={(editing.questions || []).map(q => (typeof q === "string" ? q : (q.question||""))).join("\n")} onChange={(e)=>{
                const lines = e.target.value.split("\n").filter(Boolean);
                setEditing({...editing, questions: lines.map(l => ({ question: l }))});
              }} />

              <div className="mt-4 flex justify-end gap-2">
                <button onClick={cancelEdit} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={saveEdit} className="px-4 py-2 bg-orange-600 text-white rounded">Save</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
