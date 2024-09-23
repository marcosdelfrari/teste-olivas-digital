import { id, footer } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="sm:h-227 px-5 py-[30px] flex gap-2 flex-col sm:flex-row bg-[#E6E6E6] sm:justify-center sm:items-center">
        <div className="max-w-[800px] flex sm:gap-x-[56px]">
          <div className="max-w-[417px]">
            <Image src={id.logoSvg} alt="Logo" width="180" height="42" />
            <p className="text-[#7F7F7F] pt-3 text-sm">{footer.info}</p>
          </div>
          <div className="flex flex-col gap-y-[13px]">
            <h2 className="text-[#5D5D5D] text-xl font-bold">Fale conosco</h2>
            <div className="flex sm:gap-x-[35px]">
              <div>
                <p className="text-[#7F7F7F] text-base font-semibold">
                  Atendimento:
                </p>
                <p className="text-[#7F7F7F] text-base">{footer.tel}</p>
              </div>
              <div>
                {" "}
                <h2 className="text-[#7F7F7F] text-base font-semibold">
                  Redes sociais
                </h2>
                <div className="flex gap-3">
                  {footer.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B1B1B1] hover:text-primary"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width="32"
                        height="32"
                      />
                    </a>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#B1B1B1] flex items-center w-full justify-center text-center h-[46px] text-white">
        © 2014-2024 - Olivas Digital
      </div>
    </div>
  );
}

export default Footer;
