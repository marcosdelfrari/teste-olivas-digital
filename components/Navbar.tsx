"use client";
import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import useResponsiveItems from "@/hooks/useResponsiveItems";

import { id } from "@/lib/data";

function Navbar() {
  const { itemsPerGroup } = useResponsiveItems();

  const imageWidth =
    itemsPerGroup === 1 ? 190 : itemsPerGroup === 2 ? 200 : 270;

  return (
    <nav className="z-20 fixed bg-white w-full sm:relative text-primary">
      <div className="flex px-5 2xl:p-0 h-[106px] justify-between items-center">
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
    </nav>
  );
}

export default Navbar;
