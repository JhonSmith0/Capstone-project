import { FormEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input";

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
export default function SignUpForm() {
  const [formState, setFormState] = useState(defaultForm);
  const [wait, setWait] = useState(false);
  const { displayName, email, password, passwordConfirm } = formState;

  function onChange({ target }: any) {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }

  function resetForm() {
    setFormState(
      Object.entries(formState).reduce((acc: any, [key, value]) => {
        acc[key] = "";
        return acc;
      }, {})
    );
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (password !== passwordConfirm) return;

    setWait(true);
    try {
      const data = await createAuthUserWithEmailAndPassword(email, password);
      data && createUserDocumentFromAuth(data.user, { displayName });
      resetForm();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      }

      console.error(error);
    } finally {
      setWait(false);
    }
  }

  return (
    <div>
      <h1>SignUp with your email and password</h1>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          required
          disabled={wait}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
          disabled={wait}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
          disabled={wait}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          required
          disabled={wait}
        />
        <button type="submit" disabled={wait}>
          SignUp
        </button>
      </form>
    </div>
  );
}
