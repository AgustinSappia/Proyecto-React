
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLOIPjDW9q1acqxe99uzVkWWd-kF9s1ts",
  authDomain: "proyectoreact-e4c12.firebaseapp.com",
  projectId: "proyectoreact-e4c12",
  storageBucket: "proyectoreact-e4c12.appspot.com",
  messagingSenderId: "163217181260",
  appId: "1:163217181260:web:46574cc4a7230cee3982e9",
  measurementId: "G-SXP4VQVCG0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const iniciarFirestore = () =>{
    app;
    analytics;
}