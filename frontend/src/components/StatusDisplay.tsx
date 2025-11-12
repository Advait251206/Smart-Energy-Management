// src/components/StatusDisplay.tsx
import React from 'react';

interface StatusDisplayProps {
  isLedOn: boolean;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ isLedOn }) => {
  return (
    <p>LED is {isLedOn ? 'ON' : 'OFF'}</p>
  );
};

export default StatusDisplay;