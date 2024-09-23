import React from "react";

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  checked,
  onChange,
  error,
}) => (
  <div className="py-4">
    <div className="flex">
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`h-8 w-8 border-primary rounded transition-colors duration-200 ${
          checked ? "bg-secondary" : "bg-transparent"
        }`}
      />

      <label htmlFor={id} className="sm:text-lg pl-4 text-sm text-[#5d5d5d]">
        {label}
      </label>
    </div>
    {error && <p className="text-red-500 text-sm">É necessário confirmar.</p>}
  </div>
);

export default CheckboxField;
