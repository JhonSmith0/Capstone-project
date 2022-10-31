import { FormEvent, useState } from "react";
<<<<<<< HEAD
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import FormInput from "../form-input";
import "./index.scss";

interface ISignUpForm {
  children?: any;
}

const defaultFormFields = {
=======
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input";

const defaultForm = {
>>>>>>> a29043baa0c759910703c563eb8b3a0fb9f7500c
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
<<<<<<< HEAD

export default function SignUpForm(props: ISignUpForm) {
  const { children } = props;

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, passwordConfirm } = formFields;
  const [wait, setWait] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (wait) return;

    setWait(true);
    console.log(await createAuthUserWithEmailAndPassword(email, password));
    setWait(false);
  }

  function onChange({ target }: any) {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="sign-up-container">
      <h2>Sign Up with your email and password</h2>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Display name"
          inputOptions={{
            onChange,
            name: "displayName",
            value: displayName,
            type: "text",
            required: true,
            disabled: wait,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            onChange,
            name: "email",
            value: email,
            type: "email",
            required: true,
            disabled: wait,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            onChange,
            name: "password",
            value: password,
            type: "password",
            required: true,
            disabled: wait,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            onChange,
            name: "passwordConfirm",
            value: passwordConfirm,
            type: "password",
            required: true,
            disabled: wait,
          }}
        />
=======
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
>>>>>>> a29043baa0c759910703c563eb8b3a0fb9f7500c
      </form>
    </div>
  );
}
