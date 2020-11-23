import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5X8ZV-pFZ9eD45OdBL5Gb1GjhcmnZehw",
  authDomain: "tiktok-clone-byshagun-aef10.firebaseapp.com",
  databaseURL: "https://tiktok-clone-byshagun-aef10.firebaseio.com",
  projectId: "tiktok-clone-byshagun-aef10",
  storageBucket: "tiktok-clone-byshagun-aef10.appspot.com",
  messagingSenderId: "81064908137",
  appId: "1:81064908137:web:d90f95283537d36b67d9f8",
  measurementId: "G-C3YGC9GSCM"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;