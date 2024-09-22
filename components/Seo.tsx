import React from "react";
import { seo } from "@/lib/data";
import Image from "next/image";

function Seo() {
  return (
    <div className="mx-5 2xl:mx-0 custom-shadow rounded-[32px] p-10 md:px-5 ">
      <div className="mb-5 sm:my-10 flex justify-center">
        <h1
          className="font-medium flex flex-col md:flex-row  text-center gap-1 sm:gap-3 text-4xl sm:text-5xl"
          dangerouslySetInnerHTML={{ __html: seo.title }}
        />
      </div>
      <div className="relative  flex items-center justify-between overflow-hidden">
        <div className="md:w-3/4 z-10">
          <p className="text-base sm:mb-5 sm:text-xl text-shadow-white text-[#7f7f7f]">
            {seo.description}
          </p>
          <p className="mt-5 text-base sm:text-xl text-shadow-white text-[#7f7f7f]">
            {seo.titleTags}
          </p>
          <ul>
            {seo.tags.map((tag, index) => (
              <li
                key={index}
                className="text-base sm:text-xl text-shadow-white mt-[15px] sm:mt-[30px] text-[#7f7f7f]"
              >
                {tag.icon && (
                  <Image
                    src={tag.icon}
                    alt={tag.text}
                    width="24"
                    height="24"
                    className="inline-block mr-2"
                  />
                )}
                {tag.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Exiba a imagem de SEO */}
        <div className="hidden md:flex md:relative lg:w-full max-w-[383px]">
          <Image
            src={seo.seoImg}
            alt={seo.title}
            className="max-w-full h-auto "
            width="800"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default Seo;
