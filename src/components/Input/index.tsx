import React from "react";
import "./style.scss";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  required,
  onChange,
}) => {
  return (
    <div className="input-field">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
