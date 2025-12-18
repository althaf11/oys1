// import React,  from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Paths from "./Components/Paths";

import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./Components/RegistrationPage";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import EventsCalendar from "./Components/EventsCalender";
import Materials from "./Components/Materials";
import ResumeBuilder from "./Components/ResumeBuilder";
import JobAlerts from "./Components/JobAlerts";
import HigherStudies from "./Components/HigherStudies";
import ConferencesPage from "./Components/ConferencePage";
import OverallResume from "./Components/OverallResume";
import Councelling from "./Components/Councelling";
import CrashCourse from "./Components/CrashCrouse";
import About from "./Components/About";
import  Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import EAccessCard from "./Components/EAccessCard";
import Profile from "./Components/Profile";
import PersonalInfo from "./Components/PersonalInfo";
import ProfileEducation from "./Components/ProfileEducation";
import ProfileExperience from "./Components/ProfileExperience";
import ProfileCareer from "./Components/ProfileCareer";
import ProfileNotifications from "./Components/ProfileNotifications";
import ProfileProjects from "./Components/ProfileProjects";
import ProfileComplete from "./Components/ProfileComplete";
 
import ScrollTop from "./Components/ScrollTop";
import ELearning from "./Components/ELearning";
import Box from "./Components/Box";

import AdminCrashCourses from "./Pages/AdminCourse";
import AdminEMaterials from "./Pages/AdminMaterials";
import AdminGallery from "./Pages/AdminGallery";
import  Admincontact  from "./Pages/Admincontact";
import AdminAlertsManager from "./Pages/AdminAlerts";
import AdminEventsPanel from "./Pages/AdminEvent";
import AdminELearningPanel from "./Pages/AdminLearning";
import AdminLearning from "./Pages/AdminLearning";
import AdminResume from "./Pages/AdminResume";
import AdminHome from "./Pages/AdminHome";
import AdminCounselling from "./Pages/AdminCounselling";
import C3Arena from "./Components/C3Arena";

import ResumeVideoRecorder from "./Components/VedioTest";
import Pagination from "./Components/Pagination";
import CareerMapping from "./Components/CareerMapipng";
import Job from "./Components/Job";
import HIgherStudiesGrid from "./Components/HIgherStudiesGrid";
import ITJobsPage from "./Components/ItJobs";
import NonITJobsPage from "./Components/NonItJobs";
import GovernmentJobsPage from "./Components/GovernmentJobPage";
import MTechPage from "./Components/MtechPage";
import AbroadEducationPage from "./Components/AbroadEducation";
import MBAPage from "./Components/MBA";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={  <Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services/e-calendar" element={<EventsCalendar />} />
         <Route path="/conferences/:city" element={<ConferencesPage />} />
        <Route path="/services/e-materials" element={<Materials />} />
        <Route path="/services/resume" element={<OverallResume />} />
        <Route path="/alerts" element={<JobAlerts />} />
        <Route path="/hs" element={<HigherStudies />} />
        <Route path="services/career-counseling" element={<Councelling />} />
        <Route path="/services/crash-courses" element={<CrashCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/e-access" element={<EAccessCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Pagination" element={<Pagination />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/profileeducation" element={<ProfileEducation />} />
        <Route path="/profileexxperience" element={<ProfileExperience />} />
        <Route path="/profilecareergoals" element={<ProfileCareer />} />
        <Route path="/profilenotifications" element={<ProfileNotifications />} />
        <Route path="/profileprojects" element={<ProfileProjects />} />
        <Route path="/profilecomplete" element={<ProfileComplete />} />
        <Route path="/services/e-learning" element={<ELearning />} />
        <Route path="/services/e-c3/Box" element={<Box />} />
        <Route path="/admin/course" element={<AdminCrashCourses />} />
        <Route path="/admin/material" element={<AdminEMaterials />} />
        <Route path="/admin/gallery" element={<AdminGallery />} />
        <Route path="/admin/contact" element={<Admincontact />} />
        <Route path="/admin/alerts" element={<AdminAlertsManager />} />
        <Route path="/admin/event" element={<AdminEventsPanel />} />
        <Route path="/admin/learn" element={<AdminLearning />} />
        <Route path="/admin/resume" element={<AdminResume />} />
        <Route path="/admin/counselling" element={<AdminCounselling/>} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/services/e-c3" element={<C3Arena/>} />
        <Route path="/services/vediotest" element={<ResumeVideoRecorder/>} />
        <Route path="/mapping" element={<CareerMapping/>} />
        <Route path="/career/job" element={<Job/>} />
        <Route path="/career/higher-studies" element={<HIgherStudiesGrid/>} />
        <Route path="/career/job/IT" element={<ITJobsPage/>} />
        <Route path="/career/job/NonIT" element={<NonITJobsPage/>} />
        <Route path="/career/job/gov" element={<GovernmentJobsPage/>} />
        <Route path="/career/hs/mtech" element={<MTechPage/>} />
        <Route path="/career/hs/ae" element={<AbroadEducationPage/>} />
        <Route path="/career/hs/mba" element={<MBAPage/>} />
       

    
      </Routes>
    </Router>
   
                                                                                      
      
      
     
      
    </div>
  );
};

export default App;
