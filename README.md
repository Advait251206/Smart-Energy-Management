# Smart Energy Control System

A full-stack IoT application designed to control hardware components via a modern web interface. This project integrates a React frontend, a Node.js backend, and Arduino firmware to provide real-time control over LEDs.

## 🌟 Features

- **Real-time Control**: Toggle LEDs instantly from a web dashboard.
- **Secure Access**: Simple login authentication system.
- **Auditory Feedback**: Buzzer feedback for every command received.
- **Modern UI**: Built with React 19 and Vite for a responsive experience.

## 🛠 Hardware Requirements

To replicate the setup, you will need the following components properly connected to your Arduino or compatible microcontroller:

| Component  | Arduino Pin | Description                |
| ---------- | ----------- | -------------------------- |
| **LED 1**  | **Pin 13**  | Status Indicator 1         |
| **LED 2**  | **Pin 12**  | Status Indicator 2         |
| **LED 3**  | **Pin 11**  | Status Indicator 3         |
| **Buzzer** | **Pin 8**   | Active Buzzer for feedback |

> **Note**: Ensure you use appropriate resistors (e.g., 220Ω) in series with each LED to prevent burnout.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Arduino IDE](https://www.arduino.cc/en/software)
- [Git](https://git-scm.com/)

### 1. Firmware Setup (Arduino)

1. Connect your Arduino board to your computer.
2. Open `Arduino-Code/Arduino-Code.ino` in the Arduino IDE.
3. Select your board and the correctly identified **COM Port**.
4. Click **Upload**.

### 2. Backend Setup

The backend handles communication between the web app and the serial port.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Configuration**:
   - Open `server.js`.
   - Update `ARDUINO_PORT_PATH` to match your Arduino's COM port (e.g., `'COM3'` on Windows or `/dev/ttyUSB0` on Linux/Mac).
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Configuration**:
   - Open `src/App.tsx`.
   - Ensure the API URL points to your backend (default might be set to an ngrok tunnel, change it to `http://localhost:3000` for local use).
4. Run the development server:
   ```bash
   npm run dev
   ```

## 🔒 Default Credentials

- **Username**: `admin`
- **Password**: `password123`

## 📂 Project Structure

- `/backend` - Express.js API & SerialPort logic.
- `/frontend` - React + Vite UI.
- `/Arduino-Code` - C++ Firmware.
