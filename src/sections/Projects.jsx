import { useState, useEffect } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import NetflixRow from '../components/NetflixRow';
import ProjectCard from '../components/ProjectCard';
import NetflixDetailsModal from '../components/NetflixDetailsModal';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (Array.isArray(projectsData)) {
      setProjects(projectsData);
    } else if (projectsData && Array.isArray(projectsData.default)) {
      setProjects(projectsData.default);
    }
  }, []);

  const handleOpenDetails = (project) => {
    const links = project.links || [];
    const githubLink = links.find(l => (l.type || '').toLowerCase().includes('github'))?.url || '#';
    const liveLink = links.find(l => !(l.type || '').toLowerCase().includes('github'))?.url || githubLink;
    
    setSelectedProject({
      title: project.title,
      subtitle: project.subtitle || 'Featured Project',
      desc: project.description,
      imageUrl: project.imageUrl,
      tags: project.tags || [],
      match: `${90 + (project.title.length % 10)}%`,
      date: '2026',
      badge: 'PROJECT',
      buttons: [
        { label: 'Live Demo', link: liveLink, icon: <Play size={16} fill="currentColor" />, primary: true },
        { label: 'GitHub', link: githubLink, icon: <ExternalLink size={16} />, primary: false }
      ]
    });
  };

  return (
    <section id="projects" style={{ overflow: 'visible', padding: '1vw 0' }}>
      <NetflixRow title="Trending Now">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.imageUrl}
            onClick={() => handleOpenDetails(project)}
          />
        ))}
      </NetflixRow>

      <NetflixDetailsModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        data={selectedProject} 
      />
    </section>
  );
}
