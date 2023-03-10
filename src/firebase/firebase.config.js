// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFgMz-WwyvrpjI1O_WlUlQX6UT9_dIZh0",
  authDomain: "cart-crowd.firebaseapp.com",
  projectId: "cart-crowd",
  storageBucket: "cart-crowd.appspot.com",
  messagingSenderId: "12397458734",
  appId: "1:12397458734:web:56e15b8a544554dae7f6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;