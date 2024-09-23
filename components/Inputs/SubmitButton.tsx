import React from "react";

interface SubmitButtonProps {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => (
  <button
    type="submit"
    className="bg-primary sm:h-[64px] font-bold sm:text-xl hover:bg-secondary sm:w-[360px] h-[46px] w-[200px] rounded-full py-2 px-4  text-sm text-white focus:outline-none "
  >
    {children}
  </button>
);

export default SubmitButton;
