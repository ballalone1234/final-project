// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBtgxmsP0iwHya8_S5umtpapWaQ16DyQ7I",
    authDomain: "final-project-dc785.firebaseapp.com",
    projectId: "final-project-dc785",
    storageBucket: "final-project-dc785.appspot.com",
    messagingSenderId: "685769275529",
    appId: "1:685769275529:web:c073a2e6b71560bc2c2e58"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db  , auth};
