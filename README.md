# Chat-App 🚀

A simple **Slack Clone** built with React.  
Chat-App lets you **log in with Google** or join as a **guest**, create new chat rooms, and start chatting instantly.

---

## ✨ Features

- 🔑 **Authentication** with Google or Guest login
- 💬 **Create & join chat rooms**
- ⚡ **Real-time messaging**
- 🖥️ **Slack-like interface with clean design**

---

## 🛠️ Tech Stack

- **React** (frontend)
- **Firebase** (authentication, database)
- **CSS Styled Components** (UI styling)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Firebase

- Create a Firebase project in the Firebase Console
- Enable Google Authentication under Authentication → Sign-in method
- Create a Firestore Database

- Rename the firebase.template to firebase.prod inside the environment project path and add your Firebase config:

```bash
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 4. Start the app

```bash
npm start
```
