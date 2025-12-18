// import React, { useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";

// const ResumeBuilder = () => {
//   const [resumeData, setResumeData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     skills: "",
//     projects: "",
//     experience: "",
//     education: "",
//   });

//   const handleChange = (e) => {
//     setResumeData({ ...resumeData, [e.target.name]: e.target.value });
//   };

//   const resumeRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => resumeRef.current,
//     documentTitle: "ATS_Resume",
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6">
//       <h1 className="text-4xl font-bold text-center text-orange -700 mb-10">
//         📑 ATS-Friendly Resume Builder
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {/* Input Form */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-orange -600">Enter Your Details</h2>
//           <form className="space-y-4">
//             {["name", "email", "phone", "skills", "projects", "experience", "education"].map(
//               (field) => (
//                 <div key={field}>
//                   <label className="block text-sm font-medium text-gray-700 capitalize">
//                     {field}
//                   </label>
//                   <textarea
//                     name={field}
//                     value={resumeData[field]}
//                     onChange={handleChange}
//                     placeholder={`Enter your ${field}`}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange -500 resize-none"
//                     rows={field === "skills" || field === "projects" ? 2 : 1}
//                   />
//                 </div>
//               )
//             )}
//           </form>
//           <button
//             onClick={handlePrint}
//             className="mt-6 w-full bg-orange -600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-orange -700 transition"
//           >
//             Download Resume (PDF)
//           </button>
//         </div>

//         {/* Resume Preview */}
//         <div
//           ref={resumeRef}
//           className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
//         >
//           <h2 className="text-3xl font-bold text-gray-900">{resumeData.name || "Your Name"}</h2>
//           <p className="text-gray-600">{resumeData.email || "your.email@example.com"} | {resumeData.phone || "123-456-7890"}</p>
//           <hr className="my-4" />

//           <div className="space-y-4">
//             {resumeData.skills && (
//               <div>
//                 <h3 className="text-xl font-semibold text-orange -600">Skills</h3>
//                 <p className="text-gray-700 whitespace-pre-line">{resumeData.skills}</p>
//               </div>
//             )}
//             {resumeData.projects && (
//               <div>
//                 <h3 className="text-xl font-semibold text-orange -600">Projects</h3>
//                 <p className="text-gray-700 whitespace-pre-line">{resumeData.projects}</p>
//               </div>
//             )}
//             {resumeData.experience && (
//               <div>
//                 <h3 className="text-xl font-semibold text-orange -600">Experience</h3>
//                 <p className="text-gray-700 whitespace-pre-line">{resumeData.experience}</p>
//               </div>
//             )}
//             {resumeData.education && (
//               <div>
//                 <h3 className="text-xl font-semibold text-orange -600">Education</h3>
//                 <p className="text-gray-700 whitespace-pre-line">{resumeData.education}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

// src/ResumeBuilder.jsx


/**
 * ResumeBuilder
 * - Tabs: Templates | Video Resume
 * - Templates grid: 10 templates (assumes files in public/templates and public/images)
 * - Video Resume: instructions + webcam recorder using MediaRecorder
 *
 * Notes:
 * - Place template PDF files: public/templates/template-1.pdf ... template-10.pdf
 * - Place preview images: public/images/template-1.png ... template-10.png
 * - This component uses Tailwind CSS for styling.
 */

// import { useEffect, useRef, useState } from "react";

// import { useEffect, useRef, useState } from "react";
// import HigherStudies from "./HigherStudies";

// const TEMPLATES = Array.from({ length: 12 }).map((_, i) => {
//   const id = i + 1;
//   const categories = ["Government", "IT", "Non-IT", "Business"];
//   return {
//     id,
//     name: `Template ${id}`,
//     description: `Clean ATS-friendly resume template #${id}`,
//     preview: `/images/template-${id}.jpg`,
//     file: `/templates/template-${id}.pdf`,
//     category: categories[i % categories.length], // assign categories in rotation
//   };
// });

// export default function ResumeBuilder() {
//   const [tab, setTab] = useState("Insta CV"); // ✅ Default to Insta CV
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(false);

//   // --- Resume Data ---
//   const [resumeData, setResumeData] = useState({
//     name: "Your Name",
//     email: "your.email@example.com",
//     phone: "+91 99999 99999",
//     location: "Hyderabad, India",
//     summary: "A passionate developer skilled in React, Node, and SQL.",
//     skills: "React, Node.js, SQL, Tailwind CSS",
//     education: "B.Tech in Computer Science, 2025",
//     experience: "Full Stack Intern at Coapps (2024 - 2025)",
//   });

//   // --- Video recorder state ---
//   const videoPreviewRef = useRef(null);
//   const recordedRef = useRef(null);
//   const mediaStreamRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunksRef = useRef([]);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedUrl, setRecordedUrl] = useState(null);
//   const [permissionError, setPermissionError] = useState("");

//   useEffect(() => {
//     if (tab === "Video Resume") {
//       (async () => {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({
//             video: true,
//             audio: true,
//           });
//           mediaStreamRef.current = stream;
//           if (videoPreviewRef.current) videoPreviewRef.current.srcObject = stream;
//           setPermissionError("");
//         } catch {
//           setPermissionError("Camera / microphone access denied or not available.");
//         }
//       })();
//     } else {
//       if (mediaStreamRef.current) {
//         mediaStreamRef.current.getTracks().forEach((t) => t.stop());
//         mediaStreamRef.current = null;
//       }
//       if (videoPreviewRef.current) videoPreviewRef.current.srcObject = null;
//     }
//     return () => {
//       if (mediaStreamRef.current) {
//         mediaStreamRef.current.getTracks().forEach((t) => t.stop());
//         mediaStreamRef.current = null;
//       }
//     };
//   }, [tab]);

//   const startRecording = async () => {
//     setPermissionError("");
//     if (!mediaStreamRef.current) {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         mediaStreamRef.current = stream;
//         if (videoPreviewRef.current) videoPreviewRef.current.srcObject = stream;
//       } catch {
//         setPermissionError("Unable to access camera/microphone. Please allow permission.");
//         return;
//       }
//     }

//     recordedChunksRef.current = [];
//     try {
//       const options = { mimeType: "video/webm;codecs=vp9,opus" };
//       const recorder = new MediaRecorder(mediaStreamRef.current, options);
//       mediaRecorderRef.current = recorder;
//       recorder.ondataavailable = (ev) => {
//         if (ev.data && ev.data.size > 0) {
//           recordedChunksRef.current.push(ev.data);
//         }
//       };
//       recorder.onstop = () => {
//         const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
//         const url = URL.createObjectURL(blob);
//         setRecordedUrl(url);
//         if (recordedRef.current) recordedRef.current.src = url;
//       };
//       recorder.start();
//       setIsRecording(true);
//       setRecordedUrl(null);
//     } catch {
//       setPermissionError("Recording not supported in this browser.");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
//       mediaRecorderRef.current.stop();
//     }
//     setIsRecording(false);
//   };

//   const downloadRecording = () => {
//     if (!recordedChunksRef.current.length) return;
//     const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
//     const a = document.createElement("a");
//     const url = URL.createObjectURL(blob);
//     a.href = url;
//     a.download = "video-resume.webm";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//   };

//   const clearRecording = () => {
//     setRecordedUrl(null);
//     recordedChunksRef.current = [];
//     if (recordedRef.current) recordedRef.current.src = "";
//   };

//   // 🔥 Filtered templates
//   const filteredTemplates =
//     filter === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === filter);

//   // 🔥 Loader wrapper for tab change
//   const handleTabChange = (newTab) => {
//     setLoading(true);
//     setTimeout(() => {
//       setTab(newTab);
//       setLoading(false);
//     }, 700); // simulate delay for smooth UX
//   };

//   return (
//     <>
//       <div className="max-w-6xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

//         {/* Tabs */}
//         <div className="flex gap-3 mb-6">
//           {["Insta CV", "templates", "preview", "export", "Video Resume"].map((t) => (
//             <button
//               key={t}
//               className={`px-4 py-2 rounded-md capitalize ${
//                 tab === t ? "bg-orange-600 text-white" : "bg-gray-100"
//               }`}
//               onClick={() => handleTabChange(t)}
//             >
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* Loader or Content */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         ) : (
//           <>
//             {/* Insta CV Tab */}
//             {tab === "Insta CV" && (
//               // <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               //   {/* Resume Preview */}
//               //   <div className="border rounded-lg p-4 bg-white shadow-sm">
//               //     <h2 className="text-xl font-semibold mb-3">Default Resume </h2>
//               //     <div className="space-y-2 text-sm">
//               //       <p><strong>{resumeData.name}</strong></p>
//               //       <p>{resumeData.email} | {resumeData.phone}</p>
//               //       <p>{resumeData.location}</p>
//               //       <p className="mt-3">{resumeData.summary}</p>
//               //       <p><strong>Skills:</strong> {resumeData.skills}</p>
//               //       <p><strong>Education:</strong> {resumeData.education}</p>
//               //       <p><strong>Experience:</strong> {resumeData.experience}</p>
//               //     </div>
//               //   </div>

//               //   {/* Input Form */}
//               //   <div className="border rounded-lg p-4 bg-gray-50">
//               //     <h2 className="text-xl font-semibold mb-3">Edit Resume</h2>
//               //     {Object.keys(resumeData).map((key) => (
//               //       <div key={key} className="mb-3">
//               //         <label className="block text-sm font-medium capitalize">{key}</label>
//               //         <input
//               //           type="text"
//               //           value={resumeData[key]}
//               //           onChange={(e) =>
//               //             setResumeData({ ...resumeData, [key]: e.target.value })
//               //           }
//               //           className="mt-1 block w-full border rounded px-2 py-1 text-sm"
//               //         />
//               //       </div>
//               //     ))}
//               //   </div>
//               // </div>
//               <div>
//                 <img src="https://marketplace.canva.com/EAFToMa2lws/2/0/1131w/canva-black-and-white-simple-office-assistant-resume-vZCQthxgjPk.jpg" className="w-1/2"/>
//                 <button className="bg-orange-500 rounded-lg px-2 py-2 hover:bg-orange-700">Download</button>
//                 <button
//                             onClick={() => {
//                               setSelectedTemplate();
//                               handleTabChange("export");
//                             }}
//                             className="px-3 py-1 ml-5 rounded bg-orange-500 hover:bg-orange-700 "
//                           >
//                             Use
//                           </button>
//               </div>
//             )}

//             {/* Templates Tab */}
//             {tab === "templates" && (
//               <div>
//                 {/* Dropdown filter */}
//                 <div className="mb-4">
//                   <label className="mr-2 font-medium">Filter by Category:</label>
//                   <select
//                     value={filter}
//                     onChange={(e) => setFilter(e.target.value)}
//                     className="border rounded px-3 py-1"
//                   >
//                     <option value="All">All</option>
//                     <option value="Government">Government</option>
//                     <option value="IT">IT</option>
//                     <option value="Non-IT">Non-IT</option>
//                     <option value="Business">Business</option>
//                   </select>
//                 </div>

//                 {/* Template Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredTemplates.map((t) => (
//                     <div
//                       key={t.id}
//                       className="border rounded-lg overflow-hidden bg-white shadow-sm"
//                     >
//                       <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
//                         <img
//                           src={t.preview}
//                           alt={t.name}
//                           className="object-contain w-full h-full"
//                         />
//                       </div>
//                       <div className="p-4">
//                         <h3 className="font-semibold text-lg">{t.name}</h3>
//                         <p className="text-sm text-gray-500 mt-1">{t.description}</p>
//                         <p className="text-xs text-orange-600 mt-1">
//                           Category: {t.category}
//                         </p>
//                         <div className="mt-4 flex gap-2">
//                           <button
//                             onClick={() => {
//                               setSelectedTemplate(t);
//                               handleTabChange("preview");
//                             }}
//                             className="px-3 py-1 rounded border hover:bg-gray-50"
//                           >
//                             Preview
//                           </button>
//                           <button
//                             onClick={() => {
//                               setSelectedTemplate(t);
//                               handleTabChange("export");
//                             }}
//                             className="px-3 py-1 rounded bg-orange-600 text-white"
//                           >
//                             Use
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Preview Tab */}
//             {tab === "preview" && selectedTemplate && (
//               <div className="flex flex-col items-center">
//                 <h2 className="text-2xl font-semibold mb-4">
//                   {selectedTemplate.name}
//                 </h2>
//                 <div className="w-full flex justify-center">
//                   <img
//                     src={selectedTemplate.preview}
//                     alt={selectedTemplate.name}
//                     className="max-h-[90vh] w-auto rounded border shadow-lg"
//                   />
//                 </div>
//                 <a
//                   href={selectedTemplate.file}
//                   download
//                   className="px-2 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 mt-4"
//                 >
//                   Edit
//                 </a>
//               </div>
//             )}

//             {/* Export Tab */}
//             {tab === "export" && (
//               <div>
//                 <h2 className="text-2xl font-semibold mb-6 text-center text-orange-600">
//                   Export & Share Your Resume
//                 </h2>
//                 <p className="text-gray-600 text-center mb-8">
//                   Download in multiple formats or upload directly to job portals
//                 </p>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   {/* Left Column */}
//                   <div className="border rounded-lg p-6 bg-white shadow-sm">
//                     <h3 className="text-lg font-semibold mb-4">Download Options</h3>
//                     <div className="space-y-3">
//                       <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left">
//                         Download as PDF
//                       </button>
//                       <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left">
//                         Download as DOCX
//                       </button>
//                       <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left">
//                         Download as TXT
//                       </button>
//                     </div>
//                   </div>

//                   {/* Right Column */}
//                   <div className="border rounded-lg p-6 bg-white shadow-sm">
//                     <h3 className="text-lg font-semibold mb-4">Upload to Job Portals</h3>
//                     <div className="space-y-3">
//                       <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50">
//                         LinkedIn <span className="text-green-600">● Connected</span>
//                       </button>
//                       <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50">
//                         Naukri.com <span className="text-gray-500">Connect</span>
//                       </button>
//                       <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50">
//                         Monster <span className="text-gray-500">Connect</span>
//                       </button>
//                       <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50">
//                         Indeed <span className="text-green-600">● Connected</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Video Resume Tab */}
//            {tab === "Video Resume" && (
//   <section className="space-y-10">
//     {/* 🎥 Hero Section with Sample Video */}
//     <div className="text-center">
//       <h2 className="text-3xl font-bold text-orange-600 mb-3">
//         Sample Video Resume
//       </h2>
//       <p className="text-gray-600 max-w-2xl mx-auto mb-6">
//         Watch this short sample to understand how to confidently introduce yourself,
//         highlight your skills, and end with a strong impression.
//       </p>
//       <div className="flex justify-center">
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/lWFbwcjWtmg?si=uQ71jQtsbXfQNPfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//       </div>
//     </div>

//     {/* 🧭 Video Resume Tips + Recorder UI */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       <div>
//         <h2 className="text-2xl font-semibold text-orange-600 mb-3">
//           How to Prepare a Great Video Resume
//         </h2>
//         <ul className="list-disc pl-5 space-y-2 text-gray-700">
//           <li>Keep it short: 60–90 seconds is ideal.</li>
//           <li>Start with a brief intro: name, role you’re applying for.</li>
//           <li>Highlight 2–3 most relevant skills or projects.</li>
//           <li>Speak clearly, maintain eye contact, and use good lighting.</li>
//           <li>Conclude with a call-to-action.</li>
//         </ul>
//       </div>

//       {/* Recorder UI */}
//       <div className="space-y-3">
//         <div className="border rounded p-3 bg-gray-50">
//           <p className="text-sm text-gray-700">Preview (live):</p>
//           <div className="mt-2 bg-black rounded overflow-hidden">
//             <video
//               ref={videoPreviewRef}
//               autoPlay
//               muted
//               playsInline
//               className="w-full h-56 object-contain bg-black"
//             />
//           </div>
//           {permissionError && (
//             <p className="text-red-500 text-sm mt-2">{permissionError}</p>
//           )}
//           <div className="mt-3 flex gap-2">
//             {!isRecording ? (
//               <button
//                 onClick={startRecording}
//                 className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700"
//               >
//                 ● Record
//               </button>
//             ) : (
//               <button
//                 onClick={stopRecording}
//                 className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
//               >
//                 ■ Stop
//               </button>
//             )}
//             {recordedUrl && (
//               <button
//                 onClick={clearRecording}
//                 className="px-3 py-2 border rounded text-sm"
//               >
//                 Clear Recording
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="border rounded p-3 bg-white">
//           <p className="text-sm text-gray-700">Playback / Download</p>
//           <div className="mt-2 bg-black rounded overflow-hidden">
//             <video
//               ref={recordedRef}
//               controls
//               src={recordedUrl || ""}
//               className="w-full h-48 object-contain"
//             />
//           </div>
//           <div className="mt-3 flex gap-2 items-center">
//             <button
//               onClick={downloadRecording}
//               disabled={!recordedUrl && recordedChunksRef.current.length === 0}
//               className={`px-4 py-2 rounded text-white ${
//                 recordedUrl || recordedChunksRef.current.length
//                   ? "bg-orange-600 hover:bg-green-700"
//                   : "bg-orange-600 cursor-not-allowed text-black"
//               }`}
//             >
//               ⤓ Download Video
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )}

//           </>
//         )}
//       </div>
      
//     </>
//   );
// }







// import { useEffect, useRef, useState } from "react";
// import HigherStudies from "./HigherStudies";

// const TEMPLATES = Array.from({ length: 12 }).map((_, i) => {
//   const id = i + 1;
//   const categories = ["Government", "IT", "Non-IT", "Business"];
//   return {
//     id,
//     name: `Template ${id}`,
//     description: `Clean ATS-friendly resume template #${id}`,
//     preview: `/images/template-${id}.jpg`,
//     file: `/templates/template-${id}.pdf`,
//     category: categories[i % categories.length],
//   };
// });

// export default function ResumeBuilder() {
//   const [tab, setTab] = useState("Insta CV");
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(false);

//   // --- Resume Data ---
//   const [resumeData, setResumeData] = useState({
//     name: "Your Name",
//     email: "your.email@example.com",
//     phone: "+91 99999 99999",
//     location: "Hyderabad, India",
//     summary: "A passionate developer skilled in React, Node, and SQL.",
//     skills: "React, Node.js, SQL, Tailwind CSS",
//     education: "B.Tech in Computer Science, 2025",
//     experience: "Full Stack Intern at Coapps (2024 - 2025)",
//   });

//   // --- Video Recorder State ---
//   const videoPreviewRef = useRef(null);
//   const recordedRef = useRef(null);
//   const mediaStreamRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const recordedChunksRef = useRef([]);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedUrl, setRecordedUrl] = useState(null);
//   const [permissionError, setPermissionError] = useState("");

//   useEffect(() => {
//     if (tab === "Video Resume") {
//       (async () => {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({
//             video: true,
//             audio: true,
//           });
//           mediaStreamRef.current = stream;
//           if (videoPreviewRef.current) videoPreviewRef.current.srcObject = stream;
//           setPermissionError("");
//         } catch {
//           setPermissionError("Camera / microphone access denied or not available.");
//         }
//       })();
//     } else {
//       if (mediaStreamRef.current) {
//         mediaStreamRef.current.getTracks().forEach((t) => t.stop());
//         mediaStreamRef.current = null;
//       }
//       if (videoPreviewRef.current) videoPreviewRef.current.srcObject = null;
//     }
//     return () => {
//       if (mediaStreamRef.current) {
//         mediaStreamRef.current.getTracks().forEach((t) => t.stop());
//         mediaStreamRef.current = null;
//       }
//     };
//   }, [tab]);

//   const startRecording = async () => {
//     setPermissionError("");
//     if (!mediaStreamRef.current) {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         mediaStreamRef.current = stream;
//         if (videoPreviewRef.current) videoPreviewRef.current.srcObject = stream;
//       } catch {
//         setPermissionError("Unable to access camera/microphone. Please allow permission.");
//         return;
//       }
//     }

//     recordedChunksRef.current = [];
//     try {
//       const options = { mimeType: "video/webm;codecs=vp9,opus" };
//       const recorder = new MediaRecorder(mediaStreamRef.current, options);
//       mediaRecorderRef.current = recorder;
//       recorder.ondataavailable = (ev) => {
//         if (ev.data && ev.data.size > 0) {
//           recordedChunksRef.current.push(ev.data);
//         }
//       };
//       recorder.onstop = () => {
//         const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
//         const url = URL.createObjectURL(blob);
//         setRecordedUrl(url);
//         if (recordedRef.current) recordedRef.current.src = url;
//       };
//       recorder.start();
//       setIsRecording(true);
//       setRecordedUrl(null);
//     } catch {
//       setPermissionError("Recording not supported in this browser.");
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
//       mediaRecorderRef.current.stop();
//     }
//     setIsRecording(false);
//   };

//   const downloadRecording = () => {
//     if (!recordedChunksRef.current.length) return;
//     const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
//     const a = document.createElement("a");
//     const url = URL.createObjectURL(blob);
//     a.href = url;
//     a.download = "video-resume.webm";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     URL.revokeObjectURL(url);
//   };

//   const clearRecording = () => {
//     setRecordedUrl(null);
//     recordedChunksRef.current = [];
//     if (recordedRef.current) recordedRef.current.src = "";
//   };

//   const filteredTemplates =
//     filter === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === filter);

//   const handleTabChange = (newTab) => {
//     setLoading(true);
//     setTimeout(() => {
//       setTab(newTab);
//       setLoading(false);
//     }, 700);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow">
//       <h1 className="text-3xl font-bold mb-6">Resume Maker</h1>

//       {/* Tabs */}
//       <div className="flex gap-3 mb-6 ">
//         {["Insta CV","export", "Video Resume"].map((t) => (
//           <button
//             key={t}
//             className={`px-4 py-2 rounded-md capitalize  ${
//               tab === t ? "bg-orange-600 text-white" : "bg-gray-100" 
//             }bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow`}
//             onClick={() => handleTabChange(t)}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* Loader or Content */}
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <>
//           {/* Insta CV Tab */}
//           {tab === "Insta CV" && (
//             <div>
//               <img
//                 src="https://marketplace.canva.com/EAFToMa2lws/2/0/1131w/canva-black-and-white-simple-office-assistant-resume-vZCQthxgjPk.jpg"
//                 className="w-1/2"
//               />
//               <button className="bg-orange-500 rounded-lg px-2 py-2 hover:bg-orange-700">
//                 Download
//               </button>
//               <button
//                 onClick={() => {
//                   setSelectedTemplate();
//                   handleTabChange("export");
//                 }}
//                 className="px-3 py-1 ml-5 rounded bg-orange-500 hover:bg-orange-700 "
//               >
//                 Use
//               </button>
//             </div>
//           )}

//           {/* Templates Tab */}
         

//           {/* Export Tab */}
//           {tab === "export" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-6 text-center text-orange-600 ">
//                 Export & Share Your Resume
//               </h2>
//               <p className="text-gray-600 text-center mb-8 bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
//                 Download in multiple formats or upload directly to job portals
//               </p>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
//                 {/* Left Column */}
//                 <div className="border rounded-lg p-6 bg-white shadow-sm">
//                   <h3 className="text-lg font-semibold mb-4 bg-white  text-black dark:text-black p-6 rounded-xl shadow">Download Options</h3>
//                   <div className="space-y-3">
//                     <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
//                       Download as PDF
//                     </button>
//                     <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
//                       Download as DOCX
//                     </button>
//                     <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
//                       Download as TXT
//                     </button>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="border rounded-lg p-6 bg-white shadow-sm">
//                   <h3 className="text-lg font-semibold mb-4 bg-white  text-black dark:text-black p-6 rounded-xl shadow">Upload to Job Portals</h3>
//                   <div className="space-y-3">
//                     <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
//                       LinkedIn <span className="text-green-600">● Connected</span>
//                     </button>
//                     <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
//                       Naukri.com <span className="text-gray-500">Connect</span>
//                     </button>
//                     <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
//                       Monster <span className="text-gray-500">Connect</span>
//                     </button>
//                     <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
//                       Indeed <span className="text-green-600">● Connected</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Video Resume Tab */}
//           {tab === "Video Resume" && (
//             <section className="space-y-10 bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
//               <div className="text-center">
//                 <h2 className="text-3xl font-bold text-orange-600 mb-3">
//                   Sample Video Resume
//                 </h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto mb-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow">
//                   Watch this short sample to understand how to confidently introduce yourself,
//                   highlight your skills, and end with a strong impression.
//                 </p>
//                 <div className="flex justify-center">
//                   <iframe
//                     width="560"
//                     height="315"
//                     src="https://www.youtube.com/embed/lWFbwcjWtmg?si=uQ71jQtsbXfQNPfo"
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div>
//                   <h2 className="text-2xl font-semibold text-orange-600 mb-3">
//                     How to Prepare a Great Video Resume
//                   </h2>
//                   <ul className="list-disc pl-5 space-y-2 text-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
//                     <li>Keep it short: 60–90 seconds is ideal.</li>
//                     <li>Start with a brief intro: name, role you’re applying for.</li>
//                     <li>Highlight 2–3 most relevant skills or projects.</li>
//                     <li>Speak clearly, maintain eye contact, and use good lighting.</li>
//                     <li>Conclude with a call-to-action.</li>
//                   </ul>
//                 </div>

//                 <div className="space-y-3">
//                   <div className="border rounded p-3 bg-gray-50">
//                     <p className="text-sm text-gray-700">Preview (live):</p>
//                     <div className="mt-2 bg-black rounded overflow-hidden">
//                       <video
//                         ref={videoPreviewRef}
//                         autoPlay
//                         muted
//                         playsInline
//                         className="w-full h-56 object-contain bg-black"
//                       />
//                     </div>
//                     {permissionError && (
//                       <p className="text-red-500 text-sm mt-2">{permissionError}</p>
//                     )}
//                     <div className="mt-3 flex gap-2">
//                       {!isRecording ? (
//                         <button
//                           onClick={startRecording}
//                           className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700"
//                         >
//                           ● Record
//                         </button>
//                       ) : (
//                         <button
//                           onClick={stopRecording}
//                           className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
//                         >
//                           ■ Stop
//                         </button>
//                       )}
//                       {recordedUrl && (
//                         <button
//                           onClick={clearRecording}
//                           className="px-3 py-2 border rounded text-sm"
//                         >
//                           Clear Recording
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   <div className="border rounded p-3 bg-white">
//                     <p className="text-sm text-gray-700">Playback / Download</p>
//                     <div className="mt-2 bg-black rounded overflow-hidden">
//                       <video
//                         ref={recordedRef}
//                         controls
//                         src={recordedUrl || ""}
//                         className="w-full h-48 object-contain"
//                       />
//                     </div>
//                     <div className="mt-3 flex gap-2 items-center">
//                       <button
//                         onClick={downloadRecording}
//                         disabled={!recordedUrl && recordedChunksRef.current.length === 0}
//                         className={`px-4 py-2 rounded text-white ${
//                           recordedUrl || recordedChunksRef.current.length
//                             ? "bg-orange-600 hover:bg-green-700"
//                             : "bg-orange-600 cursor-not-allowed text-black"
//                         }`}
//                       >
//                         ⤓ Download Video
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           )}
//         </>
//       )}
//     </div>
//   );
// }










import { useEffect, useRef, useState } from "react";

const TEMPLATES = Array.from({ length: 12 }).map((_, i) => {
  const id = i + 1;
  const categories = ["Government", "IT", "Non-IT", "Business"];
  return {
    id,
    name: `Template ${id}`,
    description: `Clean ATS-friendly resume template #${id}`,
    preview: `/images/template-${id}.jpg`,
    file: `/templates/template-${id}.pdf`,
    category: categories[i % categories.length],
  };
});

// Vocabulary lists for difficulty-based scoring
const BASIC_WORDS = new Set([
  "i", "am", "my", "me", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could", "should",
  "can", "may", "might", "must", "the", "a", "an", "and", "or", "but", "if",
  "in", "on", "at", "to", "for", "of", "with", "from", "by", "about", "as",
  "into", "through", "during", "before", "after", "above", "below", "between",
  "up", "down", "out", "off", "over", "under", "this", "that", "these", "those",
  "what", "which", "who", "whom", "whose", "when", "where", "why", "how",
  "all", "each", "every", "both", "few", "more", "most", "other", "some", "such",
  "no", "not", "only", "own", "same", "so", "than", "too", "very", "just",
  "now", "then", "there", "here", "get", "go", "see", "come", "know", "take",
  "give", "make", "use", "find", "tell", "ask", "work", "seem", "feel", "try",
  "leave", "call", "good", "new", "first", "last", "long", "great", "little",
  "old", "different", "small", "large", "next", "early", "young", "important",
  "public", "bad", "same", "able", "hello", "hi", "thank", "thanks", "please",
  "yes", "no", "okay", "ok", "name", "year", "years", "time", "day", "way"
]);

const INTERMEDIATE_WORDS = new Set([
  "study", "studied", "studying", "studies", "skills", "skill", "experience",
  "experienced", "project", "projects", "completed", "complete", "learning",
  "learned", "learn", "interested", "interest", "university", "college",
  "education", "educational", "degree", "bachelor", "master", "graduated",
  "graduate", "graduation", "course", "courses", "training", "trained",
  "knowledge", "understand", "understanding", "ability", "capable", "team",
  "teamwork", "worked", "working", "position", "role", "job", "career",
  "professional", "technology", "technical", "software", "application",
  "system", "systems", "programming", "program", "programs", "code", "coding",
  "developer", "development", "engineer", "engineering", "design", "designed",
  "designing", "created", "creating", "create", "build", "building", "built",
  "manage", "management", "managed", "lead", "leading", "responsible",
  "communication", "problem", "solving", "solution", "solutions", "company",
  "organization", "industry", "field", "area", "sector", "looking", "seeking",
  "opportunity", "opportunities", "passion", "passionate", "dedicated",
  "motivated", "goal", "goals", "objective", "objectives", "currently",
  "previously", "recently", "months", "month", "contribute", "contribution"
]);

const ADVANCED_WORDS = new Set([
  "developed", "implemented", "optimized", "collaborated", "collaboration",
  "internship", "proficient", "proficiency", "responsibilities", "responsibility",
  "coordinated", "coordination", "facilitated", "established", "executed",
  "execution", "analyzed", "analysis", "strategic", "strategy", "initiative",
  "initiatives", "achievement", "achievements", "accomplished", "accomplishment",
  "innovative", "innovation", "efficiency", "efficient", "methodology",
  "methodologies", "framework", "frameworks", "architecture", "infrastructure",
  "integration", "integrated", "deployment", "deployed", "scalable", "scalability",
  "performance", "optimization", "enhanced", "enhancement", "streamlined",
  "automated", "automation", "algorithm", "algorithms", "database", "databases",
  "api", "apis", "backend", "frontend", "fullstack", "agile", "scrum",
  "debugging", "troubleshooting", "documentation", "collaborative", "stakeholder",
  "stakeholders", "delivered", "delivery", "mentored", "mentoring", "expertise",
  "specialized", "specialization", "competency", "competencies", "demonstrated",
  "spearheaded", "orchestrated", "pioneered", "leveraged", "maximized",
  "synthesized", "evaluated", "assessment", "comprehensive", "multifaceted"
]);

export default function ResumeBuilder() {
  const [tab, setTab] = useState("Insta CV");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  // --- Resume Data ---
  const [resumeData, setResumeData] = useState({
    name: "Your Name",
    email: "your.email@example.com",
    phone: "+91 99999 99999",
    location: "Hyderabad, India",
    summary: "A passionate developer skilled in React, Node, and SQL.",
    skills: "React, Node.js, SQL, Tailwind CSS",
    education: "B.Tech in Computer Science, 2025",
    experience: "Full Stack Intern at Coapps (2024 - 2025)",
  });

  // --- Video Recorder State ---
  const videoPreviewRef = useRef(null);
  const recordedRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState(null);
  const [permissionError, setPermissionError] = useState("");

  // --- NLP / Speech Recognition State ---
  const recognitionRef = useRef(null);
  const [transcript, setTranscript] = useState("");
  const [englishScore, setEnglishScore] = useState(null);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (tab === "Video Resume") {
      (async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });
          mediaStreamRef.current = stream;
          if (videoPreviewRef.current) videoPreviewRef.current.srcObject = stream;
          setPermissionError("");
        } catch {
          setPermissionError("Camera / microphone access denied or not available.");
        }
      })();

      // Check for Speech Recognition support
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setSpeechSupported(false);
      }
    } else {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
      }
      if (videoPreviewRef.current) videoPreviewRef.current.srcObject = null;
    }
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors on cleanup
        }
        recognitionRef.current = null;
      }
    };
  }, [tab]);

  const calculateEnglishScore = (text) => {
    if (!text.trim()) return 0;

    // Tokenize: split by spaces and clean (remove punctuation)
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 0);

    if (words.length === 0) return 0;

    const totalWords = words.length;
    const uniqueWords = new Set(words).size;

    // Count intermediate and advanced words
    let intermediateCount = 0;
    let advancedCount = 0;

    words.forEach(word => {
      if (INTERMEDIATE_WORDS.has(word)) {
        intermediateCount++;
      }
      if (ADVANCED_WORDS.has(word)) {
        advancedCount++;
      }
    });

    // Calculate score components
    const diversityScore = (uniqueWords / totalWords) * 40;
    const intermediateScore = intermediateCount * 2;
    const advancedScore = advancedCount * 4;

    let rawScore = diversityScore + intermediateScore + advancedScore;

    // Apply short answer penalty
    if (totalWords < 25) {
      rawScore = rawScore * 0.8; // 20% penalty
    }

    // Cap at 95 and round
    const finalScore = Math.min(Math.round(rawScore), 95);
    
    return Math.max(0, finalScore);
  };

  const startRecording = async () => {
    setPermissionError("");
    setTranscript("");
    setEnglishScore(null);

    if (!mediaStreamRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        mediaStreamRef.current = stream;
        if (videoPreviewRef.current) videoPreviewRef.current.srcObject = stream;
      } catch {
        setPermissionError("Unable to access camera/microphone. Please allow permission.");
        return;
      }
    }

    recordedChunksRef.current = [];

    // Start Video Recording
    try {
      const options = { mimeType: "video/webm;codecs=vp9,opus" };
      const recorder = new MediaRecorder(mediaStreamRef.current, options);
      mediaRecorderRef.current = recorder;
      recorder.ondataavailable = (ev) => {
        if (ev.data && ev.data.size > 0) {
          recordedChunksRef.current.push(ev.data);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);
        if (recordedRef.current) recordedRef.current.src = url;
      };
      recorder.start();
      setIsRecording(true);
      setRecordedUrl(null);
    } catch {
      setPermissionError("Recording not supported in this browser.");
      return;
    }

    // Start Speech Recognition
    if (speechSupported) {
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = "en-US";

        let fullTranscript = "";

        recognition.onresult = (event) => {
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              fullTranscript += event.results[i][0].transcript + " ";
            }
          }
          setTranscript(fullTranscript.trim());
        };

        recognition.onerror = (event) => {
          console.warn("Speech recognition error:", event.error);
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (err) {
        console.warn("Could not start speech recognition:", err);
      }
    }
  };

  const stopRecording = () => {
    // Stop video recording
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);

    // Stop speech recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Ignore errors
      }
    }

    // Calculate score after a short delay to ensure transcript is updated
    setTimeout(() => {
      const currentTranscript = transcript;
      if (currentTranscript.trim()) {
        const score = calculateEnglishScore(currentTranscript);
        setEnglishScore(score);
      } else {
        setEnglishScore(0);
      }
    }, 500);
  };

  const downloadRecording = () => {
    if (!recordedChunksRef.current.length) return;
    const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
    const a = document.createElement("a");
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = "video-resume.webm";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const clearRecording = () => {
    setRecordedUrl(null);
    recordedChunksRef.current = [];
    setTranscript("");
    setEnglishScore(null);
    if (recordedRef.current) recordedRef.current.src = "";
  };

  const filteredTemplates =
    filter === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === filter);

  const handleTabChange = (newTab) => {
    setLoading(true);
    setTimeout(() => {
      setTab(newTab);
      setLoading(false);
    }, 700);
  };

  const getScoreColor = (score) => {
    if (score >= 75) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getScoreLabel = (score) => {
    if (score >= 75) return "Good vocabulary for interviews";
    if (score >= 50) return "Average, try adding more descriptive words";
    return "Needs improvement, practice more";
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Resume Maker</h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 ">
        {["Insta CV","export", "Video Resume"].map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-md capitalize  ${
              tab === t ? "bg-orange-600 text-white" : "bg-gray-100" 
            }bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow`}
            onClick={() => handleTabChange(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Loader or Content */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Insta CV Tab */}
          {tab === "Insta CV" && (
            <div>
              <img
                src="https://marketplace.canva.com/EAFToMa2lws/2/0/1131w/canva-black-and-white-simple-office-assistant-resume-vZCQthxgjPk.jpg"
                className="w-1/2"
              />
              <button className="bg-orange-500 rounded-lg px-2 py-2 hover:bg-orange-700">
                Download
              </button>
              <button
                onClick={() => {
                  setSelectedTemplate();
                  handleTabChange("export");
                }}
                className="px-3 py-1 ml-5 rounded bg-orange-500 hover:bg-orange-700 "
              >
                Use
              </button>
            </div>
          )}

          {/* Templates Tab */}
         

          {/* Export Tab */}
          {tab === "export" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center text-orange-600 ">
                Export & Share Your Resume
              </h2>
              <p className="text-gray-600 text-center mb-8 bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
                Download in multiple formats or upload directly to job portals
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                {/* Left Column */}
                <div className="border rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 bg-white  text-black dark:text-black p-6 rounded-xl shadow">Download Options</h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
                      Download as PDF
                    </button>
                    <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
                      Download as DOCX
                    </button>
                    <button className="w-full px-4 py-2 border rounded hover:bg-gray-50 text-left bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
                      Download as TXT
                    </button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="border rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 bg-white  text-black dark:text-black p-6 rounded-xl shadow">Upload to Job Portals</h3>
                  <div className="space-y-3">
                    <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                      LinkedIn <span className="text-green-600">● Connected</span>
                    </button>
                    <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                      Naukri.com <span className="text-gray-500">Connect</span>
                    </button>
                    <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                      Monster <span className="text-gray-500">Connect</span>
                    </button>
                    <button className="w-full flex justify-between px-4 py-2 border rounded hover:bg-gray-50 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                      Indeed <span className="text-green-600">● Connected</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Resume Tab */}
          {tab === "Video Resume" && (
            <section className="space-y-10 bg-white dark:bg-gray-900 text-black dark:text-white  rounded-xl shadow">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-orange-600 mb-3">
                  Sample Video Resume
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow">
                  Watch this short sample to understand how to confidently introduce yourself,
                  highlight your skills, and end with a strong impression.
                </p>
                <div className="flex justify-center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/lWFbwcjWtmg?si=uQ71jQtsbXfQNPfo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-orange-600 mb-3">
                    How to Prepare a Great Video Resume
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
                    <li>Keep it short: 60–90 seconds is ideal.</li>
                    <li>Start with a brief intro: name, role you're applying for.</li>
                    <li>Highlight 2–3 most relevant skills or projects.</li>
                    <li>Speak clearly, maintain eye contact, and use good lighting.</li>
                    <li>Conclude with a call-to-action.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="border rounded p-3 bg-gray-50">
                    <p className="text-sm text-gray-700">Preview (live):</p>
                    <div className="mt-2 bg-black rounded overflow-hidden">
                      <video
                        ref={videoPreviewRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-56 object-contain bg-black"
                      />
                    </div>
                    {permissionError && (
                      <p className="text-red-500 text-sm mt-2">{permissionError}</p>
                    )}
                    {!speechSupported && (
                      <p className="text-yellow-600 text-sm mt-2">
                        Speech recognition not supported in this browser. English scoring unavailable.
                      </p>
                    )}
                    <div className="mt-3 flex gap-2">
                      {!isRecording ? (
                        <button
                          onClick={startRecording}
                          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700"
                        >
                          ● Record
                        </button>
                      ) : (
                        <button
                          onClick={stopRecording}
                          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                        >
                          ■ Stop
                        </button>
                      )}
                      {recordedUrl && (
                        <button
                          onClick={clearRecording}
                          className="px-3 py-2 border rounded text-sm"
                        >
                          Clear Recording
                        </button>
                      )}
                    </div>
                  </div>

                  {/* English Score Meter */}
                  {englishScore !== null && (
                    <div className="border rounded p-4 bg-white">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        English Vocabulary Score
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${getScoreColor(englishScore)}`}
                            style={{ width: `${englishScore}%` }}
                          ></div>
                        </div>
                        <span className="text-lg font-bold text-gray-800">
                          {englishScore}%
                        </span>
                      </div>
                      <p className={`text-sm font-medium ${
                        englishScore >= 75 ? "text-green-600" :
                        englishScore >= 50 ? "text-yellow-600" : "text-red-600"
                      }`}>
                        {getScoreLabel(englishScore)}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Score based on vocabulary diversity and professional terminology usage.
                      </p>
                    </div>
                  )}

                  <div className="border rounded p-3 bg-white">
                    <p className="text-sm text-gray-700">Playback / Download</p>
                    <div className="mt-2 bg-black rounded overflow-hidden">
                      <video
                        ref={recordedRef}
                        controls
                        src={recordedUrl || ""}
                        className="w-full h-48 object-contain"
                      />
                    </div>
                    <div className="mt-3 flex gap-2 items-center">
                      <button
                        onClick={downloadRecording}
                        disabled={!recordedUrl && recordedChunksRef.current.length === 0}
                        className={`px-4 py-2 rounded text-white ${
                          recordedUrl || recordedChunksRef.current.length
                            ? "bg-orange-600 hover:bg-green-700"
                            : "bg-orange-600 cursor-not-allowed text-black"
                        }`}
                      >
                        ⤓ Download Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}