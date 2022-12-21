// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import firebase from "./firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { firestore } from "firebase/firestore";
// import { auth } from "firebase/auth";
// import { storage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =
{
    apiKey: "AIzaSyBVvTxGH7TZwXfjmaWVA1IXVe6Yr1wUKPA",
    authDomain: "disnetplus-clone-4ed8d.firebaseapp.com",
    projectId: "disnetplus-clone-4ed8d",
    storageBucket: "disnetplus-clone-4ed8d.appspot.com",
    messagingSenderId: "940330381272",
    appId: "1:940330381272:web:a794050520254dde4c8cad",
    measurementId: "G-3D049XW53C"
};

// Initialize Firebase
// const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;