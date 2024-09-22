// components/Busca.tsx
"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface BuscaProps {
  onSearch: (query: string, type: string) => void; // Aceita dois parâmetros
}

const Busca: React.FC<BuscaProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("keyword");

  const handleSearch = () => {
    onSearch(query, searchType);
  };

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite sua busca"
        className="border h-[40px] border-primary outline-none focus-visible:border-secondary sm:max-w-40 text-sm px-2 py-1 rounded-full w-full"
      />
      <button
        className="absolute right-3 hover:font-secondary"
        onClick={handleSearch}
      >
        <IoIosSearch className="cursor-pointer " />
      </button>
    </div>
  );
};

export default Busca;
