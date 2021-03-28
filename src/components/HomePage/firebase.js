import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAirw-v7i5jFDussP6NsXTtBgnb8tGzeDc",
    authDomain: "linkedin-harshit.firebaseapp.com",
    projectId: "linkedin-harshit",
    storageBucket: "linkedin-harshit.appspot.com",
    messagingSenderId: "118435361475",
    appId: "1:118435361475:web:ef1b254c21c44448dde876",
    measurementId: "G-ZSKN1BJFGN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

