import { compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDAyL6e_LJ2lp8G3ERLAIZ2MdvqNqj5wd0',
  authDomain: 'ionic-test-941d9.firebaseapp.com',
  databaseURL: 'https://ionic-test-941d9.firebaseio.com',
  storageBucket: 'ionic-test-941d9.appspot.com',
  // messagingSenderId: '1026896048440'
}

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: true, // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, initialState)