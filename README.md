# 🎙️ Audio Transcribe

A modern web application that converts audio to text using the Vosk speech recognition model. Built with **Spring Boot (Java 17)** backend and a **React + Vite** frontend.

---

## 🚀 Overview

This project provides real-time audio transcription using the lightweight and efficient **Vosk** engine. Users can upload audio files through a modern React UI, and the backend processes them for accurate transcription.

---

## 🛠️ Tech Stack

### 🔧 Backend
- Java 17
- Spring Boot
- Vosk Speech Recognition
- Maven

### 💻 Frontend
- React
- Vite
- JavaScript
- Node.js

---

# 🎙️ Audio Transcribe

A modern web application that converts audio to text using the Vosk speech recognition model. Built with **Spring Boot (Java 17)** backend and a **React + Vite** frontend.

---

## 🚀 Overview

This project provides real-time audio transcription using the lightweight and efficient **Vosk** engine. Users can upload audio files through a modern React UI, and the backend processes them for accurate transcription.

---

## 🛠️ Tech Stack

### 🔧 Backend
- Java 17
- Spring Boot
- Vosk Speech Recognition
- Maven

### 💻 Frontend
- React
- Vite
- JavaScript
- Node.js


---

## ⚡ Quick Start

### 📌 Prerequisites
- Java 17+
- Node.js 16+
- Maven
- Git

### 🔙 Backend Setup

git clone https://github.com/Surendra1341/Audio_Transcribe.git
cd Audio_Transcribe/backend

mvn clean install
mvn spring-boot:run


### 🔜 Frontend Setup


cd ../frontend

npm install

npm run dev



## 🌐 Access Points
Backend API: http://localhost:8080

Frontend: http://localhost:5173


## ✨ Features
📤 Upload audio files via a simple UI

📝 Real-time speech-to-text transcription

⚡ Powered by Vosk engine for fast processing

🔐 CORS-enabled for cross-origin requests

📱 Fully responsive frontend



### 🔌 API Reference

**POST** `/api/transcribe`  
**Request:** `multipart/form-data` (with audio file)  
**Response:** JSON containing transcribed text

## 💻 Developer Notes
### Backend
AudioTranscribeApplication.java: Main entry point

TranscriptionController.java: Handles file input and Vosk integration

WebConfig.java: Enables CORS

### Frontend
Built with React + Vite

Main code in src/

Configuration via vite.config.js

### Vosk Model
The models/vosk-model-small-en-us-0.15 directory includes:

Acoustic model (am/)

Configuration files (conf/)

Graph data (graph/)

iVector extraction (ivector/)

## 🤝 Contributing
Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes

Push and open a Pull Request

## 📄 License
This project is licensed under the MIT License.

# 🙏 Acknowledgments
Vosk Speech Recognition

Spring Boot

React

## 📫 Support
Have issues or ideas? Open an issue on the GitHub repository.

# Made with ❤️ by Surendra
Let me know if you want this in a downloadable `.md` file.
