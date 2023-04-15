// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxyOUyXgzz4xzak0mHIBFuLyBw1xZsUOs",
  authDomain: "transport-client-side.firebaseapp.com",
  projectId: "transport-client-side",
  storageBucket: "transport-client-side.appspot.com",
  messagingSenderId: "677679693002",
  appId: "1:677679693002:web:09296819869554d2494833",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
