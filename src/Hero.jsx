import { useLanguage } from './LanguageContext';
import { translations } from './content';
import { Download, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="home" className="section-container hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Micaela Ozor</h1>
        <h2 className="hero-subtitle">{t.role}</h2>
        <p className="hero-description">{t.description}</p>
        
        <div className="hero-actions">
          <a href="/Micaela_Ozor_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary glass-panel">
            <Download size={20} />
            <span>{t.resume}</span>
          </a>
          <a href="#contact" className="btn-secondary">
            <span>{t.contact}</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
