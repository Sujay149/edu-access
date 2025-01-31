import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";
import SearchSection from "./SearchSection";
import CommunitySection from "./CommunitySection";
import Footer from "./Footer";
import VantaComponent from "./VantaComponent";
import Resources from "./Resources";
import Mentorship from "./Mentorship";
import Community from "./Community";
import About from "./About";
import SignIn from "./SignIn";
import ChatbotComponent from "./ChatbotComponent";

import VideoGallery from "./VideoGallery";
import Apps from './Apps';




const Home = () => (
  <>
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <SearchSection />
    <CommunitySection />
  </>
);

function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videogallery" element={<VideoGallery />} />
           <Route path="/apps" element={<Apps />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chatbotcomponent" element={<ChatbotComponent />} />
          
        </Routes>

        

        <ChatbotComponent/>
        <Footer />
        <VantaComponent />
      </Router>
    </div>
  );
}

export default App;
