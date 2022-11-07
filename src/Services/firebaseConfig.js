import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK0zghYv6FpOkhG0qgHApBd2VLk9thBHk",
  authDomain: "e-comm-motorsport-app.firebaseapp.com",
  projectId: "e-comm-motorsport-app",
  storageBucket: "e-comm-motorsport-app.appspot.com",
  messagingSenderId: "465284858440",
  appId: "1:465284858440:web:f7b9d0c273a02c073f0e7d",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
