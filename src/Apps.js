import React, { useState } from 'react';
import { MapPin, Clock, Calendar, DollarSign, Briefcase, ChevronRight } from 'lucide-react';
import './Apps.css';

const roadmaps = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Academy",
    location: "Remote",
    duration: "6 Months",
    startDate: "Starts Immediately",
    salary: "₹40,000 /month",
    type: "Full-time",
    postedAt: "2 days ago",
    isActive: true,
    thumbnail: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=500&auto=format",
    description: "Complete roadmap to become a frontend developer, covering HTML, CSS, JavaScript, React, and more.",
    requirements: [
      "Basic understanding of web technologies",
      "Dedication to learn 4-5 hours daily",
      "Computer with stable internet connection"
    ]
  },
  {
    id: 2,
    title: "Data Science",
    company: "Data Institute",
    location: "Hybrid",
    duration: "8 Months",
    startDate: "Starts Next Week",
    salary: "₹50,000 /month",
    type: "Part-time",
    postedAt: "3 days ago",
    isActive: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format",
    description: "Comprehensive data science roadmap covering Python, Statistics, Machine Learning, and Deep Learning.",
    requirements: [
      "Basic Python programming knowledge",
      "Understanding of mathematics",
      "Minimum 3 hours daily commitment"
    ]
  }
];

function Apps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const RoadmapCard = ({ roadmap }) => (
    <div className="roadmap-card" onClick={() => setSelectedRoadmap(roadmap)}>
      <div className="card-header">
        {roadmap.isActive && <span className="actively-hiring">Actively hiring</span>}
        <img src={roadmap.thumbnail} alt={roadmap.title} className="thumbnail" />
      </div>
      
      <div className="card-content">
        <h2 className="title">{roadmap.title}</h2>
        <h3 className="company">{roadmap.company}</h3>
        
        <div className="details">
          <div className="detail-item">
            <MapPin size={18} />
            <span>{roadmap.location}</span>
          </div>
          
          <div className="detail-item">
            <Clock size={18} />
            <span>{roadmap.startDate}</span>
          </div>
          
          <div className="detail-item">
            <Calendar size={18} />
            <span>{roadmap.duration}</span>
          </div>
          
          <div className="detail-item">
            <DollarSign size={18} />
            <span>{roadmap.salary}</span>
          </div>
        </div>
        
        <div className="card-footer">
          <div className="tags">
            <span className="tag">{roadmap.type}</span>
            <span className="posted-at">{roadmap.postedAt}</span>
          </div>
          <div className="actions">
            <button className="view-details">
              View details
              <ChevronRight size={16} />
            </button>
            <button className="apply-now">Apply now</button>
          </div>
        </div>
      </div>
    </div>
  );

  const RoadmapDetails = ({ roadmap, onClose }) => (
    <div className="roadmap-details">
      <button className="close-button" onClick={onClose}>×</button>
      
      <div className="details-header">
        <img src={roadmap.thumbnail} alt={roadmap.title} />
        <div className="header-content">
          <h2>{roadmap.title}</h2>
          <h3>{roadmap.company}</h3>
        </div>
      </div>
      
      <div className="details-content">
        <div className="info-grid">
          <div className="info-item">
            <MapPin size={20} />
            <div>
              <h4>Location</h4>
              <p>{roadmap.location}</p>
            </div>
          </div>
          
          <div className="info-item">
            <Clock size={20} />
            <div>
              <h4>Start Date</h4>
              <p>{roadmap.startDate}</p>
            </div>
          </div>
          
          <div className="info-item">
            <Calendar size={20} />
            <div>
              <h4>Duration</h4>
              <p>{roadmap.duration}</p>
            </div>
          </div>
          
          <div className="info-item">
            <DollarSign size={20} />
            <div>
              <h4>Stipend</h4>
              <p>{roadmap.salary}</p>
            </div>
          </div>
          
          <div className="info-item">
            <Briefcase size={20} />
            <div>
              <h4>Type</h4>
              <p>{roadmap.type}</p>
            </div>
          </div>
        </div>
        
        <div className="description">
          <h3>About This Roadmap</h3>
          <p>{roadmap.description}</p>
        </div>
        
        <div className="requirements">
          <h3>Requirements</h3>
          <ul>
            {roadmap.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );

  return (
    <div className="app">
      <header>
        <h1>Learning Roadmaps</h1>
      </header>
      
      <main>
        {selectedRoadmap ? (
          <RoadmapDetails 
            roadmap={selectedRoadmap} 
            onClose={() => setSelectedRoadmap(null)} 
          />
        ) : (
          <div className="roadmap-grid">
            {roadmaps.map(roadmap => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Apps;