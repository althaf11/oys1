import React from "react";

const CouncellingDetail = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-orange-600">
        Is This Service Right for You?
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
        Our "Discuss Your Dream Career" service is personalized for individuals
        who have a specific career path in mind but are seeking professional
        guidance and insight. This service is particularly beneficial for:
      </p>

      {/* Three Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img
            src="/images/girl.png"
            alt="Reassurance"
            className="h-32 mx-auto mb-4"
          />
          <h3 className="font-bold text-lg">Those Seeking Reassurance</h3>
          <p className="text-gray-600 text-sm mt-2">
            If you’ve already chosen a career path but want confirmation that
            you’re making the right decision, our service provides valuable
            reassurance through expert analysis and personalized discussions.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img
            src="/images/boy.png"
            alt="Career Prospects"
            className="h-32 mx-auto mb-4 "
          />
          <h3 className="font-bold text-lg">Individuals Exploring Prospects</h3>
          <p className="text-gray-600 text-sm mt-2">
            For those curious about the future of their field, we provide
            insights into job market trends, growth potential, and opportunities
            ahead.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <img
            src="/images/resume.png"
            alt="Eligibility"
            className="h-32 mx-auto mb-4"
          />
          <h3 className="font-bold text-lg">Researching Eligibility</h3>
          <p className="text-gray-600 text-sm mt-2">
            We explain the educational prerequisites, certifications, and skills
            required for your career choice so you understand the path clearly.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-20 space-y-16">
        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/consultation.png" alt="Consultation" className="rounded-lg h-60" />
          <div>
            <span className="text-orange-600  font-semibold">Step-1</span>
            <h3 className="text-xl font-bold  mt-2">Initial Consultation</h3>
            <p className="text-gray-600 mt-2">
              A one-on-one consultation with an experienced counselor to explore
              your dream career, understand your goals, and assess your skills
              and qualifications.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-orange-600 font-semibold">Step-2</span>
            <h3 className="text-xl font-bold mt-2">Career Roadmap</h3>
            <p className="text-gray-600 mt-2">
              We create a personalized career roadmap with recommended
              education, certifications, internships, and a practical step-by-step guide.
            </p>
          </div>
          <img src="/images/career-path.png" alt="Roadmap" className="rounded-lg h-60" />
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/customer-service.png" alt="Support" className="rounded-lg h-60" />
          <div>
            <span className="text-orange-600 font-semibold">Step-3</span>
            <h3 className="text-xl font-bold mt-2">Ongoing Support</h3>
            <p className="text-gray-600 mt-2">
              We provide continuous mentorship, updates, and regular check-ins
              to ensure you stay on track towards your dream career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncellingDetail;
