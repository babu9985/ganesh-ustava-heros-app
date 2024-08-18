// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig2 = {
    apiKey: "AIzaSyDJW1GeFWivfeUCrPgC5HP0wCG_PofJeAc",
    authDomain: "ganesh-ustava-heros-1549d.firebaseapp.com",
    projectId: "ganesh-ustava-heros-1549d",
    storageBucket: "ganesh-ustava-heros-1549d.appspot.com",
    messagingSenderId: "228371397536",
    appId: "1:228371397536:web:d7366de8f8543677ad42c5"
};

// Initialize Firebase
export const app2 = initializeApp(firebaseConfig2);
export const db2 = getFirestore(app2)
export const storage2 = getStorage(app2)