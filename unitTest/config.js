import { initializeApp } from "firebase-app.js";
import { getDatabase, update, set, ref, remove, push, child, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyClqbgmtcPuED7LE3-2XXSooypjXiHQj38",
  authDomain: "roome-5bfa9.firebaseapp.com",
  databaseURL: "https://roome-5bfa9-default-rtdb.firebaseio.com",
  projectId: "roome-5bfa9",
  storageBucket: "roome-5bfa9.appspot.com",
  messagingSenderId: "564378590257",
  appId: "1:564378590257:web:6e18a1d7269d83af318910"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db =  getDatabase(app);