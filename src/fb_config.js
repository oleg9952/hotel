import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAEXtN51pbNOFMe9WHTWBtNYYtXiwTBUD4",
    authDomain: "hotel-1aa2a.firebaseapp.com",
    databaseURL: "https://hotel-1aa2a.firebaseio.com",
    projectId: "hotel-1aa2a",
    storageBucket: "hotel-1aa2a.appspot.com",
    messagingSenderId: "533221883921",
    appId: "1:533221883921:web:d848ca0a6b6783859131b0"
  };

firebase.initializeApp(firebaseConfig)


export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()