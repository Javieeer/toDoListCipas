// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByiRTS9k_WnDpDrXEPIfG-xZAaKGDSK2c",
    authDomain: "todolistcipas.firebaseapp.com",
    projectId: "todolistcipas",
    storageBucket: "todolistcipas.firebasestorage.app",
    messagingSenderId: "745932854762",
    appId: "1:745932854762:web:cdfd7286b4f52ba5b94e93",
    measurementId: "G-3FE0C85DL4"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta Firestore
const db = getFirestore(app);

export default db;