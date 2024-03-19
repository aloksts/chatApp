import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCPHoaHHWCILpSVyHRr8u-irelNPkND-AI",
  authDomain: "alok-chatapp-49b5f.firebaseapp.com",
  projectId: "alok-chatapp-49b5f",
  storageBucket: "alok-chatapp-49b5f.appspot.com",
  messagingSenderId: "489388597240",
  appId: "1:489388597240:web:dbec5bb3e249eedd5f400d",
  measurementId: "G-YT19941DL9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);