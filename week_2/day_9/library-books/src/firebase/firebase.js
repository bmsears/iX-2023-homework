// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlSZ6Z6qDysz02RLxNExdMWDBH92jpbZw",
  authDomain: "library-books-de7b5.firebaseapp.com",
  projectId: "library-books-de7b5",
  storageBucket: "library-books-de7b5.appspot.com",
  messagingSenderId: "579654938826",
  appId: "1:579654938826:web:11a6d9f25e32d1713b0433",
  measurementId: "G-C8E6LNF3QW",
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
