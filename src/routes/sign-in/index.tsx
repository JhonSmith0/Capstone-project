import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  async function signIn() {
    const response = await signInWithGooglePopUp();
    createUserDocumentFromAuth(response);
  }

  return (
    <>
      <h1>Signin now</h1>
      <button onClick={signIn}>SingIn with google</button>
    </>
  );
};
export default SignIn;
