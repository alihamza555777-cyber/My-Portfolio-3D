import { Play, Info } from 'lucide-react';

export default function Hero({ onOpenInfo }) {
  // A premium developer workspace visual for the background
  const bgImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80";

  return (
    <section 
      id="hero" 
      className="billboard-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="billboard-overlay"></div>
      
      <div className="billboard-content">
        <div className="billboard-logo">
          <span style={{ color: 'var(--accent-primary)', fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Impact, sans-serif' }}>N</span>
          <span style={{ letterSpacing: '2px', fontSize: '0.75rem', fontWeight: 'bold' }}>ORIGINAL PORTFOLIO</span>
        </div>
        
        <h1 className="billboard-title">Ali Hamza</h1>
        
        <div className="billboard-meta">
          <span className="billboard-match">99% Match</span>
          <span>2026</span>
          <span className="billboard-rating">PG-13</span>
          <span>3+ Years Coding</span>
        </div>
        
        <p className="billboard-synopsis">
          A software engineer focused on building optimized, high-performance applications. 
          By combining low-level systems architecture and robust data structures with modern 
          full-stack web technologies, he turns complex ideas into clean, powerful software.
        </p>
        
        <div className="billboard-actions">
          <a href="#contact" className="netflix-btn primary">
            <Play size={20} fill="currentColor" />
            Hire Me
          </a>
          <button onClick={onOpenInfo} className="netflix-btn secondary">
            <Info size={20} />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
