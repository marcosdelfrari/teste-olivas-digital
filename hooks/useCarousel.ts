import { useState, useCallback } from "react";

const useCarousel = (totalGroups: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return {
    activeIndex,
    handleDotClick,
    setActiveIndex,
  };
};

export default useCarousel;
