// src/components/ControlPanel.tsx
import React from 'react';
import LedController from './LedController';

interface ControlPanelProps {
  ledStates: { led1: boolean; led2: boolean; led3: boolean; };
  sendLedRequest: (ledId: 'led1' | 'led2' | 'led3', state: 'on' | 'off') => void;
  onLogout: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ ledStates, sendLedRequest, onLogout }) => {
  return (
    <>
      <h1>Smart Energy Control Panel</h1>
      <div className="controllers-wrapper">
        <LedController
          title="LED 1 (Pin 13)"
          isLedOn={ledStates.led1}
          onTurnOn={() => sendLedRequest('led1', 'on')}
          onTurnOff={() => sendLedRequest('led1', 'off')}
          glowColor="#FF0000"
        />
        <LedController
          title="LED 2 (Pin 12)"
          isLedOn={ledStates.led2}
          onTurnOn={() => sendLedRequest('led2', 'on')}
          onTurnOff={() => sendLedRequest('led2', 'off')}
        />
        <LedController
          title="LED 3 (Pin 11)"
          isLedOn={ledStates.led3}
          onTurnOn={() => sendLedRequest('led3', 'on')}
          onTurnOff={() => sendLedRequest('led3', 'off')}
          discoEffect={true}
        />
      </div>
      <button onClick={onLogout} className="logout-button">Logout</button>
    </>
  );
};

export default ControlPanel;