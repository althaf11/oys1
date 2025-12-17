import React from "react";
import { Link } from "react-router-dom";

export default function ResumeHero() {
  return (
    <section className="bg-orange-100 text-black py-16 px-6 md:px-20">
      <div className="felx flex-row gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-3 text-orange-600">
            CV Writing
          </h2>
          <div className="w-24 h-1 bg-orange-600 mb-6"></div>
          <p className="bg-orange-100 text-black leading-relaxed mb-8 w-full">
            In today’s highly competitive job market, a well-crafted CV is your
            first and most important opportunity to make a lasting impression.
            At Brain Serve, we understand that every professional journey is
            unique — that’s why our comprehensive CV writing service is designed
            to bring out your strengths, achievements, and potential in the most
            impactful way.
          </p>
          <Link to='/contact' className="bg-orange-600 hover:bg-oarnge-700 px-6 py-3 rounded-md font-semibold">
            Talk With Our Experts
          </Link>
        </div>

        {/* Right Images */}
       
      </div>
    </section>
  );
}
