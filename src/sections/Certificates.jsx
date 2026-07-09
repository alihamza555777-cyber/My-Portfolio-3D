import { useState, useRef, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import StarSprinkles from '../components/StarSprinkles';
import { Award, ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    id: 'cert-1',
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'April 2026',
    url: 'https://www.hackerrank.com/certificates/a24b0e89e608',
    iframeUrl: 'https://www.hackerrank.com/certificates/iframe/a24b0e89e608'
  }
];

export default function Certificates() {
  const [isSprinkling, setIsSprinkling] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsSprinkling(true);
        } else {
          setIsSprinkling(false);
        }
      },
      { threshold: 0.3 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section id="certificates" className="section" ref={sectionRef} style={{ position: 'relative' }}>
      <StarSprinkles trigger={isSprinkling} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionHeading
          label="Achievements"
          title="My Certificates"
          description="A collection of my recent certifications and learned skills."
        />

        <div className="projects-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="project-card fade-in" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Award size={36} color="var(--accent-primary)" />
                <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>{cert.date}</span>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: '0.5rem' }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Issued by: {cert.issuer}</p>
              </div>
              
              {/* Optional embedded iframe can be shown if needed, or simply link to it. */}
              {cert.iframeUrl && (
                <div style={{ position: 'relative', paddingBottom: '70%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                  <iframe 
                    src={cert.iframeUrl} 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    title={cert.title}
                  ></iframe>
                </div>
              )}

              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                View Original <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
