import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB6GqkQOqbC7khMMJbKwlgd5kyWdb4CIcs",
  authDomain: "olx-project-b9362.firebaseapp.com",
  projectId: "olx-project-b9362",
  storageBucket: "olx-project-b9362.appspot.com",
  messagingSenderId: "256786352259",
  appId: "1:256786352259:web:00da10269122c7f8d1f3b6",
  measurementId: "G-BZVX4VQRT4"
};

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app);
  const storage = getStorage(app);
  export {db,auth,storage}