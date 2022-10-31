<<<<<<< HEAD
import { InputHTMLAttributes } from "react";
import "./index.scss";

interface IFormInput {
  label: string;
  inputOptions: {
    value: string;
    name: string;
    type: string;
    //
    required?: boolean;
    disabled?: boolean;
    onChange?(e: InputEvent): void;
  } & InputHTMLAttributes<any>;
}

export default function FormInput({ label, inputOptions }: IFormInput) {
  const conditionalClass = inputOptions.value.length ? "shrink" : "";
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label className={`form-input-label ${conditionalClass}`}>
          {label}
        </label>
      )}
    </div>
  );
}
=======
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";

import "./index.scss";
export default function FormInput({
  label,
  ...otherProps
}: {
  label: string;
  value: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  disabled: boolean;
  type: HTMLInputTypeAttribute;
}) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
}
/*
 type="text"
        name="displayName"
        value={displayName}
        onChange={onChange}
        required
        disabled={wait}
*/
>>>>>>> a29043baa0c759910703c563eb8b3a0fb9f7500c
