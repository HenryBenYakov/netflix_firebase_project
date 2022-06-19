import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTyVbfAAzfRMXPgD3fa3Ra_pXQ3gfGLOY",
    authDomain: "netflix-project-3304a.firebaseapp.com",
    projectId: "netflix-project-3304a",
    storageBucket: "netflix-project-3304a.appspot.com",
    messagingSenderId: "45415662217",
    appId: "1:45415662217:web:edc9632cc8f6f2bd9afc58"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
