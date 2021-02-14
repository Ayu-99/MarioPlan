import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDwyj7aMn3Cdbwf-oQ4Q_fSEuce5fY83hk",
    authDomain: "marioplan-5d44b.firebaseapp.com",
    projectId: "marioplan-5d44b",
    storageBucket: "marioplan-5d44b.appspot.com",
    messagingSenderId: "549464637619",
    appId: "1:549464637619:web:325181b0b841e1a75330c6"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  
  export default firebase;