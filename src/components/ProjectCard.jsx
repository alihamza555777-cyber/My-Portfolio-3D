export default function ProjectCard({ title, image, onClick }) {
  const matchPercentage = 90 + (title.length % 10);

  return (
    <div className="netflix-card" onClick={onClick}>
      <div className="netflix-card-inner">
        {image && <img className="netflix-card-image" src={image} alt={title} loading="lazy" />}
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
          <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{title}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{matchPercentage}% Match</span>
        </div>
      </div>
    </div>
  );
}
