import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration goes here
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set up Firestore
const db = getFirestore(firebaseApp);

// Set up Authentication
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

