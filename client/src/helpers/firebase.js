import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "mern-blog-31c5e.firebaseapp.com",
  projectId: "mern-blog-31c5e",
  storageBucket: "mern-blog-31c5e.firebasestorage.app",
  messagingSenderId: "795924263375",
  appId: "1:795924263375:web:d020943c0f2d076ae962ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }