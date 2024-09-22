import React from "react";

interface Country {
  code: string;
  flag: string;
}

interface CountrySelectProps {
  selectedCountry: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  selectedCountry,
  onChange,
}) => {
  const countryCodes: Country[] = [
    { code: "+55", flag: "🇧🇷" },
    { code: "+01", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+33", flag: "🇫🇷" },
    { code: "+49", flag: "🇩🇪" },
    { code: "+81", flag: "🇯🇵" },
  ];

  return (
    <select
      name="phoneCountry"
      value={selectedCountry}
      onChange={onChange}
      className="block rounded-l-[8px] bg-white text-xl outline-none"
    >
      {countryCodes.map((country: Country) => (
        <option className="bg-white" key={country.code} value={country.code}>
          {country.flag}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
