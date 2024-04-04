import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import {...} from "firebase/auth";
import {getDatabase} from "firebase/database";
import {getFirestore} from "firebase/firestore";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOI-XRMv4PLu18efTTrTGV0o1E4dTkjwU",
  authDomain: "team-alex-app-cf42d.firebaseapp.com",
  projectId: "team-alex-app-cf42d",
  storageBucket: "team-alex-app-cf42d.appspot.com",
  messagingSenderId: "938646970070",
  appId: "1:938646970070:web:961b8c64c0bf33e8943377",
  measurementId: "G-RHGTVMK8Z7",
  databaseUrl: "https://team-alex-app-cf42d-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
