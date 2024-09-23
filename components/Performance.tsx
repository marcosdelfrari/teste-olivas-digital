"use client";
import { performance } from "@/lib/data";
import React from "react";
import Image from "next/image";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

function Performance() {
  const { ref, scaleProgress, opacityProgress } = useScrollAnimation(
    "0 1",
    "1 1"
  );

  return (
    <section id="performance">
      <div className="mx-5 sm:flex sm:items-center sm:justify-center sm:flex-col sm:gap-y-[64px] sm:mt-[16px] sm:mb-[64px]">
        <div className="mb-5 sm:my-10 flex justify-center">
          <h1 className="text-3xl sm:text-[45px] font-bold text-secondary weight-600">
            {performance.title}
          </h1>
        </div>
        <motion.div
          className="relative max-w-[1043px] sm:gap-x-[80px] flex items-center justify-between overflow-hidden"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <div className="hidden md:flex md:w-[440px] md:relative md:justify-center">
            <Image
              src={performance.perfoImg}
              alt={performance.title}
              className="max-w-full h-auto "
              width="357"
              height="327"
            />
          </div>
          <motion.div
            className="md:w-3/4 z-10"
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <div className=" flex flex-col gap-y-[24px] w-full">
              {" "}
              <div
                className="font-semibold flex text-[#5D5D5D] leading-[46px] flex-wrap gap-x-1 sm:gap-x-3 text-2xl sm:text-[38px]"
                dangerouslySetInnerHTML={{ __html: performance.subtitle }}
              />
              <p className="text-base my-5 md:my-0  sm:text-xl text-shadow-white text-[#7f7f7f]">
                {performance.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div>
          <ul className="sm:flex sm:gap-x-[88px] justify-center flex-wrap">
            {performance.tags.map((tag, index) => (
              <li
                key={index}
                className={`flex-1 sm:gap-y-[9px] w-full h-full ${
                  index === 1 ? "sm:w-[117px] sm:max-w-[117px]" : "sm:w-[200px]"
                } flex sm:flex-col sm:text-center justify-center items-center md:text-xl text-shadow-white mt-[15px] sm:mt-[30px] text-[#7f7f7f]`}
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
                <div className="sm:flex sm:items-center sm:justify-center sm:text-center sm:h-[44px]">
                  {tag.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Performance;
