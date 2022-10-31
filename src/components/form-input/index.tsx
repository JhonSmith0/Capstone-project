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
