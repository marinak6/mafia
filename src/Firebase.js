import * as firebase from "firebase";

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "mafia-f2367.firebaseapp.com",
  databaseURL: "https://mafia-f2367.firebaseio.com",
  projectId: "mafia-f2367",
  storageBucket: "mafia-f2367.appspot.com",
  messagingSenderId: "368665939999"
};
firebase.initializeApp(config);
