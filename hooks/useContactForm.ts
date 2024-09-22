import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phoneCountry: string;
  phoneNumber: string;
  companyRole: string;
  message: string;
  confirmed: boolean;
}

const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneCountry: "+1",
    phoneNumber: "",
    companyRole: "",
    message: "",
    confirmed: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid corporate email is required";
    if (!formData.phoneNumber.match(/^\d{10}$/))
      newErrors.phoneNumber = "Valid 10-digit phone number is required";
    if (!formData.companyRole.trim())
      newErrors.companyRole = "Company role is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.confirmed)
      newErrors.confirmed = "You must confirm the information";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        phoneCountry: "+1",
        phoneNumber: "",
        companyRole: "",
        message: "",
        confirmed: false,
      });
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useContactForm;
