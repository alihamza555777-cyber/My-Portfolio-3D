import SectionHeading from '../components/SectionHeading';
import {
  Code2, Database, Globe, Cpu, BarChart3,
  Palette, Terminal, GitBranch, Layers, Coffee
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal },
  { name: 'Java', icon: Coffee },
  { name: 'C++', icon: Terminal },
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Layers },
  { name: 'Node.js', icon: Globe },
  { name: 'SQL & Databases', icon: Database },
  { name: 'TradingView / Pine Script', icon: BarChart3 },
  { name: 'HTML & CSS', icon: Palette },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'REST APIs', icon: Cpu },
  { name: 'Assembly (MASM/TASM)', icon: Cpu },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          label="About Me"
          title="Building the Future, One Line at a Time"
          description="I'm a full-stack developer with a passion for creating impactful, high-quality software."
        />

        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrapper fade-in">
            <div className="about-image-card">
              <img
                src="/assets/ali-hamza.jpeg"
                alt="Ali Hamza — Developer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="about-image-decoration"></div>
          </div>

          {/* Text content */}
          <div className="about-text fade-in">
            <h3>
              Developer. <span className="gradient-text">Problem Solver.</span> Creator.
            </h3>
            <p>
              I specialize in building robust, user-centric applications that solve real-world 
              problems. From algorithmic trading strategies to full-stack web apps, I love 
              diving deep into complex challenges and crafting elegant solutions that make 
              a real difference.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, analyzing market 
              data, or working on creative side projects that push the boundaries of what's 
              possible with modern software.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Coding</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map(({ name, icon: Icon }) => (
                <span className="skill-tag" key={name}>
                  <Icon />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
