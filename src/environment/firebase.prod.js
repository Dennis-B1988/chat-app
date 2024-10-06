import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbDhryP6_ZoZe5BOHzH2pHt7oYuzAniEQ",
  authDomain: "chat-app-5a046.firebaseapp.com",
  projectId: "chat-app-5a046",
  storageBucket: "chat-app-5a046.appspot.com",
  messagingSenderId: "290998330443",
  appId: "1:290998330443:web:02741d23f81cfb7ac619ce"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set up Firestore
const db = getFirestore(firebaseApp);

// Set up Authentication
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

