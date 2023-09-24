// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYceQQOefnK2CMxnyUZa8MnnkOIBtR38U",
  authDomain: "rcgd-shame.firebaseapp.com",
  projectId: "rcgd-shame",
  storageBucket: "rcgd-shame.appspot.com",
  messagingSenderId: "140592658608",
  appId: "1:140592658608:web:8e30351da47e8e9a34a375",
  databaseURL: "https://rcgd-shame-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };