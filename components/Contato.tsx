"use client";
import React from "react";
import ContactForm from "./ContatoForm";
import { contato } from "@/lib/data";
import SpaceSection from "./SpaceSection";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

function Contato() {
  const { ref, scaleProgress, opacityProgress } = useScrollAnimation(
    "0 1",
    "1 1"
  );

  return (
    <section id="contato" className="mx-5 ">
      <div className="sm:max-w-[898px] sm:m-auto sm:flex sm:flex-col sm:gap-y-[64px] ">
        <div className="sm:flex sm:flex-col sm:gap-y-[24px]">
          {" "}
          <h1
            className="font-medium flex flex-col lg:flex-row sm:gap-4 sm:justify-center text-4xl sm:text-5xl"
            dangerouslySetInnerHTML={{ __html: contato.title }}
          />
          <p className="mt-4 lg:text-center text-[#5D5D5D] text-xl">
            {contato.description}
          </p>
        </div>{" "}
        <motion.div
          className="mt-5 sm:m-0"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default Contato;
