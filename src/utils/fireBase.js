// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE2EqhfSOYKj7ah7bjCA-Yzh3QUWmHMto",
  authDomain: "netflixgpt-bd005.firebaseapp.com",
  projectId: "netflixgpt-bd005",
  storageBucket: "netflixgpt-bd005.appspot.com",
  messagingSenderId: "888965810144",
  appId: "1:888965810144:web:7d30ca8bd17d3f0dca8d85",
  measurementId: "G-FSB482MS3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
