// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // apiKey: "-DFfyoIhlA",
  // authDomain: "lab-quemic.firebaseapp.com",
  // projectId: "lab-quemic",
  // storageBucket: "lab-quemic.appspot.com",
  // messagingSenderId: "",
  // appId: "1::web:",
  // measurementId: "G-J01W6LFTDL"

  // apiKey: "",
  // authDomain: "inspecciones-de-obras-civiles.firebaseapp.com",
  // projectId: "inspecciones-de-obras-civiles",
  // storageBucket: "inspecciones-de-obras-civiles.appspot.com",
  // messagingSenderId: "379801489658",
  // appId: "1:379801489658:web:c68babbd8f0286c57e7943",
  // measurementId: "G-6P10EMF22B"

  apiKey: "",
  authDomain: "labquemic.firebaseapp.com",
  projectId: "labquemic",
  storageBucket: "labquemic.appspot.com",
  messagingSenderId: "",
  appId: "1:147846775104:web:4918ebb4ed252654467aa5"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase)
//const analytics = getAnalytics(initFirebase);

