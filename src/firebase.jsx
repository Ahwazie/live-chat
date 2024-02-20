// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8p8Ma9JyDGlKfoXY6s9rowqRISXjTS0",
  authDomain: "livechat-8ca2e.firebaseapp.com",
  projectId: "livechat-8ca2e",
  storageBucket: "livechat-8ca2e.appspot.com",
  messagingSenderId: "824637029075",
  appId: "1:824637029075:web:7ab80dad1efebb2ae9f226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);