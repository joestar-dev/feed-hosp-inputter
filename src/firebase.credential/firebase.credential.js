
// Initialize Firebase
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDAyL6e_LJ2lp8G3ERLAIZ2MdvqNqj5wd0",
  authDomain: "ionic-test-941d9.firebaseapp.com",
  databaseURL: "https://ionic-test-941d9.firebaseio.com",
  projectId: "ionic-test-941d9",
  storageBucket: "ionic-test-941d9.appspot.com",
  messagingSenderId: "1026896048440"
};

// Creates and initializes a Firebase app instance.
firebase.initializeApp(config);

const database = firebase.database(); //Gets the Database service for the default app or a given app.
const ref = firebase.database().ref(); // refrence to the root location of the database.
const firebaseAuth = firebase.auth(); // Gets the Auth service for the app.
const storageRef = firebase.storage().ref(); // Points to the root storage reference

export {
    database,
    ref,
    firebaseAuth,
    storageRef
};