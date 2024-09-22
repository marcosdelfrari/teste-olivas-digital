import React from "react";
import { header } from "@/lib/data";
import Image from "next/image";

function Header() {
  return (
    <header className="relative px-10 md:px-5 2xl:p-0 flex items-center justify-between overflow-hidden">
      {" "}
      {/* Adicione overflow-hidden aqui */}
      <div className="w-3/4 z-10">
        <h1
          className="font-medium flex flex-col text-4xl sm:text-5xl" // Corrigi weight-500 para font-medium
          dangerouslySetInnerHTML={{ __html: header.title }}
        />
        <p className="text-base sm:text-xl text-shadow-white my-[30px] text-[#7f7f7f]">
          {header.description}
        </p>
        <button className="w-72 h-16 text-xl font-bold rounded-full text-white bg-primary">
          Contato
        </button>
      </div>
      <div className="absolute md:relative -right-72 md:right-0 w-full max-w-[528px]">
        {" "}
        {/* Use right negativo */}
        <Image
          src={header.img}
          alt="Logo"
          width="528"
          height="530"
          quality="100"
        />
      </div>
    </header>
  );
}

export default Header;
