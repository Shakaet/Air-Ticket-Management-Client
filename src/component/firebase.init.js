// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNDWtQaQGgYZyIRE8RyO8z5Mff5fyvvY",
  authDomain: "air-ticket-baca4.firebaseapp.com",
  projectId: "air-ticket-baca4",
  storageBucket: "air-ticket-baca4.firebasestorage.app",
  messagingSenderId: "706000091269",
  appId: "1:706000091269:web:295ebab938adb0de70d1ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth