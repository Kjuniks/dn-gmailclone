import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC7N9nzXZ3ZAbfG0ljrl8uAxKAJSxMMB8",
  authDomain: "dn-gmclone.firebaseapp.com",
  projectId: "dn-gmclone",
  storageBucket: "dn-gmclone.appspot.com",
  messagingSenderId: "1066848565095",
  appId: "1:1066848565095:web:61fa90b9ce288c774c61c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
