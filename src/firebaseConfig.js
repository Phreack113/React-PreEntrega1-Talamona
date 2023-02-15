// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore , collection } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQFiDy0I1G_KBtIJ-EDfskeeEaqgjmKrU",
  authDomain: "laprevia-99919.firebaseapp.com",
  projectId: "laprevia-99919",
  storageBucket: "laprevia-99919.appspot.com",
  messagingSenderId: "373124073384",
  appId: "1:373124073384:web:05307e846c94d9b30f3f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) //Firestore
export const productsCollection = collection(db,"productos")