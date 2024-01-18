// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZZmNI-PfC7uz5vj0STfp3w8R9aUgN8sE",
  authDomain: "mern-auth-55909.firebaseapp.com",
  projectId: "mern-auth-55909",
  storageBucket: "mern-auth-55909.appspot.com",
  messagingSenderId: "821405822718",
  appId: "1:821405822718:web:8bef7ff2fe632d7555ffaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };