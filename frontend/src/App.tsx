// src/App.tsx
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import ControlPanel from './components/ControlPanel';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('isLoggedIn'));

  const [errorMessage, setErrorMessage] = useState('');
  const [ledStates, setLedStates] = useState({ led1: false, led2: false, led3: false });

  const handleLogin = async (username: string, password: string) => {
    const backendUrl = `https://palaeobiological-deborah-feignedly.ngrok-free.dev/login`;
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      setErrorMessage('Failed to connect to the server.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  
  const sendLedRequest = async (ledId: 'led1' | 'led2' | 'led3', state: 'on' | 'off') => {
    const backendUrl = `https://palaeobiological-deborah-feignedly.ngrok-free.dev/control`;
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
        body: JSON.stringify({ led: ledId, state: state }),
      });
      if (response.ok) {
        setLedStates(prev => ({ ...prev, [ledId]: state === 'on' }));
      }
    } catch (error) {
      console.error('Failed to send LED command:', error);
    }
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <ControlPanel
          ledStates={ledStates}
          sendLedRequest={sendLedRequest}
          onLogout={handleLogout}
        />
      ) : (
        <LoginPage onLogin={handleLogin} errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default App;