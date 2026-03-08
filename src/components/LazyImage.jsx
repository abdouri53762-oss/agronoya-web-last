import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/placeholder.jpg',
  loadingClassName = 'loading-skeleton',
  errorFallback = '/images/error-fallback.jpg',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(false);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder pendant le chargement */}
      {!isLoaded && !isError && (
        <div 
          className={`absolute inset-0 ${loadingClassName}`}
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Image principale */}
      {isInView && (
        <img
          src={isError ? errorFallback : src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            transition-opacity duration-300 ease-in-out
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${isError ? 'filter grayscale' : ''}
            w-full h-full object-cover
          `}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {/* Indicateur de chargement */}
      {!isLoaded && !isError && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-agronoya-primary"></div>
        </div>
      )}
      
      {/* Message d'erreur */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-2 text-sm">Image non disponible</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

