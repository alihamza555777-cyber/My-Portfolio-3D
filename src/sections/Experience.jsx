import { useState } from 'react';
import { Play } from 'lucide-react';
import NetflixRow from '../components/NetflixRow';
import NetflixDetailsModal from '../components/NetflixDetailsModal';

const experiences = [
  {
    id: 'exp-1',
    role: 'Software Engineer Intern',
    company: 'HackerRank',
    duration: 'April 2026 - Present',
    progress: 80,
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    desc: 'Assisting in developing automated coding testing environments, debugging MASM assembly platforms, and analyzing algorithms.',
    tags: ['React', 'Node.js', 'Low-Level Scripting']
  },
  {
    id: 'exp-2',
    role: 'Algorithmic Trader & Developer',
    company: 'Freelance & Trading Systems',
    duration: 'Jan 2024 - Present',
    progress: 95,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    desc: 'Created Smart Money Concept (SMC) backtesting workflows and automated order execution scripts in Pine Script and Python.',
    tags: ['Pine Script', 'Python', 'TradingView API']
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Developer',
    company: 'Self-Employed / Open Source',
    duration: 'June 2023 - Present',
    progress: 70,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    desc: 'Crafted web platforms leveraging React, FastAPI, and Next.js, and structured secure configurations on Ubuntu Linux systems.',
    tags: ['Next.js', 'FastAPI', 'Ubuntu Server']
  }
];

function ExperienceCard({ exp, onClick }) {
  return (
    <div className="netflix-card" onClick={onClick}>
      <div className="netflix-card-inner">
        <img className="netflix-card-image" src={exp.imageUrl} alt={exp.role} loading="lazy" />
        
        {/* Progress bar inside the card */}
        <div className="netflix-progress-bar-container">
          <div className="netflix-progress-bar" style={{ width: `${exp.progress}%` }}></div>
        </div>

        {/* Text details overlay strip */}
        <div style={{
          position: 'absolute',
          bottom: '4px',
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
          padding: '16px 12px 8px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            {exp.role}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
            {exp.progress}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const handleOpenDetails = (exp) => {
    setSelectedExp({
      title: exp.role,
      subtitle: exp.company,
      desc: exp.desc,
      imageUrl: exp.imageUrl,
      tags: exp.tags,
      match: `${exp.progress}%`,
      duration: exp.duration,
      badge: 'EXPERIENCE',
      buttons: [
        { label: 'Connect With Me', link: '#contact', icon: <Play size={16} fill="currentColor" />, primary: true }
      ]
    });
  };

  return (
    <section id="experience" style={{ overflow: 'visible', padding: '1vw 0' }}>
      <NetflixRow title="Continue Watching for Ali Hamza">
        {experiences.map((exp) => (
          <ExperienceCard 
            key={exp.id} 
            exp={exp} 
            onClick={() => handleOpenDetails(exp)}
          />
        ))}
      </NetflixRow>

      <NetflixDetailsModal 
        isOpen={!!selectedExp} 
        onClose={() => setSelectedExp(null)} 
        data={selectedExp} 
      />
    </section>
  );
}
