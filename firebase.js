import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAyFmGEVceEz5lLGT9CEYaFSKzKOEQ54F0",
    authDomain: "react-native-on-fire-29f77.firebaseapp.com",
    databaseURL: "https://react-native-on-fire-29f77.firebaseio.com",
    projectId: "react-native-on-fire-29f77",
    storageBucket: "react-native-on-fire-29f77.appspot.com",
    messagingSenderId: "833727544389",
    appId: "1:833727544389:web:d7d78a7f8115eb472c372c",
    measurementId: "G-8BB8W2CYLN"
  };
  // Initialize Firebase

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  
 // firebase.analytics();