import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

  var firebaseConfig = {
    apiKey: "AIzaSyACi0OL7jzN29WdWuZWWdBAQd8NI20AfYA",
    authDomain: "info-core-73435.firebaseapp.com",
    projectId: "info-core-73435",
    storageBucket: "info-core-73435.appspot.com",
    messagingSenderId: "1035999929861",
    appId: "1:1035999929861:web:2208969c8ad3657eff5e6c",
    measurementId: "G-4YYTP1ZFYN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = firebase.firestore();