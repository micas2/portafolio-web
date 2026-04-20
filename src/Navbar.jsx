import { useLanguage } from './LanguageContext';
import { translations } from './content';
import { Globe } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">
        <svg width="30" height="33" viewBox="0 0 100 110" fill="none" stroke="#DCA4A6" strokeWidth="5.5" strokeLinejoin="round" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
          <polygon points="28,14 72,14 92,44 50,98 8,44" />
        </svg>
      </div>
      <div className="nav-links">
        <a href="#home">{t.home}</a>
        <a href="#portfolio">{t.work}</a>
        <a href="#experience">{t.experience}</a>
        <a href="#contact">{t.contact}</a>
      </div>
      <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle Language">
        <Globe size={20} />
        <span>{language.toUpperCase()}</span>
      </button>
    </nav>
  );
}
