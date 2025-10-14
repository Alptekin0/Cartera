import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyBRgG3BatxQtZCdTHVwbmDdOTdruQyMhV0",
     authDomain: "carteraproject.firebaseapp.com",
     projectId: "carteraproject",
     storageBucket: "carteraproject.firebasestorage.app",
     messagingSenderId: "849110545007",
     appId: "1:849110545007:web:82bc805d85c7c5699a939a",
     measurementId: "G-TGRBH64NY9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);