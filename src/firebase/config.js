// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// para consumir el servicio de firebase dentro de mi proyecto:
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8eydNZhSac4VKNapSPurpQnb06Pe4UXc",
  authDomain: "proyecto-flyshop.firebaseapp.com",
  projectId: "proyecto-flyshop",
  storageBucket: "proyecto-flyshop.appspot.com",
  messagingSenderId: "940158295164",
  appId: "1:940158295164:web:381917576e21ed68ea3df9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);