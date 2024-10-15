// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWkBnugPju5rhf5pudQj2P8S3CyBHYwok",
  authDomain: "climbai-2024.firebaseapp.com",
  projectId: "climbai-2024",
  storageBucket: "climbai-2024.appspot.com",
  messagingSenderId: "494563503264",
  appId: "1:494563503264:web:4317664157b24370dc6dc5",
  measurementId: "G-1YNQQ0Z611",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
