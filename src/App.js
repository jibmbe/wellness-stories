import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CountryPage from "./components/CountryPage";
import WhyChooseUs from "./components/WhyChooseUs";
import WellnessInspiration from "./components/WellnessInspiration";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <WellnessInspiration />
    </div>
  );
};

export default App;