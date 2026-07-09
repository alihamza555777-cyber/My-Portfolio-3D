import { X, Play, ExternalLink } from 'lucide-react';

export default function NetflixDetailsModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <div className="netflix-modal-backdrop open" onClick={onClose}>
      <div className="netflix-modal" onClick={(e) => e.stopPropagation()}>
        <button className="netflix-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        
        <div 
          className="netflix-modal-banner"
          style={{ 
            backgroundImage: data.imageUrl ? `url(${data.imageUrl})` : 'linear-gradient(135deg, #1f1f1f 0%, #111111 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="netflix-modal-banner-overlay"></div>
          <div className="netflix-modal-banner-content">
            {data.badge && (
              <div className="billboard-logo">
                <span style={{ color: 'var(--accent-primary)', fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Impact, sans-serif' }}>N</span>
                <span style={{ letterSpacing: '2px', fontSize: '0.75rem', fontWeight: 'bold' }}>{data.badge}</span>
              </div>
            )}
            <h2 className="netflix-modal-title">{data.title}</h2>
            {data.buttons && data.buttons.length > 0 && (
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
                {data.buttons.map((btn, idx) => (
                  <a 
                    key={idx}
                    href={btn.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`netflix-btn ${btn.primary ? 'primary' : 'secondary'}`}
                  >
                    {btn.icon}
                    <span style={{ marginLeft: '6px' }}>{btn.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="netflix-modal-body">
          <div className="netflix-modal-bio">
            {data.subtitle && <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>{data.subtitle}</h3>}
            <div className="netflix-card-hover-meta" style={{ margin: '12px 0', display: 'flex', gap: '12px', alignItems: 'center' }}>
              {data.match && <span className="netflix-card-hover-match">{data.match} Match</span>}
              {data.date && <span style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>{data.date}</span>}
              {data.duration && <span style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>{data.duration}</span>}
            </div>
            <p style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95rem', color: '#e5e5e5' }}>
              {data.desc}
            </p>
          </div>
          
          <div className="netflix-modal-metadata" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.tags && data.tags.length > 0 && (
              <div className="netflix-modal-meta-item">
                <span className="label" style={{ color: '#777777', fontWeight: 'bold', marginRight: '6px' }}>Stack:</span>
                <span className="value" style={{ color: '#ffffff' }}>{data.tags.join(', ')}</span>
              </div>
            )}
            {data.category && (
              <div className="netflix-modal-meta-item">
                <span className="label" style={{ color: '#777777', fontWeight: 'bold', marginRight: '6px' }}>Category:</span>
                <span className="value" style={{ color: '#ffffff' }}>{data.category}</span>
              </div>
            )}
            {data.issuer && (
              <div className="netflix-modal-meta-item">
                <span className="label" style={{ color: '#777777', fontWeight: 'bold', marginRight: '6px' }}>Issuer:</span>
                <span className="value" style={{ color: '#ffffff' }}>{data.issuer}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
