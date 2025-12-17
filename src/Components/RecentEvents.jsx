import React from "react";

const RecentEvents = () => {
  const events = [
    { id: 1, img: "https://t-hub.co/wp-content/uploads/2024/05/DSC05626-scaled.jpg", alt: "Event 1" },
    { id: 2, img: "https://t-hub.co/wp-content/uploads/2024/05/DSC05585-scaled.jpg", alt: "Event 2" },
    { id: 3, img: "https://t-hub.co/wp-content/uploads/2024/05/DSC05879-scaled.jpg", alt: "Event 3" },
    { id: 4, img: "https://t-hub.co/wp-content/uploads/2024/03/IMG_2448-1-scaled.jpg", alt: "Event 4" },
    { id: 5, img: "https://t-hub.co/wp-content/uploads/2024/01/DSC05337-1.jpg", alt: "Event 5" },
    { id: 6, img: "https://t-hub.co/wp-content/uploads/2024/01/6B3A4975-1.jpg", alt: "Event 6" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A Glimpse from our <span className="text-orange-600">Recent Events</span>
        </h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto my-4 rounded"></div>
        <p className="text-gray-600 mb-10">
          Take a look at some of our latest conferences, panels, and innovation hubs.
        </p>

        {/* Grid of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.img}
                alt={event.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
