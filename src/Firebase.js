import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4vFqlsvff3Un9iHoHBvif3EMekBAZlRM",
  authDomain: "tech-test-fcaf6.firebaseapp.com",
  projectId: "tech-test-fcaf6",
  storageBucket: "tech-test-fcaf6.appspot.com",
  messagingSenderId: "59686504508",
  appId: "1:59686504508:web:277fcf4e2b6eb385549b39",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
