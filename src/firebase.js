import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX9JLLvuZSqKQHTQXoQv0Trr46q9prX8w",
  authDomain: "clone-a491b.firebaseapp.com",
  databaseURL: "https://clone-a491b.firebaseio.com",
  projectId: "clone-a491b",
  storageBucket: "clone-a491b.appspot.com",
  messagingSenderId: "234851709946",
  appId: "1:234851709946:web:cd52ad0476b18133b66a43",
  measurementId: "G-58N8XMBJ30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
