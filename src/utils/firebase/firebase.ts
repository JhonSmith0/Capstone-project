import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env["VITE_apiKey"],
  authDomain: import.meta.env["VITE_authDomain"],
  projectId: import.meta.env["VITE_projectId"],
  storageBucket: import.meta.env["VITE_storageBucket"],
  messagingSenderId: import.meta.env["VITE_messagingSenderId"],
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Providers
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// getauth
export const auth = getAuth();

// SignIN
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// db
export const db = getFirestore();

// methods
export const createUserDocumentFromAuth = async (
  credentials: UserCredential
) => {
  const userDocRef = doc(db, "users", credentials.user.uid);
  const userData = await getDoc(userDocRef);

  const exists = userData.exists();

  console.log("doc ref", userDocRef);
  console.log("docdata ", userData);
  console.log("exists ", exists);
  if (exists) return userDocRef;

  try {
    const { displayName, email } = credentials.user;
    console.log("Criando", { displayName, email });
    const userDoc = await setDoc(userDocRef, {
      email,
      displayName,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error(error);
  }
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
