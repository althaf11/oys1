import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Dummy data (replace with API later)
const conferencesData = {
  bangalore: [
    {
      date: "18 Sep",
      title:
        "International Research Conference on Covid-19 and Its Impact on Mental Health (IRCCIMH)",
      venue: "Bangalore, India",
      Organizers: "Tech event sites",
      mode: "Offline",
    },
    {
      date: "18 Sep",
      title:
        "International Conference on Latest Research on Corona Virus and its Vaccine (ICRCVV)",
      venue: "Bangalore, India",
      Organizers: "Brave event Holders",
      mode: "Online",
    },
    {
      date: "18 Sep",
      title:
        "Research International Conference on Medical, Medicine and Health Science (RICMMHS)",
      venue: "Bangalore, India",
      Organizers: "IIT Kanpoor",
      mode: "Offline",
    },
    {
      date: "18 Sep",
      title:
        "International Research Conference on Science Technology, Engineering and Management (IRCSTEM)",
      venue: "Bangalore, India",
      Organizers: "Capital Ventures",
      mode: "Offline",
    },
  ],
  hyderabad: [
    {
      date: "20 Sep",
      title: "International AI & ML Research Summit (IAMLRS)",
      venue: "Hyderabad, India",
      Organizers: "Capital Ventures",
      mode: "Offline",
    },
    {
      date: "22 Sep",
      title: "International Blockchain Technology Conference (IBTC)",
      venue: "Hyderabad, India",
      Organizers: "IIT Madras",
      mode: "Online",
    },
  ],
  chennai: [
    {
      date: "20 Sep",
      title: "International AI & ML Research Summit (IAMLRS)",
      venue: "Chennai, India",
      Organizers: "NIT Warangal",
      mode: "Offline",
    },
    {
      date: "22 Sep",
      title: "International Blockchain Technology Conference (IBTC)",
      venue: "Chennai, India",
      Organizers: "SRM",
      mode: "Online",
    },
  ],
};

const ConferencesPage = () => {
  const { city } = useParams();
  const cityConferences = conferencesData[city] || [];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter conferences by title OR organizer
  const filteredConferences = cityConferences.filter(
    (conf) =>
      conf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conf.Organizers.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        List of Conferences in{" "}
        <span className="text-orange-500 capitalize">{city}</span> 2025
      </h1>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by conference name or organizer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Conference List</th>
              <th className="px-4 py-2 text-left">Venue</th>
              <th className="px-4 py-2 text-left">Organizers</th>
              <th className="px-4 py-2 text-left">Mode</th>
            </tr>
          </thead>
          <tbody>
            {filteredConferences.length > 0 ? (
              filteredConferences.map((conf, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">{conf.date}</td>
                  <td className="px-4 py-2 text-orange-600 cursor-pointer hover:underline">
                    {conf.title}
                  </td>
                  <td className="px-4 py-2 text-orange-500">{conf.venue}</td>
                  <td className="px-4 py-2 text-orange-500">
                    {conf.Organizers}
                  </td>
                  <td className="px-4 py-2 text-orange-500">{conf.mode}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No conferences found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConferencesPage;
