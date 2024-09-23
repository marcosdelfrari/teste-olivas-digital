import React from "react";
import ContactForm from "./ContatoForm";
import { contato } from "@/lib/data";
import SpaceSection from "./SpaceSection";

function Contato() {
  return (
    <div className="mx-5 ">
      <div className="sm:max-w-[898px] sm:m-auto sm:flex sm:flex-col sm:gap-y-[64px] ">
        <div className="sm:flex sm:flex-col sm:gap-y-[24px]">
          {" "}
          <h1
            className="font-medium flex flex-col sm:flex-row sm:gap-4 sm:justify-center text-4xl sm:text-5xl"
            dangerouslySetInnerHTML={{ __html: contato.title }}
          />
          <p className="mt-4 sm:text-center text-[#5D5D5D] text-xl">
            {contato.description}
          </p>
        </div>{" "}
        <div className="mt-5 sm:m-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contato;
