import React, { useState, useEffect, useRef } from 'react';

const DynamicNumber = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl text-agronoya-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const DynamicNumbers = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
      <div className="grid grid-cols-2 gap-6 md:gap-8">
        <div className="text-center space-y-2">
          <DynamicNumber end={1412} suffix="+" />
          <p className="text-white/90 text-xs md:text-sm font-medium">Agriculteurs Servis</p>
        </div>
        <div className="text-center space-y-2">
          <DynamicNumber end={47077} suffix="+" />
          <p className="text-white/90 text-xs md:text-sm font-medium">Hectares Surveillés</p>
        </div>
        <div className="text-center space-y-2">
          <DynamicNumber end={32} suffix="%" />
          <p className="text-white/90 text-xs md:text-sm font-medium">Augmentation Rendement</p>
        </div>
        <div className="text-center space-y-2">
          <DynamicNumber end={23} suffix="%" />
          <p className="text-white/90 text-xs md:text-sm font-medium">Réduction Coûts</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicNumbers;

