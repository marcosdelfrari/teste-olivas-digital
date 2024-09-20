// src/hooks/useResponsiveItems.ts
import { useState, useEffect } from "react";

const useResponsiveItems = () => {
  const [itemsPerGroup, setItemsPerGroup] = useState(3);

  useEffect(() => {
    const updateItemsPerGroup = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerGroup(1); // 1 item para telas menores que sm
      } else if (width < 1024) {
        setItemsPerGroup(2); // 2 itens para telas sm
      } else {
        setItemsPerGroup(3); // 3 itens para telas md e maiores
      }
    };

    const resizeObserver = new ResizeObserver(updateItemsPerGroup);
    updateItemsPerGroup(); // Chama a função ao montar o componente
    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return itemsPerGroup;
};

export default useResponsiveItems;
