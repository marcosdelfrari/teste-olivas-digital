import { useState, useEffect } from "react";

const useResponsiveItems = () => {
  const [itemsPerGroup, setItemsPerGroup] = useState(3);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    const updateResponsiveValues = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerGroup(1);
        setPostsPerPage(6);
      } else if (width < 1024) {
        setItemsPerGroup(2);
        setPostsPerPage(8);
      } else {
        setItemsPerGroup(3);
        setPostsPerPage(9);
      }
    };

    const resizeObserver = new ResizeObserver(updateResponsiveValues);
    updateResponsiveValues();
    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return { itemsPerGroup, postsPerPage };
};

export default useResponsiveItems;
