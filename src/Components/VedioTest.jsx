import React, { useState, useRef, useEffect } from "react";

export default function VideoResumeTest() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [timer, setTimer] = useState(10 * 60); // 10 minutes
  const [timerActive, setTimerActive] = useState(false);

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

  // Timer
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      stopRecording();
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      videoRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);

      recordedChunks.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: "video/mp4" });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
      setTimerActive(true);
      setError("");

    } catch (err) {
      setError("Camera or microphone access denied!");
    }
  };

  const stopRecording = () => {
    if (!recording) return;
    mediaRecorderRef.current.stop();

    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((track) => track.stop());

    setRecording(false);
    setTimerActive(false);
  };

  const submitVideo = () => {
    setSubmitted(true);
    // backend upload logic here
  };

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-center p-10">
        <h2 className="text-3xl font-bold text-orange-600">Video Submitted Successfully 🎉</h2>
        <p className="text-gray-700 mt-2">Our team will evaluate your video and update toppers.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Top Bar Like JEE */}
      <div className="w-full bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <div>
          <h2 className="text-xl font-bold">Video Resume Test</h2>
          <p className="text-sm opacity-90">Conducted by: Operation Yuva Sankalp</p>
        </div>

        <div className="text-lg font-semibold bg-white text-orange-600 px-4 py-2 rounded-lg shadow">
          ⏳ {formatTime(timer)}
        </div>
      </div>

      {/* Instructions */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h3 className="text-xl font-bold text-orange-600">Instructions</h3>
        <ul className="mt-3 text-gray-700 leading-relaxed">
          <li>• You must record a video answering the given prompts.</li>
          <li>• Max time: 10 minutes.</li>
          <li>• Ensure good lighting and clear audio.</li>
          <li>• Once submitted, video cannot be changed.</li>
        </ul>
      </section>

      {/* Recording Section */}
      <div className="max-w-3xl mx-auto px-6">

        <div className="p-6 border rounded-xl bg-orange-50 border-orange-200">
          <h3 className="text-lg font-semibold mb-4 text-orange-600">Record Your Video Resume</h3>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full rounded-lg border border-gray-300"
          ></video>

          {videoURL && (
            <video
              src={videoURL}
              controls
              className="w-full rounded-lg mt-4 border border-gray-300"
            ></video>
          )}

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            {!recording && !videoURL && (
              <button
                onClick={startRecording}
                className="flex-1 bg-orange-600 text-white py-2 rounded-md shadow"
              >
                🎥 Start Recording
              </button>
            )}

            {recording && (
              <button
                onClick={stopRecording}
                className="flex-1 bg-red-600 text-white py-2 rounded-md shadow"
              >
                ⏹ Stop Recording
              </button>
            )}

            {videoURL && (
              <>
                <button
                  onClick={startRecording}
                  className="flex-1 bg-gray-500 text-white py-2 rounded-md shadow"
                >
                  🔄 Retake
                </button>

                <button
                  onClick={submitVideo}
                  className="flex-1 bg-green-600 text-white py-2 rounded-md shadow"
                >
                  📤 Submit
                </button>
              </>
            )}
          </div>
        </div>

      </div>

    </main>
  );
}
