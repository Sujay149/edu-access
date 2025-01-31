import React from 'react';
import { BookOpenCheck, Users, Target, ArrowRight } from 'lucide-react';
import './FeaturesSection.css';


const FeaturesSection=()=>{

  return (
    <div className="card-container">
          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <BookOpenCheck className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Resources Hub</h3>
                <p className="card-description">
                  "Access high-quality educational materials, courses, and study guides tailored to your learning needs."
                </p>
                <a href="/resources" className="link">
                  LEARN MORE
                  <ArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <Target className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Mentorship</h3>
                <p className="card-description">
                  "Connect with experienced mentors who provide guidance and support throughout your educational journey."
                </p>
                <a href="/mentorship" className="link">
                  LEARN MORE
                  <ArrowRight className="arrow" />
                </a>
              </div>
             
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <Users className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Learning paths</h3>
                <p className="card-description">
                  "Follow personalized learning experiences designed to help you achieve your educational goals."
                </p>
                <a href="/about" className="link">
                  LEARN MORE
                  <ArrowRight className="arrow" />
                </a>
              </div>
             
            </div>
          </div>

        
        </div>
  );
}

export default FeaturesSection;
