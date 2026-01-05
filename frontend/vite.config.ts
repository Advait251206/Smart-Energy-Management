// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This is needed to accept connections from outside localhost
    hmr: {
      clientPort: 443, // Use 443 for ngrok's secure websocket connection
    },
    watch: {
      usePolling: true,
    },
    // Allow connections from any ngrok-free.dev host
    allowedHosts: ['.ngrok-free.dev'], 
  },
})