// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA3CSAPlKdWZRvHCF4lKaHPHtQAuOFDGF4',
    authDomain: 'astra-fc4a3.firebaseapp.com',
    projectId: 'astra-fc4a3',
    storageBucket: 'astra-fc4a3.appspot.com',
    messagingSenderId: '1086541251007',
    appId: '1:1086541251007:web:8b87b143498f4f329c610a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();