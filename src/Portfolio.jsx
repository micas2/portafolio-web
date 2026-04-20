import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations, projects } from './content';
import { ArrowRight } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio({ onOpenProject }) {
  const { language } = useLanguage();
  const t = translations[language].work;
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">{t.title}</h2>
      
      <div className="portfolio-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {t.filters.all}
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          {t.filters.web}
        </button>
        <button 
          className={`filter-btn ${filter === 'social' ? 'active' : ''}`}
          onClick={() => setFilter('social')}
        >
          {t.filters.social}
        </button>
      </div>

      <div className={`portfolio-grid ${filter}`}>
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card glass-panel" onClick={() => onOpenProject(project)} style={{ cursor: 'pointer' }}>
            <div className="project-content">
              <span className="project-role">{project.role}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description[language]}</p>
            </div>
            {project.folder && (
              <div className="project-link" title="Ver Proyecto">
                <ArrowRight size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
