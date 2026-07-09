import { useState, useRef, useEffect } from 'react';
import NetflixRow from '../components/NetflixRow';
import StarSprinkles from '../components/StarSprinkles';
import NetflixDetailsModal from '../components/NetflixDetailsModal';
import { Award, Play } from 'lucide-react';

const certificatesData = [
  {
    id: 'cert-google-ai-essentials',
    title: 'Google AI Essentials Specialization',
    issuer: 'Google',
    date: 'July 1, 2026',
    url: 'https://coursera.org/share/c6e7e20f9f1af410ad097749e1564b62',
    imagePath: '/assets/google-ai-essentials.png'
  },
  {
    id: 'cert-google-stay-ahead-ai',
    title: 'Stay Ahead of the AI Curve',
    issuer: 'Google',
    date: 'July 1, 2026',
    url: 'https://coursera.org/share/cce848292a61becc749052a84df6e1a5',
    imagePath: '/assets/stay-ahead-ai.png'
  },
  {
    id: 'cert-google-prompting',
    title: 'Discover the Art of Prompting',
    issuer: 'Google',
    date: 'June 30, 2026',
    url: 'https://coursera.org/share/f8943422ea3b1335b85e53ba058312d1',
    imagePath: '/assets/prompt-engineering.png'
  },
  {
    id: 'cert-google-ai-responsibly',
    title: 'Use AI Responsibly',
    issuer: 'Google',
    date: 'June 30, 2026',
    url: 'https://coursera.org/share/aaaad9d2a33cea75f90593b815603a37',
    imagePath: '/assets/use-ai-responsibly.png'
  },
  {
    id: 'cert-google-productivity',
    title: 'Maximize Productivity with AI Tools',
    issuer: 'Google',
    date: 'June 26, 2026',
    url: 'https://coursera.org/share/2bd0ea5b4995848694f4c81e97976e28',
    imagePath: '/assets/maximize-productivity.png'
  },
  {
    id: 'cert-google-intro-ai',
    title: 'Introduction to AI',
    issuer: 'Google',
    date: 'June 5, 2026',
    url: 'https://coursera.org/share/3d53f5f2a06e084a7dae707a21f3169f',
    imagePath: '/assets/intro-to-ai.png'
  },
  {
    id: 'cert-1',
    title: 'Software Engineer Intern Certification',
    issuer: 'HackerRank',
    date: 'April 25, 2026',
    url: 'https://www.hackerrank.com/certificates/a24b0e89e608',
    imagePath: '/assets/hackerrank-software-engineer-intern.png'
  }
];

function CertificateCard({ cert, onClick }) {
  return (
    <div className="netflix-card" onClick={onClick}>
      <div className="netflix-card-inner">
        {cert.imagePath ? (
          <img className="netflix-card-image" src={cert.imagePath} alt={cert.title} loading="lazy" />
        ) : (
          <div style={{
            background: 'linear-gradient(135deg, #1f1f1f 0%, #111111 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Award size={32} style={{ color: 'var(--accent-primary)' }} />
          </div>
        )}

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
          padding: '16px 12px 12px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.8)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '70%' }}>
            {cert.title}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
            {cert.issuer}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [isSprinkling, setIsSprinkling] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSprinkling(entry.isIntersecting);
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

  const handleOpenDetails = (cert) => {
    setSelectedCert({
      title: cert.title,
      subtitle: cert.issuer,
      desc: `Official verification credentials indicating mastery of core curricula. Program covers hands-on assignments, validation assessments, and structured developer workflows.`,
      imageUrl: cert.imagePath,
      match: '100%',
      date: cert.date,
      badge: 'CERTIFICATE',
      issuer: cert.issuer,
      buttons: [
        { label: 'Verify Credential', link: cert.url, icon: <Play size={16} fill="currentColor" />, primary: true }
      ]
    });
  };

  return (
    <section id="certificates" style={{ overflow: 'visible', position: 'relative', padding: '1vw 0' }} ref={sectionRef}>
      <StarSprinkles trigger={isSprinkling} />
      
      <NetflixRow title="Awards & Certificates (My List)">
        {certificatesData.map((cert) => (
          <CertificateCard 
            key={cert.id} 
            cert={cert} 
            onClick={() => handleOpenDetails(cert)}
          />
        ))}
      </NetflixRow>

      <NetflixDetailsModal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
        data={selectedCert} 
      />
    </section>
  );
}
