// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq3-RBzBTXvDt5eW3_HpwAdOtkVgtU9ic",
  authDomain: "foodapp-990de.firebaseapp.com",
  projectId: "foodapp-990de",
  storageBucket: "foodapp-990de.firebasestorage.app",
  messagingSenderId: "930002906221",
  appId: "1:930002906221:web:aacae226f1409e84192364",
  measurementId: "G-CR9B1397VL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
