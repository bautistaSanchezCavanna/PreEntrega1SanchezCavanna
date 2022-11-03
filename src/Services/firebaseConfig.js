import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

/* ESTA ES LA BASE DE DATOS ORIGINAL (CON 3 PRODUCTOS)
const firebaseConfig = {
  apiKey: "AIzaSyCK0zghYv6FpOkhG0qgHApBd2VLk9thBHk",
  authDomain: "e-comm-motorsport-app.firebaseapp.com",
  projectId: "e-comm-motorsport-app",
  storageBucket: "e-comm-motorsport-app.appspot.com",
  messagingSenderId: "465284858440",
  appId: "1:465284858440:web:f7b9d0c273a02c073f0e7d"
}; */

//ESTA ES LA NUEVA BASE DE DATOS (CON UN SOLO PRODUCTO)
const firebaseConfig = {
  apiKey: "AIzaSyBoCiEi-uyas6oerdCswCusqe2CMiCvEck",
  authDomain: "motorsport-app-411a0.firebaseapp.com",
  projectId: "motorsport-app-411a0",
  storageBucket: "motorsport-app-411a0.appspot.com",
  messagingSenderId: "34952734922",
  appId: "1:34952734922:web:8b39c2c0eaa6add3ea2c33"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)