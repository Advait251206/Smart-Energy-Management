// src/components/LedController.tsx
import React from 'react';
import BulbDisplay from './BulbDisplay';
import LEDControlButtons from './LEDControlButtons';
import StatusDisplay from './StatusDisplay';
import './LedController.css';

interface LedControllerProps {
  title: string;
  isLedOn: boolean;
  onTurnOn: () => void;
  onTurnOff: () => void;
  glowColor?: string;
  discoEffect?: boolean;
}

const LedController: React.FC<LedControllerProps> = ({ title, isLedOn, onTurnOn, onTurnOff, glowColor, discoEffect }) => {
  return (
    <div className="led-controller-card">
      <h2>{title}</h2>
      <BulbDisplay
        isLedOn={isLedOn}
        glowColor={glowColor}
        discoEffect={discoEffect}
      />
      
      <LEDControlButtons onTurnOn={onTurnOn} onTurnOff={onTurnOff} />
      <StatusDisplay isLedOn={isLedOn} />
    </div>
  );
};

export default LedController;