// src/components/BulbDisplay.tsx
import React from 'react';
import BulbIcon from './BulbIcon';
import './BulbDisplay.css';

interface BulbDisplayProps {
  isLedOn: boolean;
  glowColor?: string;
  discoEffect?: boolean;
}

const BulbDisplay: React.FC<BulbDisplayProps> = ({ isLedOn, glowColor, discoEffect }) => {
  const bulbStyle = {
    '--glow-color': glowColor || '#FFD700',
  } as React.CSSProperties;

  const getBulbClassName = () => {
    if (!isLedOn) return 'bulb-icon off';
    if (discoEffect) return 'bulb-icon disco-effect';
    return 'bulb-icon on';
  };

  return (
    <div className="bulb-container" style={bulbStyle}>
      <BulbIcon className={getBulbClassName()} />
    </div>
  );
};

export default BulbDisplay;