import React from 'react';

const ActionButtons = ({ buttons }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 sticky top-4 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
      {buttons.map((btn, idx) => (
        <a
          key={idx}
          href={btn.route}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium text-sm no-underline"
        >
          {btn.icon}
          <span className="hidden sm:inline">{btn.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;