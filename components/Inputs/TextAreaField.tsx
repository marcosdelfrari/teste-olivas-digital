import React from "react";

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean; // Adicionando a prop required
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  required, // Recebendo a prop
}) => (
  <div>
    <label
      htmlFor={id}
      className={`block text-base font-bold ${
        error ? "text-red-500" : "text-[#5d5d5d]"
      }`} // Mudando a cor do label com base no erro
    >
      {label}
      {required && (
        <span className={`ml-1 ${error ? "text-red-500" : "text-primary"}`}>
          *
        </span>
      )}{" "}
      {/* Asterisco */}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={4}
      className={`mt-1 block w-full rounded-[8px] border ${
        error ? "border-red-500" : "border-primary"
      } focus:border-secondary focus:ring-0 outline-none`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default TextAreaField;
