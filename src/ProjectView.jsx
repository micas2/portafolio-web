import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
export default function ProjectView({ project, goBack }) {
  const { language } = useLanguage();
  const [images, setImages]         = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [scale, setScale]           = useState(1);
  const [dragPos, setDragPos]       = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

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
    if (scale > 1) {
      resetLightboxState();
    } else {
      setScale(2);
    }
  };

  const zoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 5));
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
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    // movementX/Y provides the delta since last move, 
    // we divide by scale so the transform units match screen pixels 1:1
    setDragPos(prev => ({
      x: prev.x + e.movementX / scale,
      y: prev.y + e.movementY / scale
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentSrc = lightboxIndex !== null ? flatArr[lightboxIndex] : null;

  return (
    <div className="project-view slide-in section-container">

      <div className="floating-nav">
        <button onClick={goBack} className="btn-back glass-panel">
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>
      </div>

      <div className="project-header">
        <span className="project-role-badge">{project.role}</span>
        <h1 className="project-view-title">{project.title}</h1>
        <p className="project-view-desc">{project.description[language]}</p>

        {project.links && project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="external-link">
                <ExternalLink size={16} /> {link.text}
              </a>
            ))}
          </div>
        )}

        {project.details?.[language] && (
          <ul className="project-view-details">
            {project.details[language].map((d, idx) => <li key={idx}>{d}</li>)}
          </ul>
        )}
      </div>

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

        {images.length === 0 && (
          <p className="empty-state">No hay imágenes disponibles para este proyecto.</p>
        )}

      </div>

      {/* Lightbox */}
      {currentSrc !== null && (
        <div 
          className={`lightbox-overlay${scale > 1 ? ' is-zoomed' : ''}`} 
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
