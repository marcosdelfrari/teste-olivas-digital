import { performance } from "@/lib/data";
import React from "react";
import Image from "next/image";

function Performance() {
  return (
    <section id="performance">
      <div className="mx-5">
        <div className="mb-5 sm:my-10 flex justify-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-secondary weight-600">
            {performance.title}
          </h1>
        </div>
        <div className="relative  flex items-center justify-between overflow-hidden">
          <div className="hidden md:flex md:relative lg:w-full max-w-[306px]">
            <Image
              src={performance.perfoImg}
              alt={performance.title}
              className="max-w-full h-auto "
              width="800"
              height="400"
            />
          </div>
          <div className="md:w-3/4 z-10">
            <h1
              className="font-medium flex sm:justify-center flex-wrap text-center gap-1 sm:gap-3 text-2xl sm:text-3xl"
              dangerouslySetInnerHTML={{ __html: performance.subtitle }}
            />
            <p className="text-base my-5 md:my-10  sm:text-xl text-shadow-white text-[#7f7f7f]">
              {performance.description}
            </p>

            <ul className="sm:flex justify-center flex-wrap">
              {performance.tags.map((tag, index) => (
                <li
                  key={index}
                  className="flex-1 w-full h-full sm:max-w-[176px] text-base sm:flex-col flex sm:text-center sm:justify-center items-center md:text-xl text-shadow-white mt-[15px] sm:mt-[30px] text-[#7f7f7f]"
                >
                  {tag.icon && (
                    <Image
                      src={tag.icon}
                      alt={tag.text}
                      width="60"
                      height="60"
                      className="flex w-[60px] mr-4 sm:m-0"
                    />
                  )}
                  {tag.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
