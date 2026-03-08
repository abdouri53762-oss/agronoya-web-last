import React, { useEffect, useRef, useState } from 'react';

function LazySection({
  children,
  fallback = null,
  root = null,
  rootMargin = '200px 0px',
  threshold = 0.01,
  minHeight = '200px',
  className = '',
  once = true,
}) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);

          if (once) {
            observer.unobserve(node);
            observer.disconnect();
          }
        } else if (!once) {
          setShouldRender(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return (
    <section ref={containerRef} className={className}>
      {shouldRender ? children : <div style={{ minHeight }}>{fallback}</div>}
    </section>
  );
}

export default LazySection;