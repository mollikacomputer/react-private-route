// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo87YTs3El75h_q5PCN4O68RaXRtikI_s",
  authDomain: "react-private-route-7848f.firebaseapp.com",
  projectId: "react-private-route-7848f",
  storageBucket: "react-private-route-7848f.appspot.com",
  messagingSenderId: "617220043097",
  appId: "1:617220043097:web:1b75639790d4830f765c48",
  measurementId: "G-NLJ8XQ3D4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;