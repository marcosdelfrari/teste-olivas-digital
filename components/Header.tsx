import React from "react";
import { header } from "@/lib/data";
import Image from "next/image";

function Header() {
  return (
    <header
      id="sobre"
      className="relative pt-44 sm:pt-0 px-10 md:px-5 2xl:p-0 flex items-center justify-between overflow-hidden"
    >
      <div className="w-3/4 z-10">
        <h1
          className="font-medium flex flex-col text-4xl sm:text-5xl"
          dangerouslySetInnerHTML={{ __html: header.title }}
        />
        <p className="text-base sm:text-xl text-shadow-white my-[30px] text-[#7f7f7f]">
          {header.description}
        </p>
        <button className="sm:h-[64px] sm:w-[360px] h-[46px] w-[200px] text-base sm:text-xl font-bold rounded-full text-white bg-primary">
          Contato
        </button>
      </div>
      <div className="absolute md:relative -right-72 md:right-0 w-full max-w-[528px]">
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
