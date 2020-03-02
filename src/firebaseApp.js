
import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwnl3RtvbCeyQCc-wVAlrqhJ1AlhYDTOo",
    authDomain: "opjot-nijjar-project-5.firebaseapp.com",
    databaseURL: "https://opjot-nijjar-project-5.firebaseio.com",
    projectId: "opjot-nijjar-project-5",
    storageBucket: "opjot-nijjar-project-5.appspot.com",
    messagingSenderId: "468885992587",
    appId: "1:468885992587:web:2939484acfdd1ca542508e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;