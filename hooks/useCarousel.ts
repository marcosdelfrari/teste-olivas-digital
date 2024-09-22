import { useState, useCallback } from "react";

const useCarousel = (totalGroups: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = useCallback(
    (index: number) => {
      if (index >= totalGroups) {
        setActiveIndex(0); // Reinicia os dots
      } else {
        setActiveIndex(index);
      }
    },
    [totalGroups]
  );

  return {
    activeIndex,
    handleDotClick,
    setActiveIndex,
  };
};

export default useCarousel;
