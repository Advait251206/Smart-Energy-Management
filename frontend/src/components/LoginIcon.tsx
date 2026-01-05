// src/components/LoginIcon.tsx
import React from 'react';

const LoginIcon: React.FC = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="80" 
      height="80" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22a4 4 0 0 0 4-4v-3H8v3a4 4 0 0 0 4 4z" />
      <path d="M12 2a4 4 0 0 0-4 4v3h8V6a4 4 0 0 0-4-4z" />
      <path d="M10 15v-1a2 2 0 0 1 4 0v1" />
      <path d="M10 11h4" />
      <path d="M12 11V9" />
    </svg>
  );
};

export default LoginIcon;