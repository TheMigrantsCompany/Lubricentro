import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKvzDnM2kw9dYXU1GobXOvTPgsHjGAFT4",
    authDomain: "ubricentro-2cb4f.firebaseapp.com",
    projectId: "lubricentro-2cb4",
    storageBucket: "Ylubricentro-2cb4f.appspot.com",
    messagingSenderId: "856676825718",
    appId: "1:856676825718:web:201d0a4a74970981b6bd57",
    measurementId: "G-5S1Q9XGLN2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

