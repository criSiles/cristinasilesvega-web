// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'dummy-project-28e8c.firebaseapp.com',
  databaseURL: 'https://dummy-project-28e8c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dummy-project-28e8c',
  storageBucket: 'dummy-project-28e8c.appspot.com',
  messagingSenderId: '785683075181',
  appId: '1:785683075181:web:3d371b83b751e84802ef64',
  measurementId: 'G-1SWQ077F61'
}

console.log(firebaseConfig);
// Initialize Firebase
initializeApp(firebaseConfig)

// init firestore service
const dbFirestore = getFirestore();

// export firestore
export default dbFirestore;
