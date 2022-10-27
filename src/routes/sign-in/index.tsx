import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase";

import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form";

const SignIn = () => {
  useEffect(() => {
    getRedirectResult(auth).then((response) => {
      response && createUserDocumentFromAuth(response.user);
    });
  }, []);

  async function signIn() {
    const response = await signInWithGooglePopUp();
    response && createUserDocumentFromAuth(response.user);
  }

  async function signInWithRedirect() {
    const response = await signInWithGoogleRedirect();
    createUserDocumentFromAuth(response);
  }

  return (
    <>
      <h1>Signin now</h1>
      <button onClick={signIn}>SingIn with google</button>
      <button onClick={signInWithRedirect}>SingIn with google redirect</button>
      <SignUpForm />
    </>
  );
};
export default SignIn;
