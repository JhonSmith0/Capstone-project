import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  UserCredential,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  credentials: UserCredential
) => {
  const userDocRef = doc(db, "users", credentials.user.uid);
  const userData = await getDoc(userDocRef);

  const exists = userData.exists();
  if (exists) return userDocRef;

  const { displayName, email } = credentials.user;
  try {
    console.log("Criando...");
    const userDoc = await setDoc(userDocRef, {
      email,
      displayName,
      createdAt: new Date(),
    });
    console.log("Criado!");
  } catch (error) {
    console.log("Erro ao criar doc!");
    console.log(error);
  }
};
