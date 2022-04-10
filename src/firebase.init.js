// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgBx4OoiMpMcL1Z9OBFizBT2PbVXmK6js",
  authDomain: "ema-jon-project-955b0.firebaseapp.com",
  projectId: "ema-jon-project-955b0",
  storageBucket: "ema-jon-project-955b0.appspot.com",
  messagingSenderId: "1051180649634",
  appId: "1:1051180649634:web:c4f9a098e6af6d77139bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth