import React from "react";
import Box from "./Box"; // <-- your LIVE component
import RoomTest from "./RoomTest";
import RoomRecord from "./RoomRecord";


export default function Room({ feature }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow p-4 flex items-center">
        <button
          onClick={() => window.history.back()}
          className="text-orange-600 font-semibold"
        >
          ← Back
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {feature === "test" && <RoomTest />}
        {feature === "video" && <RoomRecord />}
        {feature === "live" && <Box />} {/* ✅ YOUR LIVE PAGE */}
      </div>
    </div>
  );
}
