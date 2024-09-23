"use client";
import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import useResponsiveItems from "@/hooks/useResponsiveItems";

import { id } from "@/lib/data";
import { motion } from "framer-motion";

function Navbar() {
  const { itemsPerGroup } = useResponsiveItems();

  const imageWidth =
    itemsPerGroup === 1 ? 190 : itemsPerGroup === 2 ? 200 : 270;

  return (
    <motion.nav
      className="z-20 max-w-[1254px] mx-auto fixed bg-white w-full sm:relative text-primary"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex px-5 xl:p-0 h-[106px] justify-between items-center">
        <div>
          <a href="/">
            <Image
              src={`${id.logoSvg}`}
              alt="Logo"
              width={imageWidth}
              height="83"
            />
          </a>
        </div>
        <Menu />
      </div>
    </motion.nav>
  );
}

export default Navbar;
