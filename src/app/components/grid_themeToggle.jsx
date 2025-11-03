"use client";

import { useEffect, useRef } from 'react';

const FadingGridBackground = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        const fadeStart = windowHeight * 0.3; 
        const fadeEnd = documentHeight - windowHeight * 1.3; 
        
        if (scrollPosition > fadeStart && scrollPosition < fadeEnd) {
          const opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
          gridRef.current.style.opacity = Math.max(0, Math.min(1, opacity));
        } else if (scrollPosition <= fadeStart) {
          gridRef.current.style.opacity = 1;
        } else {
          gridRef.current.style.opacity = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={gridRef} className="grid-background" />;
};

export default FadingGridBackground;