import React from "react";

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  error,
  required = false,
}) => (
  <div>
    <label
      htmlFor={id}
      className={`block text-base font-extrabold ${
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
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full rounded-[8px] border h-[40px] sm:h-[56px] ${
        error ? "border-red-500" : "border-primary"
      } focus:border-secondary focus:ring-0 outline-none`}
    >
      <option value="" disabled>
        Selecione uma opção
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">Selecione uma opção.</p>}
  </div>
);

export default SelectField;
