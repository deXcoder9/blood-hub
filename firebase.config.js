// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE__APIKEY,
  authDomain: import.meta.env.VITE__AUTHDOMAIN,
  projectId: import.meta.env.VITE__PROJECTID,
  storageBucket: import.meta.env.VITE__STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE__MESSAGINGSENDERID,
  appId: import.meta.env.VITE__APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;