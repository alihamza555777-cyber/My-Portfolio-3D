import { useState } from 'react';
import { X, Play } from 'lucide-react';
import NetflixRow from '../components/NetflixRow';
import NetflixDetailsModal from '../components/NetflixDetailsModal';
import {
  Code2, Database, Globe, Cpu, BarChart3,
  Palette, Terminal, GitBranch, Layers, Coffee,
  Smartphone, Sparkles
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, match: '98%', category: 'Data & Scripting', desc: 'Used for machine learning, data analysis, prop firm calculations, and trading tool backend integration.' },
  { name: 'JavaScript', icon: Code2, match: '96%', category: 'Front-End', desc: 'Core language for building interactive web architectures, React interfaces, and full-stack applications.' },
  { name: 'React', icon: Layers, match: '95%', category: 'UI Framework', desc: 'Primary library used to craft pixel-perfect client portals, responsive states, and this very portfolio theme.' },
  { name: 'Node.js', icon: Globe, match: '92%', category: 'Back-End', desc: 'Powering secure APIs, database connectors, and express microservices for trade automation tools.' },
  { name: 'Java', icon: Coffee, match: '94%', category: 'Low-Level & Desktop', desc: 'Built robust systems, Object-Oriented patterns, and GUI projects like the Hotel Management System.' },
  { name: 'Android App Dev', icon: Smartphone, match: '94%', category: 'Mobile Dev', desc: 'Developing robust Android applications with clean architectures, Kotlin, and modern UI frameworks like Flutter.' },
  { name: 'Google AI Studio', icon: Sparkles, match: '96%', category: 'AI & LLMs', desc: 'Integrating Gemini API, configuring parameters, tuning system instructions, and prototyping models in AI Studio.' },
  { name: 'Pine Script', icon: BarChart3, match: '98%', category: 'Finance', desc: 'Writing SMC (Smart Money Concepts) trading indicators, backtesting strategies, and alerting tools on TradingView.' },
  { name: 'SQL & Databases', icon: Database, match: '90%', category: 'Data Store', desc: 'Designing optimized relational schemas, indexes, and queries in PostgreSQL and MySQL databases.' },
  { name: 'Git & GitHub', icon: GitBranch, match: '95%', category: 'DevOps', desc: 'Version control, open source contributions, automated tasks, and team deployment pipelines.' },
  { name: 'REST APIs', icon: Cpu, match: '93%', category: 'Integration', desc: 'Connecting front-end applications with secure endpoints, Prop firm configs, and real-time market data.' },
  { name: 'C++', icon: Terminal, match: '88%', category: 'Low-Level', desc: 'Studied low-level programming concepts, memory layout structures, and OOP.' },
  { name: 'Assembly', icon: Cpu, match: '85%', category: 'Low-Level', desc: 'x86 MASM/TASM architecture, understanding registry mapping, interrupts, and hardware interfaces.' }
];

function SkillCard({ skill, onClick }) {
  const Icon = skill.icon;

  return (
    <div className="netflix-card" onClick={onClick}>
      <div className="netflix-card-inner" style={{
        background: 'linear-gradient(135deg, #1f1f1f 0%, #111111 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <Icon size={32} style={{ color: 'var(--accent-primary)' }} />
        <span style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>{skill.name}</span>
      </div>
    </div>
  );
}

export default function About({ isInfoOpen, onCloseInfo }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleOpenSkill = (skill) => {
    setSelectedSkill({
      title: skill.name,
      subtitle: skill.category,
      desc: skill.desc,
      tags: [skill.category],
      match: skill.match,
      badge: 'SKILL',
      category: skill.category,
      buttons: [
        { label: 'View Related Projects', link: '#projects', icon: <Play size={16} fill="currentColor" />, primary: true }
      ]
    });
  };

  return (
    <>
      {/* Skills Row */}
      <section id="skills" style={{ overflow: 'visible', padding: '1vw 0' }}>
        <NetflixRow title="Critically Acclaimed Skills">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              skill={skill} 
              onClick={() => handleOpenSkill(skill)}
            />
          ))}
        </NetflixRow>
      </section>

      {/* Reusable Skill details modal */}
      <NetflixDetailsModal 
        isOpen={!!selectedSkill} 
        onClose={() => setSelectedSkill(null)} 
        data={selectedSkill} 
      />

      {/* Netflix detailed bio modal overlay */}
      <div className={`netflix-modal-backdrop ${isInfoOpen ? 'open' : ''}`} onClick={onCloseInfo}>
        <div className="netflix-modal" onClick={(e) => e.stopPropagation()}>
          <button className="netflix-modal-close" onClick={onCloseInfo} aria-label="Close modal">
            <X size={20} />
          </button>
          
          <div 
            className="netflix-modal-banner"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80)` }}
          >
            <div className="netflix-modal-banner-overlay"></div>
            <div className="netflix-modal-banner-content">
              <div className="billboard-logo">
                <span style={{ color: 'var(--accent-primary)', fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Impact, sans-serif' }}>N</span>
                <span style={{ letterSpacing: '2px', fontSize: '0.75rem', fontWeight: 'bold' }}>ORIGINAL BIO</span>
              </div>
              <h2 className="netflix-modal-title">Ali Hamza</h2>
              <a href="#contact" onClick={onCloseInfo} className="netflix-btn primary">
                <Play size={18} fill="currentColor" />
                Contact Info
              </a>
            </div>
          </div>
          
          <div className="netflix-modal-body">
            <div className="netflix-modal-bio">
              <h3>Developer. Problem Solver. Creator.</h3>
              <p style={{ marginTop: '16px' }}>
                I am a Software Engineering student focused on building optimized, high-performance applications.
                By combining low-level systems architecture and robust data structures (x86 Assembly, DSA, Java)
                with modern full-stack web technologies (Next.js, FastAPI, Ubuntu Linux), I develop clean,
                developer-centric solutions.
              </p>
              <p>
                Recently, I integrated modern Google-certified AI methodologies and prompt engineering workflows
                into my engineering practices, enabling rapid prototyping, structured decision-making, and robust
                system optimization across key projects like the <strong>Risk Management Tool</strong> and <strong>Hotel Management System</strong>.
              </p>
            </div>
            
            <div className="netflix-modal-metadata">
              <div className="netflix-modal-meta-item">
                <span className="label">Cast:</span>
                <span className="value">Ali Hamza (Self)</span>
              </div>
              <div className="netflix-modal-meta-item">
                <span className="label">Genres:</span>
                <span className="value">Software Engineering, Algorithmic Trading, Web Apps</span>
              </div>
              <div className="netflix-modal-meta-item">
                <span className="label">Stats:</span>
                <span className="value">10+ Projects Built • 3+ Years Coding • 5+ Major Tech Stack Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
