import React from 'react';

const videos = [
  {
    src: "https://docs.material-tailwind.com/demo.mp4",
    thumbnail: "https://setmycareer.com/img/Testimonial-Thumbnails/xPF-2kKOP1U-min.webp"
  },
  {
    src: "https://docs.material-tailwind.com/demo.mp4",
    thumbnail: "https://setmycareer.com/img/Testimonial-Thumbnails/W-gAC42zsLs-min.webp"
  },
  {
    src: "https://docs.material-tailwind.com/demo.mp4",
    thumbnail: "https://setmycareer.com/img/Testimonial-Thumbnails/Y0DjenFtyC0-min.webp"
  },
  {
    src: "https://docs.material-tailwind.com/demo.mp4",
    thumbnail: "https://setmycareer.com/img/Testimonial-Thumbnails/TBAyvIR7Ayo-min.webp"
  },
  {
    src: "https://docs.material-tailwind.com/demo.mp4",
    thumbnail: "https://setmycareer.com/img/Testimonial-Thumbnails/4_FdhhVk-kY-min.webp"
  },
  {
    src: "https://docs.material-tailwind.com/demo.mp4",
    thumbnail: "https://setmycareer.com/img/Testimonial-Thumbnails/tbayvir7ayo-min.webp"
  },
  
];

const ResumeReviews = () => {
  return (
    <div className="py-8 px-4 md:px-16 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
      <p className="text-xs md:text-2xl font-bold text-orange-600  mb-3 text-center">
        Don't Listen To Us
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600  mb-8 text-center">
        Listen To People Just Like You
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-60 md:h-48 lg:h-80 object-cover"
              controls
              poster={video.thumbnail}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeReviews;
