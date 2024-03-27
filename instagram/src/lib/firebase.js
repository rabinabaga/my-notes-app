// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
//here import seed file

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOz4Lr6GCFp7kLBhLQgiJ-YCBD5Q53xgg",
  authDomain: "instagram-fcc-d1a0f.firebaseapp.com",
  projectId: "instagram-fcc-d1a0f",
  storageBucket: "instagram-fcc-d1a0f.appspot.com",
  messagingSenderId: "956053929600",
  appId: "1:956053929600:web:515d6b5e176467c94a7065",
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
