import React from 'react';
import './GlowLoader.css';

interface GlowLoaderProps {}

export const GlowLoader: React.FC<GlowLoaderProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="loader"></div>
    </React.Fragment>
  );
};
