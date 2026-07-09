import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

function getLinkIcon(type) {
  const lower = (type || '').toLowerCase();
  if (lower.includes('github')) return <GithubIcon size={18} />;
  return <ExternalLink size={18} />;
}

export default function ProjectCard({ title, description, tags, image, links }) {
  return (
    <div className="project-card fade-in">
      <div className="project-card-image">
        {image && <img src={image} alt={title} loading="lazy" />}
        <div className="project-card-overlay">
          {(links || []).map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.type}
              title={link.type}
            >
              {getLinkIcon(link.type)}
            </a>
          ))}
        </div>
      </div>
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {(tags || []).map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
