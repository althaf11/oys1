import React from "react";

export default function ResumeBenifits() {
  return (
    <div className="px-6 md:px-20 py-16 space-y-20 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
      {/* For Who It Is Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="md:w-1/3 w-full">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.WrXQay1CZou3ao8MMc3I0AHaEG?pid=Api&P=0&h=180"
            alt="Woman writing resume"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 w-full ">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
            For Who It Is?
          </h2>
          <div className="w-28 h-1 bg-orange-600 mb-6"></div>
          <p className="text-gray-600 mb-6 leading-relaxed bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
            Our CV Writing Service is specially designed for college students
            and fresh graduates who are stepping into the professional world for
            the first time. We understand how challenging it can be to create a
            strong CV when you have limited work experience — that’s where Brain
            Serve steps in. Whether you’re applying for campus placements,
            internships, or your first full-time job, our experts help you
            present your academic achievements, projects, internships, and
            skills in a way that attracts recruiters’ attention.
          </p>
        </div>
      </section>

      {/* Benefits of CV Writing Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
          Benefits of CV Writing
        </h2>
        <div className="w-40 h-1 bg-orange-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow">
          An effectively crafted CV is essential for creating a powerful first
          impression on potential employers. It not only showcases your skills
          and qualifications but also distinguishes you in a crowded job market.
          Here’s how a professional CV writing service can benefit you:
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Professional Presentation
            </h3>
            <p className="text-black-300">
              A well-organized and visually appealing CV conveys a clean,
              organized, and professional look, making a strong impression on
              recruiters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Customized to Your Goals</h3>
            <p className="text-black-300">
              Our service ensures that your CV is customized to align with your
              career objectives and targeted job roles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">ATS-Friendly</h3>
            <p className="text-black-300">
              We craft ATS-friendly resumes optimized for Applicant Tracking
              Systems, ensuring they pass through initial screenings used by
              most employers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Highlight Key Achievements
            </h3>
            <p className="text-black-300">
              We focus on showcasing your most significant accomplishments,
              giving you an edge over other candidates.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Time-Saving</h3>
            <p className="text-black-300">
              Writing a CV can be time-consuming. Our service provides you with
              a top-notch CV, eliminating the stress and allowing you to focus
              on your job search.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
