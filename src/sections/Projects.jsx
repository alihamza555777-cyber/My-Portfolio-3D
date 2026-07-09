import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const API_BASE = 'http://localhost:3001';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => {
        // Fallback to empty if server is down
        setProjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          description="A curated selection of projects that showcase my skills and passion for building impactful software."
        />

        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No projects yet - check back soon!</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags || []}
                image={project.imageUrl}
                links={project.links || []}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
