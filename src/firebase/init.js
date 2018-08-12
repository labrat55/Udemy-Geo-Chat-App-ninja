import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAy-tA5LTiR58N0jt8icYaBmixrxt4wkQw",
    authDomain: "mychat-31d10.firebaseapp.com",
    databaseURL: "https://mychat-31d10.firebaseio.com",
    projectId: "mychat-31d10",
    storageBucket: "mychat-31d10.appspot.com",
    messagingSenderId: "356724016382"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
