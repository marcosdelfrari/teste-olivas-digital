import React from "react";
import ContactForm from "./ContatoForm";
import { contato } from "@/lib/data";
import SpaceSection from "./SpaceSection";

function Contato() {
  return (
    <div className="mx-5">
      <h1
        className="font-medium flex flex-col text-4xl sm:text-5xl"
        dangerouslySetInnerHTML={{ __html: contato.title }}
      />

      <p className="mt-4">{contato.description}</p>
      <div className="mt-5">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contato;
