// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDt5xASajKfYE1-7_DBuH4vLF35Q2T7bCg",
    authDomain: "mundo-invertido-bae31.firebaseapp.com",
    projectId: "mundo-invertido-bae31",
    storageBucket: "mundo-invertido-bae31.appspot.com",
    messagingSenderId: "579902807878",
    appId: "1:579902807878:web:2ba8a459978d6bed84cf47"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app