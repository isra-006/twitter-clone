import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKCyk9wEF1D0PBj93lASaVlOrET9UZPJk",
    authDomain: "twitter-clone-79e30.firebaseapp.com",
    projectId: "twitter-clone-79e30",
    storageBucket: "twitter-clone-79e30.appspot.com",
    messagingSenderId: "80060705246",
    appId: "1:80060705246:web:5bff7892842e9f6eb5554f",
    measurementId: "G-HXQT1N9T2H"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



