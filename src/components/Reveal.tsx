// src/components/Reveal.tsx
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  y?: number; // px to translate from
}

/**
 * Wraps content and fades/slides it into view the first time it
 * enters the viewport. Respects prefers-reduced-motion.
 */
const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, y = 24 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out duration-700 ${className} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
