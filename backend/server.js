import express from 'express';
import cors from 'cors';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

// --- CONFIGURATION ---
const APP_PORT = 3000;
const ARDUINO_PORT_PATH = 'COM5';

// --- DEMO USER DATABASE (INSECURE - FOR DEMO ONLY) ---
const DEMO_USER = {
  username: 'admin',
  password: 'password123'
};

// --- INITIALIZE EXPRESS APP ---
const app = express();
app.use(express.json());

// --- CORS CONFIGURATION ---
const corsOptions = {
  origin: 'https://nucleoplasmatic-chandler-beefily.ngrok-free.dev'
};
app.use(cors(corsOptions));

// --- SETUP SERIAL PORT ---
const port = new SerialPort({ path: ARDUINO_PORT_PATH, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// --- API ENDPOINTS ---

// 1. NEW LOGIN ENDPOINT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === DEMO_USER.username && password === DEMO_USER.password) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password.' });
  }
});

// 2. EXISTING CONTROL ENDPOINT (remains the same)
app.post('/control', (req, res) => {
  const { led, state } = req.body;
  let command = '';
  if (led === 'led1' && state === 'on') command = 'A';
  if (led === 'led1' && state === 'off') command = 'a';
  if (led === 'led2' && state === 'on') command = 'B';
  if (led === 'led2' && state === 'off') command = 'b';
  if (led === 'led3' && state === 'on') command = 'C';
  if (led === 'led3' && state === 'off') command = 'c';
  if (!command) return res.status(400).json({ message: 'Invalid command.' });
  port.write(command, (err) => {
    if (err) return res.status(500).json({ message: 'Failed to write to serial port.' });
    return res.json({ message: `Successfully sent command ${command}` });
  });
});

// --- START THE SERVER ---
app.listen(APP_PORT, () => console.log(`Server is running on http://localhost:${APP_PORT}`));
port.on('open', () => console.log('Serial port open.'));
port.on('error', (err) => console.error('SerialPort Error: ', err.message));
parser.on('data', data => console.log('Data from Arduino:', data));