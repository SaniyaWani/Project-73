import  firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBHpmWqyk9WLUbPvtbpkahfkXcu9r5gMEA",
    authDomain: "story-hub-23ab5.firebaseapp.com",
    projectId: "story-hub-23ab5",
    storageBucket: "story-hub-23ab5.appspot.com",
    messagingSenderId: "267230083237",
    appId: "1:267230083237:web:9deb8d118949380accb54c"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();