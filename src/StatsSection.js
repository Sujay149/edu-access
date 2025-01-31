import React, { useState, useEffect } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    startups: 0,
    fundingRaised: 0,
    programs: 0,
    valuePartners: 0,
    events: 0,
    corporateEngagements: 0,
    internationalConnects: 0,
    mentors: 0,
  });

  useEffect(() => {
    const animateNumbers = (targetValue, key) => {
      let count = 0;
      const step = Math.ceil(targetValue / 80);
      const interval = setInterval(() => {
        if (count < targetValue) {
          count += step;
          if (count > targetValue) count = targetValue;
          setCounts((prevCounts) => ({ ...prevCounts, [key]: count }));
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    animateNumbers(50 , 'Students');
    animateNumbers(1000, 'Cources');
    animateNumbers(200, 'Mentors');
    animateNumbers(90, 'SuccessRate');
    animateNumbers(22, 'events');
    animateNumbers(1222, 'corporateEngagements');
    animateNumbers(400, 'internationalConnects');
    animateNumbers(2394, 'mentors');
  }, []);

  return (
    <div className="stats-section">
      <div className="container">
        <div className="grid">
          <div className="stat-card">
            <div className="stat-value">{counts.Students}k +</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.Cources}+</div>
            <div className="stat-label">Cources</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.Mentors}+</div>
            <div className="stat-label">Mentors</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.SuccessRate}%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.events}</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.corporateEngagements}+</div>
            <div className="stat-label">Corporate Engagements</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.internationalConnects}+</div>
            <div className="stat-label">International Connects</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.mentors}+</div>
            <div className="stat-label">Mentors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
