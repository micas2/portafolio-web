import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { projects } from './content'; // Add projects import for navigation
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Layout, Type, Box, CheckCircle, Cpu, Layers, Zap, Search, Settings, Rocket } from 'lucide-react';
import galleryMap from './galleryMap.json';
import './ProjectView.css';

// ============================================================
// URL encoder: encodes EACH segment of path individually
// so spaces, +, (, ) all become safe %xx sequences
// ============================================================
function encodePath(folder, src, isThumb = false) {
  const fullPath = `${folder}/${src}`;
  let encoded = fullPath
    .split('/')
    .map(seg => encodeURIComponent(seg))
    .join('/');
  
  if (isThumb && !src.endsWith('.gif') && !src.endsWith('.mp4')) {
    // Thumbnails are WebP in a parallel directory
    encoded = encoded.replace(/\.[^.]+$/, '.webp');
    return `/proyectos-thumbs/${encoded}`;
  }
  return `/proyectos/${encoded}`;
}


// ============================================================
// Category name corrections (folder names → readable labels)
// ============================================================
const CATEGORY_MAP = {
  'storys': 'Stories',
  'story': 'Stories',
  'historias': 'Stories',
  'higthligth': 'Highlights',
  'higthligths': 'Highlights',
  'post': 'Posts',
  'desk': 'Desktop',
  'mobile': 'Mobile',
  'app marco': 'Mockups App',
  'app': 'Vistas App',
  'vistas': 'Vistas App',
  'logo png': 'Logos PNG',
  'logos jpg': 'Logos JPG',
  'manual de logo': 'Manual de Marca',
  'web- landingpage': 'Landing Page',
  'web-app': 'Web App',
  'mail': 'Email Marketing',
  'whatsapp': 'WhatsApp',
  'tutoriales': 'Tutoriales',
  'logo foto perfil': 'Logo & Foto Perfil',
  'branding': 'Branding',
};

function formatCategory(raw) {
  const norm = raw.toLowerCase().trim();
  return CATEGORY_MAP[norm] || raw.charAt(0).toUpperCase() + raw.slice(1);
}

// ============================================================
// Group images: use ONLY first folder level as category.
// Root-level files (no slash) → 'General' bucket.
// Sort so General is always last.
// ============================================================
function groupImages(images) {
  const groups = {};
  images.forEach(img => {
    const slashIdx = img.indexOf('/');
    let category;
    if (slashIdx === -1) {
      category = 'General';
    } else {
      category = formatCategory(img.substring(0, slashIdx));
    }
    if (!groups[category]) groups[category] = [];
    groups[category].push(img);
  });

  // Move 'General' to the end
  const ordered = {};
  Object.keys(groups)
    .filter(k => k !== 'General')
    .forEach(k => { ordered[k] = groups[k]; });
  if (groups['General']) ordered['General'] = groups['General'];
  return ordered;
}

// ============================================================
// Component
// ============================================================
export default function ProjectView({ project, goBack, onOpenProject }) {
  const { language } = useLanguage();
  const [images, setImages]         = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [scale, setScale]           = useState(1);
  const [dragPos, setDragPos]       = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved]     = useState(false);
  const [startPos, setStartPos]     = useState({ x: 0, y: 0 });

  useEffect(() => {
    let imgs = (project.folder && galleryMap[project.folder]) ? [...galleryMap[project.folder]] : [];
    if (project.id === 'hot-travel') {
      imgs = imgs.filter(img => !img.toLowerCase().startsWith('branding'));
    }
    setImages(imgs);
    setLightboxIndex(null);
    resetLightboxState();
    window.scrollTo(0, 0);
  }, [project]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [lightboxIndex]);

  const resetLightboxState = () => {
    setScale(1);
    setDragPos({ x: 0, y: 0 });
    setIsDragging(false);
    setHasMoved(false);
  };

  const grouped = groupImages(images);

  // Flat array for sequential lightbox navigation
  const flatArr = Object.values(grouped).flat();

  const openLightbox = (src) => {
    const idx = flatArr.indexOf(src);
    if (idx !== -1) { setLightboxIndex(idx); resetLightboxState(); }
  };

  const closeLightbox = () => { setLightboxIndex(null); resetLightboxState(); };

  const prevImage = (e) => {
    e.stopPropagation();
    resetLightboxState();
    setLightboxIndex(i => (i === 0 ? flatArr.length - 1 : i - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    resetLightboxState();
    setLightboxIndex(i => (i === flatArr.length - 1 ? 0 : i + 1));
  };

  const handleZoomToggle = (e) => {
    e.stopPropagation();
    if (hasMoved) return; // Prevent zoom reset if we were dragging
    
    if (scale > 1) {
      resetLightboxState();
    } else {
      setScale(2.5); // Slightly higher initial zoom for better detail
    }
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 12)); // Increased max zoom for long feeds
  };

  const zoomOut = (e) => {
    e.stopPropagation();
    const newScale = Math.max(1, scale - 0.5);
    setScale(newScale);
    if (newScale === 1) {
      setDragPos({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    if (e.button !== 0) return; // Only left click
    e.preventDefault(); // CRITICAL: Stop browser's default image dragging
    setIsDragging(true);
    setHasMoved(false);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    
    // Determine if we've moved enough to be considered a "drag" vs a "click"
    if (!hasMoved) {
      const dist = Math.sqrt(Math.pow(e.clientX - startPos.x, 2) + Math.pow(e.clientY - startPos.y, 2));
      if (dist > 5) setHasMoved(true);
    }

    setDragPos(prev => ({
      x: prev.x + e.movementX / scale,
      y: prev.y + e.movementY / scale
    }));
  };

  // Touch support for mobile dragging
  const handleTouchStart = (e) => {
    if (scale <= 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setHasMoved(false);
    setStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || scale <= 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startPos.x;
    const dy = touch.clientY - startPos.y;
    
    if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      setHasMoved(true);
    }

    setDragPos(prev => ({
      x: prev.x + dx / scale,
      y: prev.y + dy / scale
    }));
    setStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentSrc = lightboxIndex !== null ? flatArr[lightboxIndex] : null;

  // Next/Prev Project Navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProj = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProj = projects[currentIndex + 1] || projects[0];

  const caseStudy = project.caseStudy;

  return (
    <div className="project-view slide-in section-container">

      <div className="floating-nav">
        <button onClick={goBack} className="btn-back glass-panel">
          <ArrowLeft size={20} />
          <span>{language === 'es' ? 'Volver al Portafolio' : 'Back to Portfolio'}</span>
        </button>
      </div>

      {/* RICH HERO SECTION */}
      <section className="project-hero-section fade-in">
        <div className="hero-content">
          {caseStudy?.tag && (
            <div className="project-tag-badge glass-panel">
              <span className="dot-blink" />
              {caseStudy.tag[language]}
            </div>
          )}
          <h1 className="project-view-title">{project.title}</h1>
          <p className="project-view-desc">{project.description[language]}</p>
          
          <div className="project-metadata-groups">
            {project.areas && (
              <div className="metadata-group">
                <span className="metadata-label">{language === 'es' ? 'Áreas de Trabajo' : 'Working Areas'}</span>
                <div className="project-skill-tags">
                  {project.areas[language].map((area, idx) => (
                    <span key={idx} className="skill-pill area-tag">{area}</span>
                  ))}
                </div>
              </div>
            )}
            
            {project.techStack && (
              <div className="metadata-group">
                <span className="metadata-label">{language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}</span>
                <div className="project-skill-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="skill-pill tech-tag">
                      <Cpu size={12} className="inline mr-1" /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="project-links mt-8">
              {project.links.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="external-link">
                  <ExternalLink size={16} /> {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Hero Image / Mockup placeholder if no folder, else just a visual */}
        <div className="hero-visual glass-panel">
          <img 
            src={images.length > 0 ? encodePath(project.folder, images[0]) : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"} 
            alt={project.title} 
            className="hero-img" 
          />
          <div className="hero-gradient-overlay" />
        </div>
      </section>

      {/* STRATEGIC WORKFLOW SECTION */}
      {project.workflow && (
        <section className="workflow-section fade-in">
          <div className="workflow-container glass-panel">
            <h3 className="section-label">{language === 'es' ? 'Proceso Estratégico' : 'Strategic Journey'}</h3>
            <div className="workflow-steps">
              {project.workflow.map((item, idx) => (
                <div key={idx} className="workflow-step">
                  <div className="step-icon">
                    {idx === 0 ? <Search size={20} /> : idx === 1 ? <Settings size={20} /> : <Rocket size={20} />}
                    <span className="step-number">{idx + 1}</span>
                  </div>
                  <div className="step-content">
                    <h4>{item.step}</h4>
                    <p>{item[language]}</p>
                  </div>
                  {idx < project.workflow.length - 1 && <div className="step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENTO SUMMARY / ROLE */}

      {caseStudy?.challenge && (
        <section className="bento-summary-section">
          <div className="bento-grid">
            <div className="bento-card main-card glass-panel">
              <h3 className="bento-title">{caseStudy.challenge.title[language]}</h3>
              <p className="bento-text">{caseStudy.challenge.content[language]}</p>
            </div>
            
            <div className="bento-card info-card glass-panel">
              <div className="info-item">
                <h4>{language === 'es' ? 'Mi Rol' : 'My Role'}</h4>
                <p>{caseStudy.roleInfo.role[language]}</p>
              </div>
              <div className="info-item">
                <h4>Timeline</h4>
                <p>{caseStudy.roleInfo.timeline[language]}</p>
              </div>
              <div className="info-item">
                <h4>{language === 'es' ? 'Plataforma' : 'Platform'}</h4>
                <p>{caseStudy.roleInfo.platform[language]}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* NARRATIVE SECTIONS (Process, Design System, etc.) */}
      {caseStudy?.sections?.map((sec, idx) => (
        <section key={idx} className={`narrative-section ${sec.dark ? 'dark-themed' : ''}`}>
          <div className="narrative-container">
            <div className="narrative-text">
              <h2 className="section-subtitle">{sec.title[language]}</h2>
              <p className="section-text-large">{sec.description[language]}</p>
              
              <div className="narrative-items-grid">
                {sec.items.map((item, i) => (
                  <div key={i} className={`narrative-item-card glass-panel ${item.border ? `border-${item.border}` : ''}`}>
                    <div className="item-icon-wrapper">
                      {item.icon === 'type' ? <Type size={20} /> : item.icon === 'box' ? <Box size={20} /> : <Layout size={20} />}
                    </div>
                    <h4>{item.title[language]}</h4>
                    <p>{item.content[language]}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="narrative-visual glass-panel">
              <img src={sec.image} alt={sec.title[language]} className="narrative-img" />
            </div>
          </div>
        </section>
      ))}

      <div className="project-gallery">


        {/* Live Preview iframes */}
        {project.links && project.links.length > 0 && (
          <div className="gallery-section live-preview-section">
            <h2 className="gallery-section-title">Vista en Vivo</h2>
            <div className="live-preview-grid">
              {project.links.map((link, idx) => (
                <div key={idx} className="live-preview-container glass-panel">
                  <div className="live-preview-window-bar">
                    <span className="dot dot-close" />
                    <span className="dot dot-min" />
                    <span className="dot dot-max" />
                    <span className="device-url">{link.url.replace('https://', '')}</span>
                  </div>
                  <iframe src={link.url} title={link.text} className="live-preview-iframe" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category grids */}
        {Object.entries(grouped).map(([cat, imgs]) => {
          if (!imgs.length) return null;
          return (
            <div key={cat} className="gallery-section">
              <h2 className="gallery-section-title">{cat}</h2>
              <div className="thumbnail-grid">
                {imgs.map((src, i) => {
                  const thumbUrl = encodePath(project.folder, src, true);
                  const isVideo = src.endsWith('.mp4');
                  return (
                    <div key={i} className="thumbnail-wrapper glass-panel" onClick={() => openLightbox(src)}>
                      {isVideo
                        ? <video src={encodePath(project.folder, src)} autoPlay loop muted playsInline className="thumbnail-img" />
                        : <img src={thumbUrl} alt={`${cat} ${i + 1}`} className="thumbnail-img" loading="lazy" decoding="async" />
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {images.length === 0 && !caseStudy && (
          <p className="empty-state">No hay imágenes disponibles para este proyecto.</p>
        )}

      </div>

      {/* IMPACT SECTION */}
      {caseStudy?.impact && (
        <section className="impact-section">
          <div className="impact-card glass-panel">
            <h2 className="impact-title">{language === 'es' ? 'El Impacto' : 'The Impact'}</h2>
            <p className="impact-desc">{caseStudy.impact.description[language]}</p>
            
            <div className="impact-stats-grid">
              {caseStudy.impact.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEXT/PREV PROJECT NAVIGATION */}
      <section className="project-nav-footer">
        <button className="nav-footer-btn prev" onClick={() => onOpenProject(prevProj)}>
          <span className="nav-label">{language === 'es' ? 'Proyecto Anterior' : 'Previous Project'}</span>
          <span className="nav-title">
            <ChevronLeft size={16} /> {prevProj.title}
          </span>
        </button>
        <button className="nav-footer-btn next" onClick={() => onOpenProject(nextProj)}>
          <span className="nav-label">{language === 'es' ? 'Siguiente Proyecto' : 'Next Project'}</span>
          <span className="nav-title">
            {nextProj.title} <ChevronRight size={16} />
          </span>
        </button>
      </section>

      {/* Lightbox */}
      {currentSrc !== null && (
        <div 
          className={`lightbox-overlay${scale > 1 ? ' is-zoomed' : ''}`} 
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >

          <div className="lightbox-controls">
            <button className="lightbox-control-btn" onClick={zoomIn} title="Zoom In">+</button>
            <button className="lightbox-control-btn" onClick={zoomOut} title="Zoom Out">-</button>
            <button className="lightbox-control-btn close-btn" onClick={closeLightbox}>
              <X size={22} />
            </button>
          </div>

          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
            <ChevronLeft size={30} />
          </button>

          <div
            className="lightbox-content"
            onClick={handleZoomToggle}
          >
            {currentSrc.endsWith('.mp4')
              ? <video src={encodePath(project.folder, currentSrc)} controls autoPlay className="lightbox-media" />
              : <img 
                  src={encodePath(project.folder, currentSrc)} 
                  alt="Ampliación" 
                  className={`lightbox-media ${scale > 1 ? 'zoomed' : ''} ${isDragging ? 'dragging' : ''}`}
                  style={{ 
                    transform: `translate(${dragPos.x}px, ${dragPos.y}px) scale(${scale})`,
                    cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                  }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  onDragStart={(e) => e.preventDefault()}
                />
            }
          </div>

          <button className="lightbox-nav lightbox-next" onClick={nextImage}>
            <ChevronRight size={30} />
          </button>

        </div>
      )}

    </div>
  );
}
