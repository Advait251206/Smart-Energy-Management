// src/components/LEDControlButtons.tsx
import React from 'react';
import './LEDControlButtons.css';

interface LEDControlButtonsProps {
  onTurnOn: () => void;
  onTurnOff: () => void;
}

const LEDControlButtons: React.FC<LEDControlButtonsProps> = ({ onTurnOn, onTurnOff }) => {
  return (
    <div className="button-group">
      <button onClick={onTurnOn}>Turn ON</button>
      <button onClick={onTurnOff}>Turn OFF</button>
    </div>
  );
};

export default LEDControlButtons;