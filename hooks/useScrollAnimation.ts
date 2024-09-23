"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollAnimationValues {
  ref: React.RefObject<HTMLDivElement>;
  scaleProgress: MotionValue<number>;
  opacityProgress: MotionValue<number>;
}

const useScrollAnimation = (
  offsetStart:
    | `${number} ${number}`
    | `${number} start`
    | `${number} end` = "0 1",
  offsetEnd:
    | `${number} ${number}`
    | `${number} start`
    | `${number} end` = "1.33 1"
): ScrollAnimationValues => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offsetStart, offsetEnd],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return {
    ref,
    scaleProgress,
    opacityProgress,
  };
};

export default useScrollAnimation;
