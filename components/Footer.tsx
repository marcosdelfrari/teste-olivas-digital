import { id } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <Image src={id.logoSvg} alt="Logo" width="190" height="83" />
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
