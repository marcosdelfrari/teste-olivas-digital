import React from "react";
import CountrySelect from "./CountrySelect";

interface PhoneInputFieldProps {
  selectedCountry: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  phoneNumber: string;
  error?: string;
  required?: boolean;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  selectedCountry,
  onChange,
  phoneNumber,
  error,
  required,
}) => {
  return (
    <div className="sm:pr-1 w-full">
      <label
        htmlFor="phoneNumber"
        className={`block text-base font-extrabold ${
          error ? "text-red-500" : "text-[#5d5d5d]"
        }`}
      >
        Telefone
        {required && (
          <span className={`ml-1 ${error ? "text-red-500" : "text-primary"}`}>
            *
          </span>
        )}
      </label>
      <div
        className={`mt-1 w-full flex rounded-[8px] border h-[40px] sm:h-[56px] ${
          error ? "border-red-500" : "border-primary"
        } focus:border-secondary focus:ring-0 outline-none`}
      >
        <CountrySelect selectedCountry={selectedCountry} onChange={onChange} />
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={onChange} // Adicionando o onChange aqui
          className={`mt-1 block w-full rounded-r-[8px] outline-none`}
          maxLength={11}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm">
          É necessário um número de telefone válido de 10 dígitos
        </p>
      )}
    </div>
  );
};

export default PhoneInputField;
