import { useLanguage } from './LanguageContext';
import { translations, experience } from './content';
import './Experience.css';

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">{t.title}</h2>
      
      <div className="timeline">
        {experience.map((item, index) => (
          <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content glass-panel">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-company">{item.company}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
