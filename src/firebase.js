// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4UEnt3c7hsMecxjRu0vvNZy0VSEXz1es",
  authDomain: "chat-app-5929f.firebaseapp.com",
  projectId: "chat-app-5929f",
  storageBucket: "chat-app-5929f.appspot.com",
  messagingSenderId: "940599693193",
  appId: "1:940599693193:web:7badbd33ef76b73cbe1b58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
