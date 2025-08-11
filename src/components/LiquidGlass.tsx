import type { ReactNode } from 'react';

export const LiquidGlass = ({ children }: { children: ReactNode }) => {
  return (
    <div className="liquid-glass">
      <div className="liquid-glass--bend"></div>
      <div className="liquid-glass--face"></div>
      <div className="liquid-glass--edge"></div>
      <div className="liquid-glass__content">
        {children}
      </div>
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
};

export const LiquidGlassList = ({ children }: { children: ReactNode }) => {
    return (
      <div className="liquid-glass--list">
        <div className="liquid-glass--bend"></div>
        <div className="liquid-glass--face"></div>
        <div className="liquid-glass--edge"></div>
        <div className="liquid-glass__content">
          {children}
        </div>
        <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
          <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
      </div>
    );
  };