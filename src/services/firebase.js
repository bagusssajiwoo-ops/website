// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtBBgxj1rRlsqjy1G0e6Wx1ebThvRjLCI",
    authDomain: "website-funiture.firebaseapp.com",
    projectId: "website-funiture",
    storageBucket: "website-funiture.firebasestorage.app",
    messagingSenderId: "958390572994",
    appId: "1:958390572994:web:94ad0df122523abe27e85b",
    measurementId: "G-VLBF47PD3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
// Note: Tidak pakai Firebase Storage, pakai ImgBB untuk gambar

export default app;
