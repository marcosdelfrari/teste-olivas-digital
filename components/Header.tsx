"use client";
import React from "react";
import { header } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Header() {
  return (
    <header
      id="sobre"
      className="relative py-44  sm:py-0 px-10 md:px-5 xl:p-0 flex items-center justify-between overflow-hidden"
    >
      <motion.div
        className="w-3/4 z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h1
          className="font-medium flex flex-col text-4xl sm:text-5xl"
          dangerouslySetInnerHTML={{ __html: header.title }}
        />
        <p className="text-base sm:text-xl text-shadow-white my-[30px] sm:max-w-[671px] text-[#7f7f7f]">
          {header.description}
        </p>
        <Link href="#contato">
          <button className="sm:h-[64px] sm:w-[360px] h-[46px] w-[200px] text-base sm:text-xl font-bold rounded-full text-white bg-primary hover:bg-secondary">
            Contato
          </button>{" "}
        </Link>
      </motion.div>
      <motion.div
        className="absolute md:relative -right-72 md:right-0 w-full max-w-[528px]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Image
          src={header.img}
          alt="Logo"
          width="528"
          height="530"
          quality="100"
        />
      </motion.div>
    </header>
  );
}

export default Header;
