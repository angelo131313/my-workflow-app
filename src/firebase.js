// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAz7ntITAB537ZXJlKH7AH24vZkL6r7caE",
  authDomain: "my-workflow-app.firebaseapp.com",
  projectId: "my-workflow-app",
  storageBucket: "my-workflow-app.firebasestorage.app",
  messagingSenderId: "315796965375",
  appId: "1:315796965375:web:4dd0be02fce68785d349ca"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
