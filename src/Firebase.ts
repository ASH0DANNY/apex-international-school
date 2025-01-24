import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_iwvRXHCdGSh1O5b7OYiusEGNO-KydVc",
  authDomain: "haristudio-69dee.firebaseapp.com",
  projectId: "haristudio-69dee",
  storageBucket: "haristudio-69dee.appspot.com",
  messagingSenderId: "42087736510",
  appId: "1:42087736510:web:b109e5915d933e90806aef",
  measurementId: "G-Z8EJNLQX2B"
};

// Initialize Firebasecls
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
