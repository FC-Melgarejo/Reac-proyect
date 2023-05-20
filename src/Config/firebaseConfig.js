// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB5gp2kFit9dvzrY3s1YkpSIFTpbmTnEk",
  authDomain: "comercio-7b64f.firebaseapp.com",
  projectId: "comercio-7b64f",
  storageBucket: "comercio-7b64f.appspot.com",
  messagingSenderId: "1061640961200",
  appId: "1:1061640961200:web:f7619a3cad2fee2c804f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export {  collection, addDoc, serverTimestamp };
