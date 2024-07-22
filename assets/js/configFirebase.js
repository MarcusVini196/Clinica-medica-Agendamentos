import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxjbzrp6Ui9xfx31u_WspHzf6FefBEX94",
  authDomain: "clinica-saude-em-dia-d75f7.firebaseapp.com",
  projectId: "clinica-saude-em-dia-d75f7",
  storageBucket: "clinica-saude-em-dia-d75f7.appspot.com",
  messagingSenderId: "410672853545",
  appId: "1:410672853545:web:babe43f3002e62681a2238",
  measurementId: "G-0NTH7VEY2G"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  set,
  ref,
  push,
  onChildAdded,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  auth,
  signOut,
};