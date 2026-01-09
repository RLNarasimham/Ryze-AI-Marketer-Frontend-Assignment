import { useEffect, useRef } from 'react';

const FloatingBackground = ({ 
  variant = 'default',
  intensity = 'medium',
  children,
  className = ''
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (variant === 'particles' && containerRef.current) {
      const particleCount = intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 10;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle animate';
        
        const startX = Math.random() * 100;
        const startY = window.innerHeight + 100;
        const duration = 8 + Math.random() * 12;
        const xOffset = (Math.random() - 0.5) * 200;

        particle.style.left = startX + '%';
        particle.style.top = startY + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.setProperty('--x-offset', xOffset + 'px');

        containerRef.current?.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, (duration + 5) * 1000);
      }

      const interval = setInterval(() => {
        if (containerRef.current) {
          const particle = document.createElement('div');
          particle.className = 'floating-particle animate';
          
          const startX = Math.random() * 100;
          const duration = 8 + Math.random() * 12;
          const xOffset = (Math.random() - 0.5) * 200;

          particle.style.left = startX + '%';
          particle.style.top = (window.innerHeight + 100) + 'px';
          particle.style.animationDuration = duration + 's';
          particle.style.setProperty('--x-offset', xOffset + 'px');

          containerRef.current?.appendChild(particle);

          setTimeout(() => {
            particle.remove();
          }, (duration + 5) * 1000);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [variant, intensity]);

  const blobVariants = {
    default: (
      <>
        <div 
          className="floating-blob blob-purple" 
          style={{
            width: '400px',
            height: '400px',
            top: '10%',
            left: '5%',
            opacity: intensity === 'high' ? 0.25 : intensity === 'medium' ? 0.15 : 0.08,
          }}
        ></div>
        <div 
          className="floating-blob blob-cyan" 
          style={{
            width: '500px',
            height: '500px',
            bottom: '10%',
            right: '5%',
            opacity: intensity === 'high' ? 0.25 : intensity === 'medium' ? 0.15 : 0.08,
          }}
        ></div>
        <div 
          className="floating-blob blob-pink" 
          style={{
            width: '350px',
            height: '350px',
            top: '50%',
            right: '20%',
            opacity: intensity === 'high' ? 0.2 : intensity === 'medium' ? 0.12 : 0.06,
          }}
        ></div>
      </>
    ),
    minimal: (
      <>
        <div 
          className="floating-blob blob-purple" 
          style={{
            width: '300px',
            height: '300px',
            top: '20%',
            left: '10%',
            opacity: intensity === 'high' ? 0.2 : intensity === 'medium' ? 0.1 : 0.05,
          }}
        ></div>
        <div 
          className="floating-blob blob-cyan" 
          style={{
            width: '350px',
            height: '350px',
            bottom: '20%',
            right: '10%',
            opacity: intensity === 'high' ? 0.2 : intensity === 'medium' ? 0.1 : 0.05,
          }}
        ></div>
      </>
    ),
    intense: (
      <>
        <div 
          className="floating-blob blob-purple" 
          style={{
            width: '600px',
            height: '600px',
            top: '-100px',
            left: '-50px',
            opacity: intensity === 'high' ? 0.35 : intensity === 'medium' ? 0.25 : 0.15,
          }}
        ></div>
        <div 
          className="floating-blob blob-cyan" 
          style={{
            width: '700px',
            height: '700px',
            bottom: '-150px',
            right: '-100px',
            opacity: intensity === 'high' ? 0.35 : intensity === 'medium' ? 0.25 : 0.15,
          }}
        ></div>
        <div 
          className="floating-blob blob-pink" 
          style={{
            width: '450px',
            height: '450px',
            top: '25%',
            right: '10%',
            opacity: intensity === 'high' ? 0.3 : intensity === 'medium' ? 0.2 : 0.1,
          }}
        ></div>
        <div 
          className="floating-blob blob-purple" 
          style={{
            width: '400px',
            height: '400px',
            bottom: '30%',
            left: '15%',
            opacity: intensity === 'high' ? 0.25 : intensity === 'medium' ? 0.15 : 0.08,
          }}
        ></div>
      </>
    ),
    particles: null,
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {blobVariants[variant]}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FloatingBackground;
