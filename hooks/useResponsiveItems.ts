import { useState, useEffect } from "react";

const useResponsiveItems = () => {
  const [itemsPerGroup, setItemsPerGroup] = useState<number | null>(null);
  const [postsPerPage, setPostsPerPage] = useState<number | null>(null);

  useEffect(() => {
    const updateResponsiveValues = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setItemsPerGroup(1);
        setPostsPerPage(6);
      } else if (width < 1024 && width >= 380) {
        setItemsPerGroup(2);
        setPostsPerPage(8);
      } else {
        setItemsPerGroup(3);
        setPostsPerPage(9);
      }
    };

    updateResponsiveValues();
    window.addEventListener("resize", updateResponsiveValues);

    return () => {
      window.removeEventListener("resize", updateResponsiveValues);
    };
  }, []);

  return {
    itemsPerGroup: itemsPerGroup !== null ? itemsPerGroup : 3, // fallback para 3
    postsPerPage: postsPerPage !== null ? postsPerPage : 8, // fallback para 8
  };
};

export default useResponsiveItems;
