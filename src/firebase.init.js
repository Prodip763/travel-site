// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBscKhjQtf8QvtMPEz9UWBW5aq6NeX9-c",
  authDomain: "travel-site-d29e6.firebaseapp.com",
  projectId: "travel-site-d29e6",
  storageBucket: "travel-site-d29e6.appspot.com",
  messagingSenderId: "470373228178",
  appId: "1:470373228178:web:2ccd514c46291817e3104b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;