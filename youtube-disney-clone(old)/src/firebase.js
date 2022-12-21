import firebase from "firebase";

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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;