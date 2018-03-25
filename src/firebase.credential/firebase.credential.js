// Initialize Firebase
import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// Creates and initializes a Firebase app instance.
firebase.initializeApp(config);

const database = firebase.database(); //Gets the Database service for the default app or a given app.
const ref = firebase.database().ref('ionic-test-941d9'); // refrence to the root location of the database.
const firebaseAuth = firebase.auth(); // Gets the Auth service for the app.
const storageRef = firebase.storage().ref(); // Points to the root storage reference

//example - this update to job and city that is child location then dont touch any child of location
// ref.update({
//  job: 'developper',
//  'location/city': honnolulu
// });

// database.ref('appointments')
//   .once('value')
//   .then((snapshot) => {
//     // console.log(snapshot);
//     const appointment = [];
//     snapshot.forEach((childSnapshot) => {
//       appointment.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(appointment);
//   }).catch((e) => {
//     console.log('error', e);
//   }) 


// database.ref('appointments')
// .on('value', (snapshot) => {

//   const appointment = [];
//   snapshot.forEach((childSnapshot) => {
//     appointment.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(appointment);
// })


// console.log('credentail');

export { 
  firebase,
  ref,
  firebaseAuth,
  storageRef, 
  database as default
};