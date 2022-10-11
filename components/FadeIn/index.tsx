import React, { useState, useEffect, useRef } from 'react';
import fadeInStyles from './FadeIn.module.scss';

const FadeIn = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    const current = domRef.current;
    if (current) {
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  });

  return (
    <div
      className={`${fadeInStyles.main} ${isVisible ? `${fadeInStyles['is-visible']}` : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeIn;