// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeR4SMz5mf4zk9iZLn6he_dGtS0q-zOYw",
  authDomain: "ganesh-ustava-heros-583ab.firebaseapp.com",
  projectId: "ganesh-ustava-heros-583ab",
  storageBucket: "ganesh-ustava-heros-583ab.appspot.com",
  messagingSenderId: "595832655705",
  appId: "1:595832655705:web:71a57571bf67d780844648"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);