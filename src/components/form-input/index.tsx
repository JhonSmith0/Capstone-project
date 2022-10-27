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
