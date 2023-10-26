// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBppDtxeBGpv3bBCXEu13S4Y-_phiQFIvo",
  authDomain: "shop-1aeb8.firebaseapp.com",
  projectId: "shop-1aeb8",
  storageBucket: "shop-1aeb8.appspot.com",
  messagingSenderId: "475231867445",
  appId: "1:475231867445:web:74a6c8d04a1aa82b88177c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app