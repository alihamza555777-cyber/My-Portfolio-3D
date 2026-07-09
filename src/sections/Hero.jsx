import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Animated background orbs */}
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Grid overlay */}
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Ali Hamza</span>
        </h1>

        <p className="hero-subtitle">
          A passionate developer who crafts elegant digital experiences 
          from intelligent trading tools to stunning web interfaces. 
          I turn complex ideas into clean, powerful software.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <Sparkles size={16} />
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

    </section>
  );
}
