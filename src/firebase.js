import firebase from "firebase";

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
    apiKey: "AIzaSyACfhBNO_5ZOJiY_uNm4_QOo02TFee6mgU",
    authDomain: "fb-clone-1a.firebaseapp.com",
    projectId: "fb-clone-1a",
    storageBucket: "fb-clone-1a.appspot.com",
    messagingSenderId: "542614385142",
    appId: "1:542614385142:web:aee06e35213dd9bb80d7d7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;