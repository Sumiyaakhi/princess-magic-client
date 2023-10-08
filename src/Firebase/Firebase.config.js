// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBReelWRHvbTCrTm1nyatcPUMLfc13wN_c",
    authDomain: "princess-magic-615a1.firebaseapp.com",
    projectId: "princess-magic-615a1",
    storageBucket: "princess-magic-615a1.appspot.com",
    messagingSenderId: "695129762175",
    appId: "1:695129762175:web:dd4f1a8bf71494de96524a"
  };
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId

// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;