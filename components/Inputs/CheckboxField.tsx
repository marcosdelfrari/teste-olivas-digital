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
    <div className="flex items-center space-x-2">
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

      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default CheckboxField;
