// importo la libreria firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// declaro la configuracion de firebase en un objeto
const firebaseConfig = {
  apiKey: "AIzaSyDjPb1h9Giz5ECJ8uRqLZs3G3jl5p3e0DY",
  authDomain: "kong-beer.firebaseapp.com",
  projectId: "kong-beer",
  storageBucket: "kong-beer.appspot.com",
  messagingSenderId: "685782753883",
  appId: "1:685782753883:web:8922d55a102939179d157e"
};

// inicializo firebase con la configuracion
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;