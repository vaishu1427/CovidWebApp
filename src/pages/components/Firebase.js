import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
  //   apiKey: "AIzaSyCovf2ogo51teCVXJyDJAwn5xVW1qP18MA",
  // authDomain: "covid-vaccination-27df4.firebaseapp.com",
  // projectId: "covid-vaccination-27df4",
  // storageBucket: "covid-vaccination-27df4.appspot.com",
  // messagingSenderId: "202216350469",
  // appId: "1:202216350469:web:a361a176a0a91a85b0cd6c"

  apiKey: "AIzaSyBzAk9YXb5yNv3PgQVU-lJTxO_32TJIwqs",
  authDomain: "covidapp-b7dfa.firebaseapp.com",
  projectId: "covidapp-b7dfa",
  storageBucket: "covidapp-b7dfa.appspot.com",
  messagingSenderId: "817608680663",
  appId: "1:817608680663:web:c300a6fbd79efbb11c3c92"
});



export default firebaseConfig;