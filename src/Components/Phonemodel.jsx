import React, { useState } from "react";
import { Phone } from "lucide-react";

const PhoneModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 📞 Phone Icon in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition rounded-xl
                   dark:text-gray-200 dark:hover:text-orange-400"
      >
       <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 dark:text-gray-200" />

        <span className="hidden md:inline text-gray-700 hover:text-orange-600 
                         dark:text-gray-200 dark:hover:text-orange-400">
          Toll Free
        </span>
      </button>

      {/* 🌫️ Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 animate-fadeIn mt-80"
          onClick={() => setIsOpen(false)}
        >
          {/* 💬 Modal Content */}
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-[90%] max-w-sm text-center animate-scaleUp
                       border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Need Assistance?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm">
              Our team is here to help you with any questions or support you need.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="tel:+919876543210"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition"
              >
                WhatsApp
              </a>
            </div>

            {/* Info Section */}
            <div className="text-gray-700 dark:text-gray-300 text-sm text-left">
              <p className="font-semibold text-center text-orange-600 dark:text-orange-400 mb-2">
                We can help you with:
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Career guidance & mentorship</li>
                <li>Exam registration or mock test queries</li>
                <li>Technical assistance or portal access</li>
              </ul>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✨ Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
          .animate-scaleUp { animation: scaleUp 0.25s ease-out; }
        `}
      </style>
    </>
  );
};

export default PhoneModal;
