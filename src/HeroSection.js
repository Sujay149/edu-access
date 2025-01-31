import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="content">
          <h1 className="hero-title">
            Quality Education
            <span className="hero-subtitle">For Everyone, Everywhere</span>
          </h1>
          <p className="hero-description">
            Empowering underserved communities through accessible education, mentorship,
            and personalized learning paths.  Join us in making quality education available to all.
          </p>
          <div className="button-group">
            <button className="btn-primary">
              Get Started
              <ArrowRight className="arrow-icon" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;