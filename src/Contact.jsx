import { useLanguage } from './LanguageContext';
import { translations } from './content';
import { Mail, Phone, MapPin, Code, Briefcase, PenTool } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="section-container">
      <div className="contact-wrapper glass-panel">
        <h2 className="section-title">{t.title}</h2>
        <p className="contact-desc">{t.description}</p>
        
        <div className="contact-info">
          <a href={`mailto:${t.email}`} className="contact-item">
            <Mail size={24} />
            <span>{t.email}</span>
          </a>
          <div className="contact-item">
            <Phone size={24} />
            <span>{t.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={24} />
            <span>{t.location}</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Code size={24} />
          </a>
          <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Briefcase size={24} />
          </a>
          <a href="https://figma.com/@tu-figma" target="_blank" rel="noopener noreferrer" className="social-icon">
            <PenTool size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
