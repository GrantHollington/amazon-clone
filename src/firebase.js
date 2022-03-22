import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrF5I5uDbmnKo5om30i5MoK2ogP3-r7Nc",
  authDomain: "grant-s--clone.firebaseapp.com",
  projectId: "grant-s--clone",
  storageBucket: "grant-s--clone.appspot.com",
  messagingSenderId: "987243114982",
  appId: "1:987243114982:web:d92aacd6c7dc2f2f066627",
  measurementId: "G-54S5GPFMWV"
};


// initialize firebase 
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

//Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);

export { db, auth};


