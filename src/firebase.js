import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByt6PUVG9jTaICnKIp3UrUgirnl3FQPiE",
  authDomain: "smashed-site.firebaseapp.com",
  projectId: "smashed-site",
  storageBucket: "smashed-site.appspot.com",
  messagingSenderId: "15067866093",
  appId: "1:15067866093:web:0245f2c5d58a4f51187de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}