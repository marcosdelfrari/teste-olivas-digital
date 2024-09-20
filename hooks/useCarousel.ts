import { useState, useCallback } from "react";

const useCarousel = (totalGroups: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalGroups - 1
    );
  }, [totalGroups]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex < totalGroups - 1 ? prevIndex + 1 : 0
    );
  }, [totalGroups]);

  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return {
    activeIndex,
    handlePrev,
    handleNext,
    handleDotClick,
    setActiveIndex,
  };
};

export default useCarousel;
