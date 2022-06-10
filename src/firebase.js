import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk16ZIH4VaEQkDNpkIbp8bGo1gHCwnHCQ",
    authDomain: "e-commerce-app-f5af4.firebaseapp.com",
    projectId: "e-commerce-app-f5af4",
    storageBucket: "e-commerce-app-f5af4.appspot.com",
    messagingSenderId: "821664557762",
    appId: "1:821664557762:web:d35943192db833b4e6695b",
    measurementId: "G-76BVSPG8GP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };