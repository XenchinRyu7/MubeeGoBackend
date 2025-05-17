import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFXNj-7zsUcKN2gVhVAyC0FCSKezpLMs",
  authDomain: "mubeego.firebaseapp.com",
  projectId: "mubeego",
  storageBucket: "mubeego.firebasestorage.app",
  messagingSenderId: "284626842090",
  appId: "1:284626842090:web:4b5fcb7f07c51835c08293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
