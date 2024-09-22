import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function WhatsappFloat() {
  return (
    <div className="fixed z-50 bottom-5 right-5 flex items-center group cursor-pointer">
      <div className="bg-secondary custom-shadow w-16 h-16 flex items-center justify-center rounded-full  transition-all duration-1000 ease-in-out group-hover:w-48 relative overflow-hidden">
        <a
          className="w-full h-full flex items-center justify-center"
          href="https://wa.me/5599999999999"
        >
          <FaPhoneAlt className="text-white text-xl transition-opacity duration-1000 ease-in-out group-hover:opacity-0 absolute" />

          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out group-hover:delay-300">
            Entre em contato
          </span>
        </a>
      </div>
    </div>
  );
}

export default WhatsappFloat;
