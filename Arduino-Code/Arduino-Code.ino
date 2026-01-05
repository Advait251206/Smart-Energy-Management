// --- PIN DEFINITIONS ---
const int ledPin1 = 13; // First LED
const int ledPin2 = 12; // Second LED
const int ledPin3 = 11; // Third LED
const int buzzerPin = 8;  // Your active buzzer

// --- STATE TRACKING for EACH LED ---
int led1State = LOW;
int led2State = LOW;
int led3State = LOW; // State for the new LED

void setup() {
  // Set up all our pins as outputs
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT); // Set up the new pin
  pinMode(buzzerPin, OUTPUT);

  // Start serial communication
  Serial.begin(9600);
}

// The beep function remains the same
void beep() {
  digitalWrite(buzzerPin, HIGH);
  delay(100);
  digitalWrite(buzzerPin, LOW);
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read();

    // We use a switch statement to handle the different commands
    switch (command) {
      case 'A': // Turn LED 1 ON
        if (led1State == LOW) {
          beep();
          digitalWrite(ledPin1, HIGH);
          led1State = HIGH;
        }
        break;

      case 'a': // Turn LED 1 OFF
        if (led1State == HIGH) {
          beep();
          digitalWrite(ledPin1, LOW);
          led1State = LOW;
        }
        break;

      case 'B': // Turn LED 2 ON
        if (led2State == LOW) {
          beep();
          digitalWrite(ledPin2, HIGH);
          led2State = HIGH;
        }
        break;

      case 'b': // Turn LED 2 OFF
        if (led2State == HIGH) {
          beep();
          digitalWrite(ledPin2, LOW);
          led2State = LOW;
        }
        break;

      // --- NEW LOGIC FOR LED 3 ---
      case 'C': // Turn LED 3 ON
        if (led3State == LOW) {
          beep();
          digitalWrite(ledPin3, HIGH);
          led3State = HIGH;
        }
        break;

      case 'c': // Turn LED 3 OFF
        if (led3State == HIGH) {
          beep();
          digitalWrite(ledPin3, LOW);
          led3State = LOW;
        }
        break;
    }
  }
}