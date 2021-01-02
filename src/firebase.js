import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5sfKos_ZGm4k6nPLbGgMZCWB86sTqfjE",
  authDomain: "discord-clone-8f430.firebaseapp.com",
  projectId: "discord-clone-8f430",
  storageBucket: "discord-clone-8f430.appspot.com",
  messagingSenderId: "946405623495",
  appId: "1:946405623495:web:ccd04ff809f64e3c7120e2",
  measurementId: "G-Z1EQEZRF49"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;