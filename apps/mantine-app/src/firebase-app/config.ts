// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { SAMLAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbTKTEVmmYOCJpYQ8QzoiTov0mq98jHxY",
  authDomain: "goodhuman-test11.firebaseapp.com",
  projectId: "goodhuman-test11",
  storageBucket: "goodhuman-test11.appspot.com",
  messagingSenderId: "825969134133",
  appId: "1:825969134133:web:a05d7f8c7be7f3ce353f7c",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const jumpCloudProvider = new SAMLAuthProvider("saml.jumpcloud-test11-saml");
export const entraIdProvider = new SAMLAuthProvider("saml.entraid-test11-saml");
