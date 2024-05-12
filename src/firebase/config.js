// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:`${import.meta.env.VITE_API_KEY}`,
  authDomain: "ebr-chat.firebaseapp.com",
  projectId: "ebr-chat",
  storageBucket: "ebr-chat.appspot.com",
  messagingSenderId: "785166266804",
  appId: "1:785166266804:web:5616e0749f30471f05c2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db =  getFirestore(app);