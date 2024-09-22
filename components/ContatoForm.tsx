"use client";
import React from "react";
import useContactForm from "@/hooks/useContactForm";
import InputField from "@/components/Inputs/InputField";
import CheckboxField from "@/components/Inputs/CheckboxField";
import TextAreaField from "@/components/Inputs/TextAreaField";
import SubmitButton from "@/components/Inputs/SubmitButton";
import PhoneInputField from "./Inputs/PhoneInputField";

export default function ContactForm() {
  const { formData, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="flex gap-y-2 flex-wrap">
      <div className="w-1/2 pr-1">
        <InputField
          id="fullName"
          label="Nome Completo"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required={true}
        />
      </div>
      <div className="w-1/2 pl-1">
        <InputField
          id="email"
          label="E-mail Corporativo"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required={true}
        />
      </div>
      <div className="sm:pr-1 w-full sm:w-1/2">
        <PhoneInputField
          selectedCountry={formData.phoneCountry}
          onChange={handleChange}
          phoneNumber={formData.phoneNumber}
          error={errors.phoneNumber}
          required={true}
        />
      </div>

      <div className="sm:w-1/2 w-full sm:pl-1">
        <InputField
          id="companyRole"
          label="Qual a sua função na empresa?"
          value={formData.companyRole}
          onChange={handleChange}
          error={errors.companyRole}
          required={true}
        />
      </div>
      <div className="w-full">
        <TextAreaField
          id="message"
          label="Mensagem"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required={true}
        />
      </div>

      <CheckboxField
        id="confirmed"
        label="Ao informar meus dados, eu concordo com a Política de Privacidade e concordo em receber comunicações."
        checked={formData.confirmed}
        onChange={handleChange}
        error={errors.confirmed}
      />
      <div className=" m-auto">
        <SubmitButton>Receber atendimento</SubmitButton>
      </div>
    </form>
  );
}
