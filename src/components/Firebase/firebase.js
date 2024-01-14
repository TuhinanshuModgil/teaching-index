// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkB2wrSwpmCHetdewwR26vjPxOwJZ824c",
  authDomain: "teaching-index.firebaseapp.com",
  projectId: "teaching-index",
  storageBucket: "teaching-index.appspot.com",
  messagingSenderId: "919696050459",
  appId: "1:919696050459:web:81999d0289c6150c80ebbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initializing Database
const db = getFirestore(app);



export default app
export {db}
