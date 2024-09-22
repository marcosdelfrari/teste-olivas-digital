import React from "react";

interface SubmitButtonProps {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => (
  <button
    type="submit"
    className="bg-primary sm:h-[64px] sm:w-[360px] h-[46px] w-[200px] rounded-full py-2 px-4  text-sm font-medium text-white hover:bg-secondary focus:outline-none "
  >
    {children}
  </button>
);

export default SubmitButton;
