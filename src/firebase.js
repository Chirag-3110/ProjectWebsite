// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyB4PsqcUoN-grv9uWRbKbx5hYhhr2eASgc",
    authDomain: "projecthub-dbd37.firebaseapp.com",
    projectId: "projecthub-dbd37",
    storageBucket: "projecthub-dbd37.appspot.com",
    messagingSenderId: "100302276968",
    appId: "1:100302276968:web:838fd1fd91823052e6eedd",
    measurementId: "G-Q8C1T0FRNB"
  };
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const storage = app.storage();
export const db = app.firestore();
export {firebaseConfig};

firebase.firestore().settings({ experimentalForceLongPolling: true });


export const functions = app.functions();
export default app;