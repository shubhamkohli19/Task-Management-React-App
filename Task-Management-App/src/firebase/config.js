import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyByKpcE3c1Fynss76qZzSN6ttjA0kYyvy0",
    authDomain: "stream-line1.firebaseapp.com",
    projectId: "stream-line1",
    storageBucket: "stream-line1.appspot.com",
    messagingSenderId: "406341212856",
    appId: "1:406341212856:web:b9770677597832db2e724d"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.Timestamp;

  export {projectFirestore, projectAuth, projectStorage, timestamp}