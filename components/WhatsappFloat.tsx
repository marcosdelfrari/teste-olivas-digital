import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Certifique-se de ter react-icons instalado

function WhatsappFloat() {
  return (
    <div className="fixed bottom-5 right-5 flex items-center group cursor-pointer">
      {/* Container do botão */}
      <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:w-48 relative overflow-hidden">
        {/* Ícone de telefone */}
        <FaPhoneAlt className="text-white text-xl transition-opacity duration-1000 ease-in-out group-hover:opacity-0 absolute" />

        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out group-hover:delay-300">
          Entre em contato
        </span>
      </div>
    </div>
  );
}

export default WhatsappFloat;
