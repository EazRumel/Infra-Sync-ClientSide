// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_sDWS1t9czFfDTZd3xOFVZqUifgOQMLg",
  authDomain: "infrasync-9b8ab.firebaseapp.com",
  projectId: "infrasync-9b8ab",
  storageBucket: "infrasync-9b8ab.firebasestorage.app",
  messagingSenderId: "310377528419",
  appId: "1:310377528419:web:16137c7c4185b6cd8d4c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);