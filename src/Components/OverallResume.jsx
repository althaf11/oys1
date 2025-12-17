import React, { useEffect, useState } from "react";
import ResumeHero from "./ResumeHero";
import ResumeBenifits from "./ResumeBenifits";
import ResumeBuilder from "./ResumeBuilder";
import ResumeReviews from "./ResumeReviews";
import Footer from "./Footer";
// import 'index.css';
const OverallResume = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate initial page load
  //   const timer = setTimeout(() => setLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
  //       <div className="loader"></div>
  //       <p className="mt-4 text-orange-600 font-semibold">Loading Resume Page...</p>
  //     </div>
  //   );
  // }

  return (
    <>
    
<ResumeHero />
      <ResumeBenifits />
      <ResumeBuilder />
      <ResumeReviews/>
      <Footer/>
   
      
    </>
  );
};

export default OverallResume;
