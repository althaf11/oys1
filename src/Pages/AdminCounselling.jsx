import React, { useEffect, useRef, useState } from "react";
import * as ChartJS from "chart.js";
const Chart = ChartJS.Chart;
Chart.register(...Object.values(ChartJS).filter(c => c && c.id));

export default function AdminCounselling() {
  // Sample data
  const [leads, setLeads] = useState([
    { id: 1, name: "Rahul Sharma", phone: "9876543210", college: "ABC College", service: "resume", counsellor: null, status: "pending", date: "2025-11-18" },
    { id: 2, name: "Priya Verma", phone: "9876543211", college: "XYZ College", service: "exam", counsellor: "Jane Smith", status: "assigned", date: "2025-11-19" },
    { id: 3, name: "Amit Kumar", phone: "9876543212", college: "ABC College", service: "interview", counsellor: null, status: "pending", date: "2025-11-17" },
    { id: 4, name: "Neha Gupta", phone: "9876543213", college: "LMN College", service: "higher", counsellor: "Emily Davis", status: "scheduled", date: "2025-11-20", scheduledTime: "10:00 AM", meetingLink: "https://meet.google.com/abc-defg-hij" },
    { id: 5, name: "Rohan Singh", phone: "9876543214", college: "XYZ College", service: "career", counsellor: "Tom Brown", status: "completed", date: "2025-11-15" }
  ]);

  const [counsellors, setCounsellors] = useState([
    { name: "John Doe", expertise: ["resume"], assigned: 12 },
    { name: "Jane Smith", expertise: ["exam", "interview"], assigned: 18 },
    { name: "Sarah Lee", expertise: ["business"], assigned: 9 },
    { name: "Tom Brown", expertise: ["career", "time"], assigned: 15 },
    { name: "Emily Davis", expertise: ["higher"], assigned: 22 },
    { name: "Mike Johnson", expertise: ["time", "career"], assigned: 11 },
    { name: "David Wilson", expertise: ["interview"], assigned: 14 }
  ]);

  const serviceFullName = {
    resume: "Resume Making", exam: "Exam Preparation", time: "Time Management",
    business: "Business Counselling", career: "Career Planning", higher: "Higher Studies", interview: "Interview Training"
  };

  // UI state
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showScheduleDetailsModal, setShowScheduleDetailsModal] = useState(false);
  const [showAddCounsellorModal, setShowAddCounsellorModal] = useState(false);
  const [showReassignModal, setShowReassignModal] = useState(false);
  const [expandedCounsellor, setExpandedCounsellor] = useState(null);
  const [currentLeadId, setCurrentLeadId] = useState(null);
  const [selectedCounsellor, setSelectedCounsellor] = useState('');
  const [selectedCounsellorName, setSelectedCounsellorName] = useState('');
  const [newCounsellorName, setNewCounsellorName] = useState('');
  const [newCounsellorExpertise, setNewCounsellorExpertise] = useState([]);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduleLink, setScheduleLink] = useState('');

  // Chart refs
  const serviceChartRef = useRef(null);
  const monthlyChartRef = useRef(null);
  const counsellorChartRef = useRef(null);
  const chartsRef = useRef({});

  useEffect(() => {
    if (activeTab === 'reports') createCharts();
  }, [activeTab, leads, counsellors]);

  function createCharts() {
    const serviceCount = {};
    leads.forEach(l => (serviceCount[l.service] = (serviceCount[l.service] || 0) + 1));
    Object.values(chartsRef.current).forEach(c => c && c.destroy());

    chartsRef.current.service = new Chart(serviceChartRef.current, {
      type: 'pie',
      data: {
        labels: Object.keys(serviceCount).map(k => serviceFullName[k]),
        datasets: [{ data: Object.values(serviceCount), backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF','#FF9F40','#C9CBCF'] }]
      },
      options: { responsive: true }
    });

    chartsRef.current.monthly = new Chart(monthlyChartRef.current, {
      type: 'bar',
      data: { labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], datasets: [{ label: 'Applications', data: [12,19,15,25,22,30,28,35,40,38,45,50] }] },
      options: { responsive: true }
    });

    const top = [...counsellors].sort((a,b) => b.assigned - a.assigned).slice(0,5);
    chartsRef.current.top = new Chart(counsellorChartRef.current, {
      type: 'doughnut',
      data: { labels: top.map(t => t.name), datasets: [{ data: top.map(t => t.assigned), backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF'] }] },
      options: { responsive: true }
    });
  }

  const counts = {
    total: leads.length,
    pending: leads.filter(l => l.status === 'pending').length,
    assigned: leads.filter(l => l.status === 'assigned').length,
    scheduled: leads.filter(l => l.status === 'scheduled').length,
    completed: leads.filter(l => l.status === 'completed').length
  };

  function openAssignModal(id) {
    setCurrentLeadId(id);
    setSelectedCounsellor('');
    setShowAssignModal(true);
  }

  function handleAssign(e) {
    e.preventDefault();
    if (!selectedCounsellor) return;
    setLeads(prev => prev.map(l => l.id === currentLeadId ? { ...l, counsellor: selectedCounsellor, status: 'assigned' } : l));
    setCounsellors(prev => prev.map(c => c.name === selectedCounsellor ? { ...c, assigned: c.assigned + 1 } : c));
    setShowAssignModal(false);
    alert('Counsellor assigned successfully!');
  }

  function openScheduleModal(id) {
    setCurrentLeadId(id);
    setScheduleDate('');
    setScheduleTime('');
    setScheduleLink('');
    setShowScheduleModal(true);
  }

  function handleSchedule(e) {
    e.preventDefault();
    if (!scheduleDate || !scheduleTime) return alert('Pick date and time');
    setLeads(prev => prev.map(l => l.id === currentLeadId ? { ...l, status: 'scheduled', date: scheduleDate, scheduledTime: scheduleTime, meetingLink: scheduleLink } : l));
    setShowScheduleModal(false);
    alert('Session scheduled!');
  }

  function openScheduleDetailsModal(id) {
    setCurrentLeadId(id);
    setShowScheduleDetailsModal(true);
  }

  function completeLead(id) {
    if (!window.confirm('Mark as completed?')) return;
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: 'completed' } : l));
  }

  function handleAddCounsellor(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!newCounsellorName) return;
    setCounsellors(prev => [...prev, { name: newCounsellorName, expertise: newCounsellorExpertise, assigned: 0 }]);
    setNewCounsellorName('');
    setNewCounsellorExpertise([]);
    setShowAddCounsellorModal(false);
    alert('Counsellor added!');
  }

  const availableForCurrentLead = () => {
    const lead = leads.find(l => l.id === currentLeadId);
    if (!lead) return [];
    return counsellors.filter(c => c.expertise.includes(lead.service));
  };

  const getCurrentLeadDetails = () => {
    return leads.find(l => l.id === currentLeadId);
  };

  const getCounsellorStudents = (counsellorName) => {
    return leads.filter(l => l.counsellor === counsellorName);
  };

  function toggleCounsellorExpansion(counsellorName) {
    setExpandedCounsellor(expandedCounsellor === counsellorName ? null : counsellorName);
  }

  function openReassignModal(leadId, currentCounsellor) {
    setCurrentLeadId(leadId);
    setSelectedCounsellorName(currentCounsellor);
    setSelectedCounsellor('');
    setShowReassignModal(true);
  }

  function handleReassign(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!selectedCounsellor) return;
    
    // Update lead with new counsellor
    setLeads(prev => prev.map(l => l.id === currentLeadId ? { ...l, counsellor: selectedCounsellor } : l));
    
    // Update counsellor counts
    setCounsellors(prev => prev.map(c => {
      if (c.name === selectedCounsellorName) return { ...c, assigned: c.assigned - 1 };
      if (c.name === selectedCounsellor) return { ...c, assigned: c.assigned + 1 };
      return c;
    }));
    
    setShowReassignModal(false);
    alert('Student reassigned successfully!');
  }

  function removeStudentFromCounsellor(leadId, counsellorName) {
    if (!window.confirm('Remove this student from counsellor?')) return;
    
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, counsellor: null, status: 'pending' } : l));
    setCounsellors(prev => prev.map(c => c.name === counsellorName ? { ...c, assigned: c.assigned - 1 } : c));
    alert('Student removed successfully!');
  }

  // Leads grouped by college
  const leadsByCollege = leads.reduce((acc, lead) => {
    acc[lead.college] = acc[lead.college] || [];
    acc[lead.college].push(lead);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-50 text-slate-800">
      <header className="bg-gradient-to-r from-orange-600 to-orange-600 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-semibold">Career Counselling Admin Panel</h1>
          <p className="text-sm opacity-90">Manage Leads, Counsellors & Analytics</p>
        </div>
      </header>

      <nav className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-4 justify-center py-3">
            {['dashboard','leads','counsellors','reports'].map(t => (
              <li key={t}>
                <button onClick={() => setActiveTab(t)} className={`px-4 py-2 rounded-full font-semibold ${activeTab===t ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                  {t.charAt(0).toUpperCase()+t.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <section>
            <h2 className="text-orange-600 text-xl mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow"> <h3 className="text-sm text-slate-500">Total Applications</h3> <p className="text-3xl font-bold text-orange-600">{counts.total}</p> </div>
              <div className="bg-white p-6 rounded-xl shadow"> <h3 className="text-sm text-slate-500">Pending</h3> <p className="text-3xl font-bold text-amber-500">{counts.pending}</p> </div>
              <div className="bg-white p-6 rounded-xl shadow"> <h3 className="text-sm text-slate-500">Assigned</h3> <p className="text-3xl font-bold text-emerald-600">{counts.assigned}</p> </div>
              <div className="bg-white p-6 rounded-xl shadow"> <h3 className="text-sm text-slate-500">Scheduled</h3> <p className="text-3xl font-bold text-sky-500">{counts.scheduled}</p> </div>
              <div className="bg-white p-6 rounded-xl shadow"> <h3 className="text-sm text-slate-500">Completed</h3> <p className="text-3xl font-bold text-orange-700">{counts.completed}</p> </div>
            </div>
          </section>
        )}

        {/* Leads - College Wise */}
        {activeTab === 'leads' && (
          <section>
            <h2 className="text-orange-600 text-xl mb-4">Student Applications - College Wise</h2>
            {Object.keys(leadsByCollege).map(college => (
              <div key={college} className="mb-8">
                <h3 className="text-lg font-semibold text-slate-700 mb-3">{college}</h3>
                <div className="overflow-x-auto bg-white rounded-xl shadow">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-orange-600 text-white">
                        <th className="px-4 py-3 text-left">ID</th>
                        <th className="px-4 py-3 text-left">Name</th>
                        <th className="px-4 py-3 text-left">Phone</th>
                        <th className="px-4 py-3 text-left">Service</th>
                        <th className="px-4 py-3 text-left">Counsellor</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadsByCollege[college].map(lead => (
                        <tr key={lead.id} className="hover:bg-slate-50 border-b">
                          <td className="px-4 py-3">{lead.id}</td>
                          <td className="px-4 py-3">{lead.name}</td>
                          <td className="px-4 py-3">{lead.phone}</td>
                          <td className="px-4 py-3">{serviceFullName[lead.service]}</td>
                          <td className="px-4 py-3">{lead.counsellor || <em className="text-slate-400">Not Assigned</em>}</td>
                          <td className="px-4 py-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${lead.status==='pending' ? 'bg-amber-100 text-amber-800' : lead.status==='assigned' ? 'bg-emerald-100 text-emerald-800' : lead.status==='scheduled' ? 'bg-sky-100 text-sky-800' : 'bg-violet-100 text-violet-800'}`}>
                              {lead.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-4 py-3">{lead.date}</td>
                          <td className="px-4 py-3 space-x-2">
                            {lead.status === 'pending' && (
                              <button 
                                onClick={() => openAssignModal(lead.id)} 
                                className="px-3 py-1 rounded-md bg-amber-500 text-white font-semibold"
                              >
                                Assign
                              </button>
                            )}
                            {lead.status === 'assigned' && (
                              <button 
                                onClick={() => openScheduleModal(lead.id)} 
                                className="px-3 py-1 rounded-md bg-emerald-600 text-white font-semibold"
                              >
                                Schedule
                              </button>
                            )}
                            {lead.status === 'scheduled' && (
                              <>
                                <button 
                                  onClick={() => openScheduleDetailsModal(lead.id)} 
                                  className="px-3 py-1 rounded-md bg-sky-600 text-white font-semibold"
                                >
                                  View Details
                                </button>
                                <button 
                                  onClick={() => completeLead(lead.id)} 
                                  className="px-3 py-1 rounded-md bg-violet-600 text-white font-semibold"
                                >
                                  Complete
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Counsellors */}
        {activeTab === 'counsellors' && (
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-orange-600 text-xl mb-4">Manage Counsellors</h2>
              <button onClick={() => setShowAddCounsellorModal(true)} className="px-4 py-2 rounded-md bg-orange-600 text-white">+ Add Counsellor</button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Expertise</th>
                    <th className="px-4 py-3 text-left">Total Assigned</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {counsellors.map(c => (
                    <React.Fragment key={c.name}>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="px-4 py-3">{c.name}</td>
                        <td className="px-4 py-3">{c.expertise.map(e => serviceFullName[e]).join(', ')}</td>
                        <td className="px-4 py-3 font-bold">{c.assigned}</td>
                        <td className="px-4 py-3">
                          <button 
                            onClick={() => toggleCounsellorExpansion(c.name)} 
                            className="px-3 py-1 rounded-md bg-orange-600 text-white text-sm"
                          >
                            {expandedCounsellor === c.name ? 'Hide' : 'Show'}
                          </button>
                        </td>
                      </tr>
                      {expandedCounsellor === c.name && (
                        <tr>
                          <td colSpan="4" className="px-4 py-4 bg-slate-50">
                            {getCounsellorStudents(c.name).length > 0 ? (
                              <div className="overflow-x-auto">
                                <h4 className="font-semibold text-slate-700 mb-3">Assigned Students</h4>
                                <table className="min-w-full text-sm bg-white rounded-lg">
                                  <thead>
                                    <tr className="bg-orange-100">
                                      <th className="px-3 py-2 text-left">ID</th>
                                      <th className="px-3 py-2 text-left">Student Name</th>
                                      <th className="px-3 py-2 text-left">Phone</th>
                                      <th className="px-3 py-2 text-left">College</th>
                                      <th className="px-3 py-2 text-left">Service Applied</th>
                                      <th className="px-3 py-2 text-left">Status</th>
                                      <th className="px-3 py-2 text-left">Date</th>
                                      <th className="px-3 py-2 text-left">Time</th>
                                      <th className="px-3 py-2 text-left">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {getCounsellorStudents(c.name).map(student => (
                                      <tr key={student.id} className="border-b hover:bg-slate-50">
                                        <td className="px-3 py-2">{student.id}</td>
                                        <td className="px-3 py-2 font-semibold">{student.name}</td>
                                        <td className="px-3 py-2">{student.phone}</td>
                                        <td className="px-3 py-2">{student.college}</td>
                                        <td className="px-3 py-2">{serviceFullName[student.service]}</td>
                                        <td className="px-3 py-2">
                                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${student.status==='pending' ? 'bg-amber-100 text-amber-800' : student.status==='assigned' ? 'bg-emerald-100 text-emerald-800' : student.status==='scheduled' ? 'bg-sky-100 text-sky-800' : 'bg-violet-100 text-violet-800'}`}>
                                            {student.status.toUpperCase()}
                                          </span>
                                        </td>
                                        <td className="px-3 py-2">{student.date}</td>
                                        <td className="px-3 py-2">{student.scheduledTime || <em className="text-slate-400">N/A</em>}</td>
                                        <td className="px-3 py-2 space-x-2">
                                          <button 
                                            onClick={() => openReassignModal(student.id, c.name)} 
                                            className="px-2 py-1 rounded-md bg-blue-600 text-white text-xs"
                                          >
                                            Reassign
                                          </button>
                                          <button 
                                            onClick={() => removeStudentFromCounsellor(student.id, c.name)} 
                                            className="px-2 py-1 rounded-md bg-red-600 text-white text-xs"
                                          >
                                            Remove
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <div className="text-center py-4 text-slate-500">
                                <p>No students assigned to this counsellor yet.</p>
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Reports */}
        {activeTab === 'reports' && (
          <section>
            <h2 className="text-orange-600 text-xl mb-4">Analytics & Reports</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow"><canvas ref={serviceChartRef} /></div>
              <div className="bg-white p-4 rounded-xl shadow"><canvas ref={monthlyChartRef} /></div>
            </div>
            <h3 className="mt-6 text-lg">Top Counsellors by Assignments</h3>
            <div className="bg-white p-4 rounded-xl shadow mt-3"><canvas ref={counsellorChartRef} /></div>
          </section>
        )}
      </main>

      {/* Modals (Assign, Schedule, Schedule Details, Add Counsellor) */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md mt-12 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Assign Counsellor</h3>
              <button onClick={() => setShowAssignModal(false)}>✕</button>
            </div>
            <form onSubmit={handleAssign} className="space-y-3">
              <select value={selectedCounsellor} onChange={e => setSelectedCounsellor(e.target.value)} className="w-full p-2 border rounded">
                <option value="">Select Counsellor</option>
                {availableForCurrentLead().map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
              <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-md">Assign</button>
            </form>
          </div>
        </div>
      )}

      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md mt-12 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Schedule Session</h3>
              <button onClick={() => setShowScheduleModal(false)}>✕</button>
            </div>
            <form onSubmit={handleSchedule} className="space-y-3">
              <input type="date" value={scheduleDate} onChange={e => setScheduleDate(e.target.value)} className="w-full p-2 border rounded"/>
              <input type="time" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)} className="w-full p-2 border rounded"/>
              <input type="text" placeholder="Meeting Link" value={scheduleLink} onChange={e => setScheduleLink(e.target.value)} className="w-full p-2 border rounded"/>
              <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-md">Schedule</button>
            </form>
          </div>
        </div>
      )}

      {showScheduleDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mt-12 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-orange-600">Scheduled Session Details</h3>
              <button onClick={() => setShowScheduleDetailsModal(false)} className="text-slate-500 hover:text-slate-700 text-xl">✕</button>
            </div>
            {getCurrentLeadDetails() && (
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Student Name</p>
                  <p className="text-lg font-semibold text-slate-800">{getCurrentLeadDetails().name}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Counsellor Assigned</p>
                  <p className="text-lg font-semibold text-slate-800">{getCurrentLeadDetails().counsellor}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Service</p>
                  <p className="text-lg font-semibold text-slate-800">{serviceFullName[getCurrentLeadDetails().service]}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-500 mb-1">Date</p>
                    <p className="text-lg font-semibold text-slate-800">{getCurrentLeadDetails().date}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-500 mb-1">Time</p>
                    <p className="text-lg font-semibold text-slate-800">{getCurrentLeadDetails().scheduledTime || 'N/A'}</p>
                  </div>
                </div>
                {getCurrentLeadDetails().meetingLink && (
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-500 mb-1">Meeting Link</p>
                    <a href={getCurrentLeadDetails().meetingLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                      {getCurrentLeadDetails().meetingLink}
                    </a>
                  </div>
                )}
              </div>
            )}
            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowScheduleDetailsModal(false)} className="px-4 py-2 bg-orange-600 text-white rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}

      {showAddCounsellorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md mt-12 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add Counsellor</h3>
              <button onClick={() => setShowAddCounsellorModal(false)}>✕</button>
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Name" value={newCounsellorName} onChange={e => setNewCounsellorName(e.target.value)} className="w-full p-2 border rounded"/>
              <input type="text" placeholder="Expertise (comma separated)" value={newCounsellorExpertise} onChange={e => setNewCounsellorExpertise(e.target.value.split(','))} className="w-full p-2 border rounded"/>
              <button onClick={handleAddCounsellor} className="px-4 py-2 bg-orange-600 text-white rounded-md">Add</button>
            </div>
          </div>
        </div>
      )}

      {showReassignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md mt-12 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Reassign Student</h3>
              <button onClick={() => setShowReassignModal(false)}>✕</button>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-slate-600">Select a new counsellor for this student:</p>
              <select 
                value={selectedCounsellor} 
                onChange={e => setSelectedCounsellor(e.target.value)} 
                className="w-full p-2 border rounded"
              >
                <option value="">Select Counsellor</option>
                {counsellors
                  .filter(c => c.name !== selectedCounsellorName)
                  .map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
              <button onClick={handleReassign} className="px-4 py-2 bg-orange-600 text-white rounded-md">Reassign</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}