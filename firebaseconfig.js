// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6aslXMMwTFnuGjQIDXX3JCMV3Xhs406c",
  authDomain: "chat-app-48469.firebaseapp.com",
  projectId: "chat-app-48469",
  storageBucket: "chat-app-48469.appspot.com",
  messagingSenderId: "555285043815",
  appId: "1:555285043815:web:4efea027242240457512c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }