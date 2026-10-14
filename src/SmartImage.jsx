import { useState } from 'react';

export default function SmartImage({ src, alt, className = '', skeletonClassName = '', ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <span className={`img-skeleton ${skeletonClassName}`} aria-hidden="true">
          <span className="img-skeleton-gem" />
        </span>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} img-fade ${loaded ? 'is-loaded' : 'is-loading'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...props}
      />
    </>
  );
}
