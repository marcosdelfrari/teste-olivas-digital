"use client";

import useContactForm from "../hooks/useContactForm"; // ajuste o caminho conforme necessário

const countryCodes = [
  { code: "+55", flag: "🇧🇷" },
  { code: "+01", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+33", flag: "🇫🇷" },
  { code: "+49", flag: "🇩🇪" },
  { code: "+81", flag: "🇯🇵" },
];

export default function ContactForm() {
  const { formData, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="flex mx-5 flex-wrap">
      <div className="w-1/2 pr-1">
        <label
          htmlFor="fullName"
          className={`block text-base font-bold ${
            errors.fullName ? "text-red-500" : "text-[#5d5d5d]"
          }`}
        >
          Nome Completo
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-[8px] border h-[40px] sm:h-[56px] ${
            errors.fullName ? "border-red-500" : "border-primary"
          } focus:border-secondary focus:ring-0 outline-none`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
      </div>

      <div className="w-1/2 pr-1">
        <label
          htmlFor="email"
          className={`block text-base font-bold ${
            errors.email ? "text-red-500" : "text-[#5d5d5d]"
          }`}
        >
          E-mail Corporativo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-[8px] border h-[40px] sm:h-[56px] ${
            errors.email ? "border-red-500" : "border-primary"
          } focus:border-secondary focus:ring-0 outline-none`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="sm:pr-1 w-full sm:w-1/2">
        <label
          htmlFor="phoneNumber"
          className={`block text-base font-bold ${
            errors.phoneNumber ? "text-red-500" : "text-[#5d5d5d]"
          }`}
        >
          Telefone
        </label>
        <div
          className={`mt-1 w-full flex rounded-[8px] border h-[40px] sm:h-[56px] ${
            errors.phoneNumber ? "border-red-500" : "border-primary"
          } focus:border-secondary focus:ring-0 outline-none`}
        >
          <select
            name="phoneCountry"
            value={formData.phoneCountry}
            onChange={handleChange}
            className="block rounded-l-[8px] bg-white text-xl outline-none"
          >
            {countryCodes.map((country) => (
              <option
                className="bg-white"
                key={country.code}
                value={country.code}
              >
                {country.flag}
              </option>
            ))}
          </select>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-r-[8px] outline-none`}
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="sm:w-1/2 w-full sm:pl-1">
        <label
          htmlFor="companyRole"
          className={`block text-base font-bold ${
            errors.companyRole ? "text-red-500" : "text-[#5d5d5d]"
          }`}
        >
          Qual a sua função na empresa?
        </label>
        <input
          id="companyRole"
          name="companyRole"
          type="text"
          value={formData.companyRole}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-[8px] border h-[40px] sm:h-[56px] ${
            errors.companyRole ? "border-red-500" : "border-primary"
          } focus:border-secondary focus:ring-0 outline-none`}
        />
        {errors.companyRole && (
          <p className="text-red-500 text-sm">{errors.companyRole}</p>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="message"
          className={`block text-base font-bold ${
            errors.message ? "text-red-500" : "text-[#5d5d5d]"
          }`}
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`mt-1 block w-full rounded-[8px] border  ${
            errors.message ? "border-red-500" : "border-primary"
          } focus:border-secondary focus:ring-0 outline-none`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="confirmed"
          name="confirmed"
          type="checkbox"
          checked={formData.confirmed}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="confirmed" className="text-sm text-gray-700">
          Ao informar meus dados, eu concordo com a Política de Privacidade e
          concordo em receber comunicações.
        </label>
      </div>
      {errors.confirmed && (
        <p className="text-red-500 text-sm">{errors.confirmed}</p>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Receber atendimento
      </button>
    </form>
  );
}
