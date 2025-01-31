import React from 'react';
import { MessageSquare, Globe2, ArrowRight } from 'lucide-react';
import './CommunitySection.css';

const CommunitySection = () => {
  return (
    <div className="community-section">
      <div className="container">
        <div className="header">
          <h2 className="title">Join Our Global Community</h2>
          <p className="subtitle">
            Connect with students, educators, and mentors from around the world to share knowledge
            and experiences.
          </p>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <MessageSquare className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Discussion Forums</h3>
                <p className="card-description">
                  Engage in meaningful discussions about education, career paths, and share your learning experiences
                  with peers from across the globe.
                </p>
                <a href="#" className="link">
                  Join the conversation
                  <ArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <Globe2 className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Global Events</h3>
                <p className="card-description">
                  Participate in virtual workshops, webinars, and interactive learning sessions led by
                  industry experts and educators.
                </p>
                <a href="#" className="link">
                  View upcoming events
                  <ArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;