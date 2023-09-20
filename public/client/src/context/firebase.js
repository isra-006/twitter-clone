
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKCyk9wEF1D0PBj93lASaVlOrET9UZPJk",
  authDomain: "twitter-clone-79e30.firebaseapp.com",
  projectId: "twitter-clone-79e30",
  storageBucket: "twitter-clone-79e30.appspot.com",
  messagingSenderId: "80060705246",
  appId: "1:80060705246:web:597bc04d6c9d0858b5554f",
  measurementId: "G-NE54SRC3HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
