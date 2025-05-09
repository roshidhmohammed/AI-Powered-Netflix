// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZVfVmfiAiH9j6I8ssg3j1B4kR6HwnAcE",
  authDomain: "ai-powered-netflix.firebaseapp.com",
  projectId: "ai-powered-netflix",
  storageBucket: "ai-powered-netflix.firebasestorage.app",
  messagingSenderId: "318919118207",
  appId: "1:318919118207:web:2b37dff5593b487f391e4a",
  measurementId: "G-YJNZQ06ZGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth()