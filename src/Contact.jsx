import { useLanguage } from './LanguageContext';
import { translations } from './content';
import { Mail, Phone, MapPin, Code, Briefcase } from 'lucide-react';
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
          <a href="https://github.com/micas2" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Code size={24} />
          </a>
          <a href="https://www.linkedin.com/in/micaela-ozor-product-design" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Briefcase size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
