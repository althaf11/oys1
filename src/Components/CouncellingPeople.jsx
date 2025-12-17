import React from "react";

const testimonials = [
  {
    name: "Kaustav",
    type: "Working Professional",
    videoLink: "#",
    bgColor: "bg-purple-500",
    text: "I'm Kaustav, with a background in mechanical engineering and business design. Amidst COVID-19 uncertainty, I sought a fulfilling career path and turned to Brain Serve for personalized guidance. Through insightful sessions, I discovered my strengths in people management and communication, aligning my career path with my passions and skills.",
    image: "https://via.placeholder.com/100", // replace with actual image
  },
  {
    name: "Veena",
    type: "Career Restart",
    videoLink: "#",
    bgColor: "bg-blue-500",
    text: "As a professional with over 10 years’ experience, I faced career confusion after a maternity break. Brain Serve guided me with personalized sessions and assessments, revealing my strengths and career options. Their support provided clarity without pressure, aligning with my aspirations.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Vaishnavi Bhanupriya",
    type: "Student",
    videoLink: "#",
    bgColor: "bg-green-600",
    text: "I'm Vaishnavi Bhanupriya, and I'd like to share my transformative journey with Brain Serve after completing my Class 12 exams in PCB and Psychology. Seeking clarity on my interests and career path, I found the experience with Brain Serve incredibly satisfying and insightful.",
    image: "https://via.placeholder.com/100",
  },
];

const CouncellingPeople = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-orange-600 font-bold text-3xl uppercase">Testimonials</h2>
      <h1 className="text-xl font-bold mt-2 text-orange-600">
        Our Clients Vouch for Us as <br /> <span className="text-black">India's Best</span>
      </h1>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-orange-600 text-white w-full max-w-sm rounded-xl shadow-lg overflow-hidden relative"
          >
            <div className="text-sm text-white absolute top-4 left-4 bg-black bg-opacity-70 px-2 py-1 rounded">
              {t.type}
            </div>
            <div className="p-6 flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-white -mt-16 mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-sm text-black mb-6">{t.text}</p>
              <a
                href={t.videoLink}
                className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold transition hover:bg-gray-100"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouncellingPeople;
