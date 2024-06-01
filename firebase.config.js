// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVhUf78Yt_WgfYJlIcENWHWE3J5XgkN1U",
  authDomain: "assignment-12-8e798.firebaseapp.com",
  projectId: "assignment-12-8e798",
  storageBucket: "assignment-12-8e798.appspot.com",
  messagingSenderId: "849252240203",
  appId: "1:849252240203:web:0d03d5c18272dc7e6ab6ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;