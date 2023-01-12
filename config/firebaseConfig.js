// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAgseQl_zhPyiizqSOzCYzjZ2EXO_XpI0",
  authDomain: "next-firebase-a887a.firebaseapp.com",
  projectId: "next-firebase-a887a",
  storageBucket: "next-firebase-a887a.appspot.com",
  messagingSenderId: "466052269829",
  appId: "1:466052269829:web:a9d5ad2c606f709506196c",
  measurementId: "G-WQYXNS5ZWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database=getFirestore(app)