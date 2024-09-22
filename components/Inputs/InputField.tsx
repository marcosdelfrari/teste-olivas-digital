import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
}) => (
  <div>
    <label
      htmlFor={id}
      className={`block text-base font-bold ${
        error ? "text-red-500" : "text-[#5d5d5d]"
      }`}
    >
      {label}
      {required && (
        <span className={`ml-1 ${error ? "text-red-500" : "text-primary"}`}>
          *
        </span>
      )}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full rounded-[8px] border h-[40px] sm:h-[56px] ${
        error ? "border-red-500" : "border-primary"
      } focus:border-secondary focus:ring-0 outline-none`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default InputField;
