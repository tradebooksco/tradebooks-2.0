import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBLr6hIGFNVawVxcIydd6kMjiyIkaTiiY",
  authDomain: "mark-85-f8ced.firebaseapp.com",
  databaseURL: "https://mark-85-f8ced.firebaseio.com",
  projectId: "mark-85-f8ced",
  storageBucket: "mark-85-f8ced.appspot.com",
  messagingSenderId: "473004494375",
  appId: "1:473004494375:web:49e2515a339042f5498802",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
