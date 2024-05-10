// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW6PIK_9zD5nIiWd7S0iBjsjw4USigaDY",
  authDomain: "jsencoder-hotel-management.firebaseapp.com",
  projectId: "jsencoder-hotel-management",
  storageBucket: "jsencoder-hotel-management.appspot.com",
  messagingSenderId: "200409288295",
  appId: "1:200409288295:web:d2e3e18f1613a174cf0ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;