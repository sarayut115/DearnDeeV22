import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvz71g5PfM0vKL9vJkKC6VQS_kxSXJ6oA",
    authDomain: "test123-ffaa7.firebaseapp.com",
    projectId: "test123-ffaa7",
    storageBucket: "test123-ffaa7.appspot.com",
    messagingSenderId: "935547716742",
    appId: "1:935547716742:web:4de9e6852c9cf51fb4fd07",
    measurementId: "G-W10JT09Y9Y"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase};