import React, { useEffect, useRef, useState } from "react";

const RoomRecord = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  // Start camera
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      })
      .catch(() => alert("Camera access denied"));
  }, []);

  // Start recording
  const startRecording = () => {
    chunksRef.current = [];
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      setVideoURL(URL.createObjectURL(blob));
    };

    mediaRecorder.start();
    setRecording(true);
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  // Submit video (API ready)
  const handleSubmit = async () => {
    const blob = new Blob(chunksRef.current, { type: "video/webm" });

    const formData = new FormData();
    formData.append("video", blob, "interview.webm");

    // 🔹 Example API call
    // await fetch("/api/upload-video", {
    //   method: "POST",
    //   body: formData,
    // });

    alert("Video submitted successfully ✅");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Video Interview</h2>

      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-full rounded mb-4"
      />

      <div className="flex gap-4">
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-orange-600 text-white px-4 py-2 rounded"
          >
            🎥 Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            ⏹ Stop Recording
          </button>
        )}
      </div>

      {videoURL && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Preview</h3>
          <video src={videoURL} controls className="w-full rounded" />

          <button
            onClick={handleSubmit}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
          >
            📤 Submit Video
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomRecord;
