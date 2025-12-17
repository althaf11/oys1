import React, { useEffect, useState } from "react";

const TEMPLATE_OPTIONS = ["Professional Simple", "Modern Blue", "Corporate Classic"];

// Generate 3 colleges with 10 students each
const DUMMY_STUDENTS = [
  // ABC College
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Student${i + 1} A`,
    email: `student${i + 1}a@abc.com`,
    phone: `90000000${i + 1}`,
    college: "ABC College",
    objective: "To pursue a career in software development.",
    skills: "HTML, CSS, JavaScript, React",
    experience: "College projects and internships",
    template: "",
    status: "Pending",
  })),
  // XYZ University
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Student${i + 1} B`,
    email: `student${i + 1}b@xyz.com`,
    phone: `90100000${i + 1}`,
    college: "XYZ University",
    objective: "Aspiring full-stack developer.",
    skills: "JavaScript, Node.js, React",
    experience: "Internship and college projects",
    template: "",
    status: "Pending",
  })),
  // LMN Institute
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    name: `Student${i + 1} C`,
    email: `student${i + 1}c@lmn.com`,
    phone: `90200000${i + 1}`,
    college: "LMN Institute",
    objective: "Looking for opportunities in software testing.",
    skills: "Selenium, Python, SQL",
    experience: "Internship at software company",
    template: "",
    status: "Pending",
  })),
];

export default function AdminResume() {
  const [colleges, setColleges] = useState({});
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [message, setMessage] = useState("");

  // Group students by college on mount
  useEffect(() => {
    const grouped = DUMMY_STUDENTS.reduce((acc, student) => {
      if (!acc[student.college]) acc[student.college] = [];
      acc[student.college].push(student);
      return acc;
    }, {});
    setColleges(grouped);
  }, []);

  const selectCollege = (college) => {
    setSelectedCollege(college);
    setSelectedStudentIndex(null);
    setShowResume(false);
    setEditMode(false);
    setSelectedTemplate("");
    setMessage("");
  };

  const selectStudent = (index) => {
    setSelectedStudentIndex(index);
    setShowResume(true);
    setEditMode(false);
    setSelectedTemplate(colleges[selectedCollege][index]?.template || "");
    setMessage("");
  };

  const updateStudent = (index, updated) => {
    setColleges((prev) => ({
      ...prev,
      [selectedCollege]: prev[selectedCollege].map((s, i) =>
        i === index ? { ...s, ...updated } : s
      ),
    }));
  };

  const approveStudent = (index) => {
    if (!selectedTemplate) {
      setMessage("Please select a template!");
      return;
    }
    updateStudent(index, { status: "Approved", template: selectedTemplate });
    setMessage("Student approved and resume updated!");
  };

  const downloadResume = (student) => {
    const html = `
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8"/>
        <title>Resume - ${student.name}</title>
        <style>
          body{font-family:Arial,margin:24px;color:#111}
          h1{color:#1f2937}
          .muted{color:#555}
          .section{margin-top:12px}
        </style>
      </head>
      <body>
        <h1>${student.name}</h1>
        <p class="muted"><b>Email:</b> ${student.email} | <b>Phone:</b> ${student.phone}</p>
        <div class="section"><h3>Career Objective</h3><p>${student.objective}</p></div>
        <div class="section"><h3>Skills</h3><p>${student.skills}</p></div>
        <div class="section"><h3>Experience</h3><p>${student.experience}</p></div>
        <div class="section"><small>Template: ${student.template || "N/A"}</small></div>
      </body>
      </html>
    `;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${student.name.replace(/\s+/g, "_")}_resume.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleFieldChange = (field, value) => {
    updateStudent(selectedStudentIndex, { [field]: value });
  };

  const student = selectedCollege && selectedStudentIndex !== null
    ? colleges[selectedCollege][selectedStudentIndex]
    : null;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="bg-orange-500 text-white rounded-lg p-4 text-center shadow">
          <h1 className="text-xl font-semibold">Admin Resume Panel</h1>
        </header>

        {/* College List */}
        {!selectedCollege && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-orange-500 text-lg font-semibold mb-4">
              Colleges ({Object.keys(colleges).length})
            </h2>
            {Object.keys(colleges).length === 0 ? (
              <p className="text-gray-500">No students submitted yet.</p>
            ) : (
              <ul className="space-y-2">
                {Object.entries(colleges).map(([college, students]) => (
                  <li key={college}>
                    <button
                      className="w-full flex justify-between items-center p-3 border rounded hover:bg-gray-50"
                      onClick={() => selectCollege(college)}
                    >
                      <span>{college}</span>
                      <span className="text-gray-500">{students.length} request(s)</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Students of Selected College */}
        {selectedCollege && !showResume && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-orange-500 text-lg font-semibold">
                {selectedCollege} – Students ({colleges[selectedCollege].length})
              </h2>
              <button
                className="px-3 py-1 border rounded hover:bg-gray-50"
                onClick={() => setSelectedCollege(null)}
              >
                Back
              </button>
            </div>
            <ul className="space-y-2">
              {colleges[selectedCollege].map((s, i) => (
                <li key={s.id}>
                  <button
                    className="w-full flex justify-between items-center p-3 border rounded hover:bg-gray-50"
                    onClick={() => selectStudent(i)}
                  >
                    <span>{s.name}</span>
                    <span className="text-gray-500">{s.status}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Student Resume / Edit */}
        {showResume && student && (
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-orange-500 text-lg font-semibold">
                {student.name} – Resume
              </h2>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded ${editMode ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? "Cancel" : "Edit"}
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => setShowResume(false)}
                >
                  Back
                </button>
              </div>
            </div>

            {message && <p className="text-red-600">{message}</p>}

            <div className="space-y-2">
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    value={student.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    value={student.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Phone"
                  />
                  <textarea
                    value={student.objective}
                    onChange={(e) => handleFieldChange("objective", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Career Objective"
                  />
                  <textarea
                    value={student.skills}
                    onChange={(e) => handleFieldChange("skills", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Skills"
                  />
                  <textarea
                    value={student.experience}
                    onChange={(e) => handleFieldChange("experience", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Experience"
                  />
                </>
              ) : (
                <>
                  <p><b>Name:</b> {student.name}</p>
                  <p><b>Email:</b> {student.email}</p>
                  <p><b>Phone:</b> {student.phone}</p>
                  <p><b>Career Objective:</b> {student.objective}</p>
                  <p><b>Skills:</b> {student.skills}</p>
                  <p><b>Experience:</b> {student.experience}</p>
                </>
              )}

              <div>
                <label className="block text-sm font-medium">Select Template</label>
                <select
                  className="mt-2 p-2 border rounded w-full max-w-xs"
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                >
                  <option value="">Choose Template</option>
                  {TEMPLATE_OPTIONS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-orange-500 text-white rounded"
                  onClick={() => approveStudent(selectedStudentIndex)}
                >
                  Approve
                </button>
                <button
                  className="px-4 py-2 border rounded"
                  onClick={() => downloadResume(student)}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
