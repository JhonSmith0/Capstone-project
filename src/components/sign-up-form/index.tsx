import { FormEvent, useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import FormInput from "../form-input";
import "./index.scss";

interface ISignUpForm {
  children?: any;
}

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

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
      </form>
    </div>
  );
}
